import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/index'
import { cursorState } from '@/components/types'

// Define a type for the slice state
interface CounterState {
    cursorState: cursorState
}

// Define the initial state using that type
const initialState: CounterState = {
    cursorState: 'default'
}

export const counterSlice = createSlice({
    name: 'default',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },




        cursor: (state, action: PayloadAction<cursorState>) => {
            state.cursorState = action.payload
        }


    },
})

export const { cursor } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default counterSlice.reducer