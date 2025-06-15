import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TPost } from "@types";
import  axiosErrorHandler  from '@utils/axiosErrorHandler'

type TResponse = TPost[];

const actGetPosts = createAsyncThunk(
    "posts/actGetPosts",
    async (count: number = 3, thunkAPI) => {
        const { rejectWithValue, signal } = thunkAPI;
        try {
            const response = await axios.get<TResponse>(`/posts?_limit=${count}`, { signal });
            return response.data;
        } catch (error) {
            return axiosErrorHandler(rejectWithValue(error))
        }
    }
);

export default actGetPosts;