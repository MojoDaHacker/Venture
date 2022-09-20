import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Json from '../../ventureMockData.json'

export interface EventPoolState {
  events: [],
  value: number
}

const initialState = {
  currentUser: null
}

export const authenticateUser = async (getCurrentState : Function) => {
  console.log("Running the Fetch!")
  const res = await fetch("http://localhost:5000/events")
  const eventData = await res.json()
  return ({ ...getCurrentState, events: eventData })
}

export const registerUser = async (getCurrentState : Function) => {
  console.log("Running the Fetch!")
  const res = await fetch("http://localhost:5000/events")
  const eventData = await res.json()
  return ({ ...getCurrentState, events: eventData })
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.currentUser = null
    },
    signOut: state => {
      state.currentUser = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = authSlice.actions

export default authSlice.reducer