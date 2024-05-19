import { writable } from "svelte/store";
import httpClient from "../plugins/interceptor";

export const count = writable(0);
export const banks = writable([]);
export const loader = writable(false);

export function increment() {
  count.update((n) => n + 1);
}

export function decrement() {
  count.update((n) => n - 1);
}

export function setBank(data) {
  banks.set(data);
}

export function setLoading(data) {
  loader.set(data);
}

export async function getBankData(page = 1, search = '') {
  const response = await httpClient.get(`banks?page=${page}&search=${search}`);
  if (response.status === 200) {
    setBank(response.data.banks);
  }
}

export function reset() {
  count.set(0);
  banks.set([]);
  loader.set(false);
}

