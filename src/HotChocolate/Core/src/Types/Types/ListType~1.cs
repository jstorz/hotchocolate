﻿namespace HotChocolate.Types
{
    // this is just a marker type for the fluent code-first api.
    public sealed class ListType<T> : FluentWrapperType where T : IType
    {
        private ListType() { }
    }
}
