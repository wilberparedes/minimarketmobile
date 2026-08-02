import apiClient from "@/src/api/apiClient"
import ProductService from "@/src/services/ProductService"

jest.mock("@/src/api/apiClient", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}))

const mockedApiClient = apiClient as jest.Mocked<typeof apiClient>

describe("ProductService", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should return products", async () => {
    mockedApiClient.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "iPhone",
          description: "Apple smartphone",
          price: 999,
          rating: 4.8,
          thumbnail: "image.jpg",
        },
      ],
    })

    const products = await ProductService.getProducts()

    expect(products).toHaveLength(1)
    expect(products[0].title).toBe("iPhone")

    expect(mockedApiClient.get).toHaveBeenCalledWith("/products")
  })

  it("should return product detail", async () => {
    mockedApiClient.get.mockResolvedValue({
      data: {
        id: 1,
        title: "iPhone",
        description: "Apple smartphone",
        price: 999,
        rating: 4.8,
        thumbnail: "image.jpg",
        images: ["1.jpg", "2.jpg"],
      },
    })

    const product = await ProductService.getProductById(1)

    expect(product.id).toBe(1)
    expect(product.title).toBe("iPhone")

    expect(mockedApiClient.get).toHaveBeenCalledWith("/products/1")
  })

  it("should throw when api fails", async () => {
    mockedApiClient.get.mockRejectedValue(new Error("Network Error"))

    await expect(ProductService.getProducts()).rejects.toThrow("Network Error")
  })
})
