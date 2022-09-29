import { createSlice } from '@reduxjs/toolkit'
import auth from "@react-native-firebase/auth"
import Json from '../../ventureMockData.json'

const initialState = {
  currentUser: auth().currentUser?.toJSON()
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInUser: (state, actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.currentUser = actions.payload
    },
    signOutUser: state => {
      state.currentUser = null
    },
    changeUser: (state, actions) => {
      state.currentUser = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { signInUser, signOutUser, changeUser } = authSlice.actions

export default authSlice.reducer