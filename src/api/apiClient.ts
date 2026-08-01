import { create } from "axios"

const apiClient = create({
  baseURL: "http://192.168.1.13:8085",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient
