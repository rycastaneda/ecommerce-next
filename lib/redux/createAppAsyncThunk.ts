/* Core */
import { createAsyncThunk } from '@reduxjs/toolkit'

/* Instruments */
import type { ReduxState, ReduxDispatch } from './store'
import { useDispatch } from 'react-redux'

/**
 * ? A utility function to create a typed Async Thunk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState
  dispatch: ReduxDispatch
  rejectValue: string
}>()

export const useAppDispatch: () => ReduxDispatch = useDispatch
