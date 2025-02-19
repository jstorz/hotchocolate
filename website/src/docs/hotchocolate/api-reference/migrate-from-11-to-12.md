---
title: Migrate from Hot Chocolate GraphQL server 11 to 12
---

This guide will walk you through the manual migration steps to get your Hot Chocolate GraphQL server to version 12.

# Scalars

We changed some defaults around scalars. These new defaults can break your existing schema but are, in general, better for newcomers and align better with the overall GraphQL ecosystem. Of course, you can naturally opt out of these new defaults to preserve your current schema's integrity.

## UUID

We changed the name of the UUID scalar from `Uuid` to `UUID`. To maintain the old name, register the type manually like the following:

```csharp
services
    .AddGraphQLServer()
    .AddType(() => new UuidType("Uuid"));
```

Further, we changed the default serialization of UUID values from format `N` (`nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn`) to format `D` (`nnnnnnnn-nnnn-nnnn-nnnn-nnnnnnnnnnnn`). While the format `N` saved a few payload characters, new users, in general, often had issues with that format and some other tooling. New users will now, by default, have a better experience when using non-ChilliCream tooling.

To preserve the old format, you can directly provide the format in the scalar.

```csharp
services
    .AddGraphQLServer()
    .AddType(() => new UuidType(defaultFormat: 'N'));
```

In order to fully preserve version 11 behavior do:

```csharp
services
    .AddGraphQLServer()
    .AddType(() => new UuidType("Uuid", defaultFormat: 'N'));
```

## URL

We changed the name of the URL scalar from `Url` to `URL`. To maintain the old name, register the type manually like the following:

```csharp
services
    .AddGraphQLServer()
    .AddType(() => new UrlType("Url"));
```

# Pagination

## ConnectionType

We have changed the way we infer the name for the connection type when using cursor-based pagination. By default, the connection name is now inferred from the field name instead of the type name.

```SDL
type Person {
  friends: [Person]
}
```

In version 11, we would have created a connection named `PersonConnection`.

```SDL
type Person {
  friends(first: Int, last: Int, after: String, before: String): PersonConnection
}
```

In version 12, we now will infer the connection name as `FriendsConnection`.

```SDL
type Person {
  friends(first: Int, last: Int, after: String, before: String): FriendsConnection
}
```

To keep your schema stable when you migrate, you can switch the behavior back to how you did in version 11.

```csharp
services
    .AddGraphQLServer()
    .SetPagingOptions(new PagingOptions{ InferConnectionNameFromField = false })
    ...
```

Moreover, you now can explicitly define the connection name per field.

```csharp
public class Person
{
    [UsePaging(ConnectionName = "Persons")]
    public IQueryable<Person> GetFriends() => ...
}
```

## MongoDB Paging

In version 11 we had the `UseMongoDbPagingAttribute` and the `UseMongoDbOffsetPagingAttribute`, which we removed with version 11. In version 12 you now can use the standard attributes `UsePagingAttribute` and `UseOffsetPagingAttribute`.

To use these attributes with mongo, you need to register the mongo paging provider with your GraphQL configuration:

```csharp
services
    .AddGraphQLServer()
    .AddMongoDbPagingProviders()
    ...
```

# Records

With version 11, we added support for records and added the ability to infer attributes from parameters. This, in the end, leads to more errors than benefits. With version 12, we removed this feature. Use the official' property' keyword to write records in C# short-hand syntax when annotating properties.

```csharp
public record Foo([property: ID] string Id);
```

# Instrumentation

We added more instrumentation events and generalized more how one can tap into our internal events. The class `DiagnosticEventListener` is now obsolete and replaced with `ExecutionDiagnosticEventListener`. This is due to new event listener classes like `DataLoaderDiagnosticEventListener`.

# DataLoader

We have consolidated the DataLoader base classes into the GreenDonut package which has no dependency on any HotChocolate packages. This allows for people using DataLoader in their business layer without having to reference GraphQL related packages. In your DataLoader classes the namespace `HotChocolate.Fetching` and `HotChocolate.DataLOader` are no longer needed.

Second, we optimized memory usage of DataLoader and it is now best practice to let the DI inject the DataLoaderOptions into the DataLoader.

**Hot Chocolate 11**

```csharp
public class CustomBatchDataLoader : BatchDataLoader<string, string?>
{
    public CustomBatchDataLoader(IBatchScheduler batchScheduler)
        : base(batchScheduler)
    {

    }

    // code omitted for brevity.
}
```

**Hot Chocolate 12**

```csharp
public class CustomBatchDataLoader : BatchDataLoader<string, string?>
{
    public CustomBatchDataLoader(IBatchScheduler batchScheduler, DataLoaderOptions options)
        : base(batchScheduler, options)
    {

    }

    // code omitted for brevity.
}
```

Allowing the DI to inject the options will allow the DataLoader to use the new shared pooled cache objects.

# Resolvers

We have reworked the resolver compiler and are now demanding that the `ParentAttribute` is used when an argument is referring to the parent object.
This is done since in some cases people want to get the parent object which is the same runtime type as an argument value.

```csharp
public async Task<string> MyResolver([Parent] Person parent, Person input)
{
    // code omitted for brevity.
}
```
