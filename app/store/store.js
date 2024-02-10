'use client';

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './feature/counter/counter';
import ctrReducer from './feature/ctr/ctr'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        ctr: ctrReducer
    }
})