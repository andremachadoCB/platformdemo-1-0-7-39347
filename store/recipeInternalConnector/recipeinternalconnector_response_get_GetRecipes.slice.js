import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const recipeinternalconnector_get_api_v1_recipe_list = createAsyncThunk(
  "recipeinternalconnector_response_get_GetRecipes/recipeinternalconnector_get_api_v1_recipe_list",
  async payload => {
    const response = await apiService.recipeinternalconnector_get_api_v1_recipe_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const recipeinternalconnector_response_get_GetRecipesSlice = createSlice({
  name: "recipeinternalconnector_response_get_GetRecipes",
  initialState,
  reducers: {},
  extraReducers: {
    [recipeinternalconnector_get_api_v1_recipe_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [recipeinternalconnector_get_api_v1_recipe_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [recipeinternalconnector_get_api_v1_recipe_list.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  recipeinternalconnector_get_api_v1_recipe_list,
  slice: recipeinternalconnector_response_get_GetRecipesSlice
}
