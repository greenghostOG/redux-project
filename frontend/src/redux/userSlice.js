import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersApi, addUserApi, deleteUserApi } from "../services/userApi";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
  try {
    const users = await fetchUsersApi();
    return users;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});


export const addUser = createAsyncThunk("users/addUser", async (userData, thunkAPI) => {
  try {
    const response = await addUserApi(userData);
   
    return response.data || userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});


export const deleteUser = createAsyncThunk("users/deleteUser", async (userId, thunkAPI) => {
  try {
    await deleteUserApi(userId);
    return userId; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addUser.fulfilled, (state, action) => {
    
        if (action.payload) {
          state.users.push(action.payload);
        }
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload && user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;