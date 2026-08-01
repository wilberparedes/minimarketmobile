import { create } from "axios"

import { ENV } from "@/src/config/env"

const apiClient = create({
  baseURL: ENV.API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient
