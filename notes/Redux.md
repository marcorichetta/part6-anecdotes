# Redux

## Architecture

![Flux architecture](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-explained-1300w.png)

## Store

The whole state of the application is stored into one JavaScript-object in the store.

**Store functions:**
- Holds application state
- Allows access to state via `getState()`
- Allows state to be updated via `dispatch(action)`
- Registers listeners via `subscribe(listener)`
- Handles unregistering of listeners via the function returned by `subscribe(listener)`

## Actions
The state of the *store* is changed with **actions**. Actions are objects, which have at least a field determining the type of the action.
```js
{
    type: 'INCREMENT'
}
```

### Action Creators

Action creators are functions that create actions.

In Redux, action creators simply return an action:
```js
const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}
```

## Reducers
*Actions* are used in reducers.
A reducer is a function which is given the current **state** and an **action** as parameters. It returns a new state.

```js
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default: // if none of the above matches, code comes here
      return state
  }
}
```
## [Combined Reducers](https://redux.js.org/api/combinereducers#combinereducersreducers)
- As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.
```js
rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// This would produce the following state object
{
  potato: {
    // ... potatoes, and other state managed by the potatoReducer ...
  },
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  }
}
```

**Pure Functions and immutability**
---
- Reducers must be **pure functions**
- Pure functions do not cause any side effects and must always return the same response when called with the same parameters. Ex: `max()`
- `Array.push()` changes the state of the array
- `Array.concat()` creates a new array with the old elements and the new one

## Dispatch and getState
Reducer isn't used directly, is given as a parameter to create the store
```js
const store = createStore(counterReducer)

// Dispatch the action provided by the reducer
store.dispatch({type: 'INCREMENT'})

// getState() returns the current state of the store
console.log('Store state', store.getState()) // 1
```

## Subscribe
Adds a change listener which will be called any time an action is dispatched.

In this example, **every change in the store** will be printed to the console
```javascript
store.subscribe(() => {    
    const storeNow = store.getState()
    console.log(storeNow)
})

store.dispatch({ type: 'INCREMENT' }) // 1
store.dispatch({ type: 'INCREMENT' }) // 2
store.dispatch({ type: 'INCREMENT' }) // 3
store.dispatch({ type: 'ZERO' }) // 0
store.dispatch({ type: 'DECREMENT' }) // -1
```

## React-Redux
See images https://fullstackopen.com/en/part6/many_reducers_connect#connect


## Redux-Thunk

Thanks to redux-thunk, it's possible to define *action creators* so that they return a function having the dispatch-method of redux-store as its parameter.

As a result of this, one can make **asynchronous action creators**, which first wait for some operation to finish, after which they then dispatch the real action.

```js
export const initializeNotes = () => {
  return async dispatch => {
    // The operation first fetches all the notes from the server
    const notes = await noteService.getAll()
    
    // Then dispatches the notes to the action, which adds them to the store.
    dispatch({
      type: 'INIT_NOTES',
      data: notes,
    })
  }
}
```