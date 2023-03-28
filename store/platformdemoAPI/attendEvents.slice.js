import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_attendevent_list = createAsyncThunk(
  "attendEvents/api_v1_attendevent_list",
  async payload => {
    const response = await apiService.api_v1_attendevent_list(payload)
    return response.data
  }
)
export const api_v1_attendevent_create = createAsyncThunk(
  "attendEvents/api_v1_attendevent_create",
  async payload => {
    const response = await apiService.api_v1_attendevent_create(payload)
    return response.data
  }
)
export const api_v1_attendevent_retrieve = createAsyncThunk(
  "attendEvents/api_v1_attendevent_retrieve",
  async payload => {
    const response = await apiService.api_v1_attendevent_retrieve(payload)
    return response.data
  }
)
export const api_v1_attendevent_update = createAsyncThunk(
  "attendEvents/api_v1_attendevent_update",
  async payload => {
    const response = await apiService.api_v1_attendevent_update(payload)
    return response.data
  }
)
export const api_v1_attendevent_partial_update = createAsyncThunk(
  "attendEvents/api_v1_attendevent_partial_update",
  async payload => {
    const response = await apiService.api_v1_attendevent_partial_update(payload)
    return response.data
  }
)
export const api_v1_attendevent_destroy = createAsyncThunk(
  "attendEvents/api_v1_attendevent_destroy",
  async payload => {
    const response = await apiService.api_v1_attendevent_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const attendEventsSlice = createSlice({
  name: "attendEvents",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_attendevent_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_attendevent_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_attendevent_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_attendevent_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_attendevent_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_attendevent_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_attendevent_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_attendevent_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_attendevent_list,
  api_v1_attendevent_create,
  api_v1_attendevent_retrieve,
  api_v1_attendevent_update,
  api_v1_attendevent_partial_update,
  api_v1_attendevent_destroy,
  slice: attendEventsSlice
}
