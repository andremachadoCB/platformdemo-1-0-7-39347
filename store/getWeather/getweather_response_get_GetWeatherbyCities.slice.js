import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const getweather_get_data_25_weather_read = createAsyncThunk(
  "getweather_response_get_GetWeatherbyCities/getweather_get_data_25_weather_read",
  async payload => {
    const response = await apiService.getweather_get_data_25_weather_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const getweather_response_get_GetWeatherbyCitiesSlice = createSlice({
  name: "getweather_response_get_GetWeatherbyCities",
  initialState,
  reducers: {},
  extraReducers: {
    [getweather_get_data_25_weather_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [getweather_get_data_25_weather_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [getweather_get_data_25_weather_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  getweather_get_data_25_weather_read,
  slice: getweather_response_get_GetWeatherbyCitiesSlice
}
