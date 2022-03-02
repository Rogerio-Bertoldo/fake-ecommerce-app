const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = async (limit?: number, sort?: string) => {
    const limitParam = limit ? `&limit=${limit}` : ''
    const queryParams = `?sort=${sort ?? 'desc'}${limitParam}`
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/products${queryParams}`)
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    })
}


export const getProduct = async (id: number) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/products/${id}`)
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    })
}


export const getAllCategories = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/categories`)
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    })
}


export const getProductsFromCategory = async (name: string) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/products/category/${name}`)
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    })
}