import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Json from '../../ventureMockData.json'

export interface EventPoolState {
  events: [],
  value: number
}

const initialState : EventPoolState = {
  events: [],
  value: 0
}

export const fetchEvents = (getCurrentState : Function) => {
  console.log("Running the Fetch!")
  return fetch("http://localhost:5000/events")
  .then(res => res.json())
  .then(eventData => ({ ...getCurrentState, events: eventData }))
}

export const counterSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer