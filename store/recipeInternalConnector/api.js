import axios from "axios"
const recipeInternalConnector = axios.create({
  baseURL: "https://platform-demo-012-39411.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function recipeinternalconnector_get_api_v1_recipe_list(payload) {
  return recipeInternalConnector.get(`/api/v1/recipe/`)
}
export const apiService = { recipeinternalconnector_get_api_v1_recipe_list }
