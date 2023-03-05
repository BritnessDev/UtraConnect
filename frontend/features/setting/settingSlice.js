import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        utra_lang: 'en'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.utra_lang = action.payload.utra_lang
        },
    },
    extraReducers: {
    }
})

export const { setLanguage } = settingSlice.actions
export default settingSlice.reducer