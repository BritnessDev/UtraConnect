import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/auth/loginSlice"
import signUpreducer from "../features/auth/signupSlice"
import settingReducer from "../features/setting/settingSlice"

export default configureStore({
    reducer: {
        login: loginReducer,
        signUp: signUpreducer,
        setting: settingReducer
    }
})