import {configureStore} from "@reduxjs/toolkit";
import MealSlice from "../Reducer/MealSlice.ts";

export const store = configureStore({
    reducer: {
        meals : MealSlice,
    }
});
export type AppDispatch = typeof store.dispatch;