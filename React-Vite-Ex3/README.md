Code 1 Analysis:
1. Understand and explain the asynchronous nature of setCount.
    -> In React, the setCount function provided by useState is asynchronous. Calling setCount(count + 1), React schedules an update to the state, but it doesn't immediately apply the new state value. Instead, React batches state updates and applies them in a subsequent render.

    So, when logging the count immediately after calling setCount, you are logging the current state value, not the updated value. This is why the older value of count in the console.

2. Suggest a solution to log the updated count value.
    -> To log the updated count value, we can leverage the fact that setCount also accepts a function as an argument. This function receives the previous state as an argument and returns the new state. By using this approach, we ensure that you're working with the latest state.

Code 2 Anlaysis:
1. Explain why multiple setCount calls do not result in the count being 3.
    -> As we know in React, state updates are asynchronous. When calling the setCount(count + 1) multiple times consecutively, React doesn't immediately apply each state update. Instead, it batches these updates and applies them in a subsequent render.

    All three setCount calls are based on the initial state value, which is 0. As these calls are executed in quick succession, they use the same initial state value for calculation. Therefore, each call increments the count by 1 based on the initial state, resulting in a final count of 1 instead of 3.

2. Propose an approach to achieve the expected behavior.
    -> In order to achieve the expected behavior of updating the count to 3, we need to use the functional form of setCount, which takes the previous state as an argument and ensures that you are working with the latest state value.