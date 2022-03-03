import axios from "axios"

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: { 'Content-Type': 'application/json' },
})

export const getAllProducts = async (limit?: number, sort?: string) => {
    const limitParam = limit ? `&limit=${limit}` : ''
    const queryParams = `?sort=${sort ?? 'desc'}${limitParam}`
    return new Promise((resolve, reject) => {
        api.get(`/products${queryParams}`)
        .then(response => response.data)
        .then(resolve)
        .catch(reject)
    })
}


export const getProduct = async (id: number) => {
    return new Promise((resolve, reject) => {
        api.get(`/products/${id}`)
        .then(response => response.data)
        .then(resolve)
        .catch(reject)
    })
}


export const getAllCategories = async () => {
    return new Promise((resolve, reject) => {
        api.get(`/categories`)
        .then(response => response.data)
        .then(resolve)
        .catch(reject)
    })
}


export const getProductsFromCategory = async (category: string) => {
    return new Promise((resolve, reject) => {
        api.get(`/products/category/${category}`)
        .then(response => response.data)
        .then(resolve)
        .catch(reject)
    })
}