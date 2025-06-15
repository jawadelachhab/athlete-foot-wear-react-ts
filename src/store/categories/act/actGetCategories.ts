import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "@types";
import  axiosErrorHandler  from '@utils/axiosErrorHandler'


type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
    "categories/actGetCategories",
    async (_, thunkAPI) => {
        const { rejectWithValue,signal  } = thunkAPI;
        try {
            const response = await axios.get<TResponse>("/categories", { signal });
            return response.data;
        } catch (error) {
          return  axiosErrorHandler(rejectWithValue(error))
        }
    }
);

export default actGetCategories;