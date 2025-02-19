using System;
using System.Threading;
using System.Threading.Tasks;

namespace HotChocolate.Fetching
{
    /// <summary>
    /// The execution engine batch dispatcher.
    /// </summary>
    public interface IBatchDispatcher
    {
        /// <summary>
        /// Signals that a batch task was enqueued.
        /// </summary>
        event EventHandler? TaskEnqueued;

        /// <summary>
        /// Defines that this instance has batch tasks that can be dispatched.
        /// </summary>
        bool HasTasks { get; }

        /// <summary>
        /// Defines if the batch dispatcher shall dispatch tasks directly when they are enqueued.
        /// </summary>
        bool DispatchOnSchedule { get; set; }

        /// <summary>
        /// Dispatches execution tasks to the execution engine work backlog.
        /// </summary>
        Task<BatchDispatcherResult> DispatchAsync(CancellationToken cancellationToken = default);
    }
}
