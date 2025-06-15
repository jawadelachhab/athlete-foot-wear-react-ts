import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@types";
import  axiosErrorHandler  from '@utils/axiosErrorHandler'


type TResponse = TProduct[];

const actGetProductsByCatSlug = createAsyncThunk(
    "products/actGetProductsByCatSlug",
    async (prefix: string, thunkAPI) => {
        const { rejectWithValue , signal } = thunkAPI;
        try {
            const response = await axios.get<TResponse>(
                `/products?cat_slug=${prefix}`,{
                    signal
                }
            );
            return response.data;
        } catch (error) {
          return  axiosErrorHandler(rejectWithValue(error))
        }
    }
);

export default actGetProductsByCatSlug;