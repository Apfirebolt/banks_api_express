import { writable } from "svelte/store";
import httpClient from "../plugins/interceptor";

export const user = writable(null);
export const loader = writable(false);

// load user from local storage
const storedUser = localStorage.getItem("user");
if (storedUser) {
    user.set(JSON.parse(storedUser));
}

export function setUser(data) {
    user.set(data);
    localStorage.setItem("user", JSON.stringify(data));
}

export function setLoading(data) {
    loader.set(data);
}

export async function login(data) {
    try {
        const response = await httpClient.post("users/login", data);
        if (response.status === 200) {
            setUser(response.data);
        }
    } catch (error) {
        console.error(error);
    }
}

export async function register(data) {
    try {
        const response = await httpClient.post("users", data);
        if (response.status === 200) {
            setUser(response.data);
        }
    } catch (error) {
        console.error(error);
    }
}

export function reset() {
    user.set(null);
    loader.set(false);
}

