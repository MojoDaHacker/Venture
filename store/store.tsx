import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import eventsReducer, { fetchEvents } from './slices/eventPoolSlice'
import authReducer from './slices/authSlice'
import { apiSlice } from './slices/apiSlice';

console.log(apiSlice.reducerPath)

const store = configureStore({
  reducer: combineReducers({
    auth : authReducer,
    // events: eventsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  }),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

store.dispatch({ type: '' });

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
