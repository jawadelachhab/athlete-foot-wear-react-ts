import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@types";
import axiosErrorHandler from '@utils/axiosErrorHandler'

type TResponse = TProduct[];

const actGetProducts = createAsyncThunk(
    "products/actGetProducts",
    async (limit: number, thunkAPI) => {
        const { rejectWithValue, signal } = thunkAPI;
        try {
            const response = await axios.get<TResponse>(
                `/products?_limit=${limit}`, {
                signal
            }
            );
            return response.data;
        } catch (error) {
            return axiosErrorHandler(rejectWithValue(error))
        }
    }
);

export default actGetProducts;