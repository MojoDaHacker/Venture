import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state'
import { configureStore } from '@reduxjs/toolkit';

const asyncInitialStateMiddleware = asyncInitialState.middleware

import eventsReducer, { fetchEvents } from './slices/eventPoolSlice'
import authReducer from './slices/authSlice'

const currentUserReducer = (state = { isSignedIn : false }, actions) => {
  switch (actions.type) {
    case "user/authenticationStateChanged":
      return {...state, isSignedIn: true};
    default:
      return state
  }
}

const store = configureStore({
  reducer: asyncInitialState.outerReducer(combineReducers({
    currentUser : authReducer,
    events: eventsReducer,
    asyncInitialState: asyncInitialState.innerReducer
  })),
  middleware: getDefaultMiddleware => {
    var arr = getDefaultMiddleware({
      serializableCheck: false
    })
    arr.unshift(
      asyncInitialStateMiddleware(fetchEvents)
    )
    return arr
  },
})

store.dispatch({ type: '' });

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
