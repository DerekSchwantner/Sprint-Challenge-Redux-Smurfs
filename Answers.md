1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

ANSWER:
-map
-filter
-reduce

-these are pure functions that take in an array and copy it and work with the copy instead of the original. The original is untouched and we get a reference to an entirely new array.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

ANSWER:
-actions are plain JS objects and payloads of info that send data from your app to your store. they are made from action creators.

-reducers are responsible for updating the state. They take in an initial state and return a new state. Only they, not actions are responsible for changing the state

-The store is reffered to as the single source of truth and its responsibility is to hold the applications state. We only need one store to handle all the state, and can use multiple reducers to handle more granular changes which then are combined and given to the store to change the state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

ANSWER: Component state is state that is local to the components. Before redux we had state in many different places which could be passed down through props. App state is global state for the entire app. It is in a single place and can be updated through reducers.

4.  What is middleware?

ANSWER: middleware intercepts actions that are dispatched before they reach the reducer and runs a function on them. Middleware can stop the action, forward it untouched, dispatch an entirely different action etc.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

ANSWER: thunk allows us to perform async operations like API calls from our action creators. Thunks are functions and dispactches are passed as the arguments. They can dispatch actions as a result of the API calls.

6.  Which `react-redux` method links up our `components` with our `redux store`?

ANSWER: that would be { connect }. It provides its connected component along with the data it needs from the store, as well as the methods that dispatch actions to the store.
