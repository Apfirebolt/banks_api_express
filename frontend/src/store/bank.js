import { writable } from "svelte/store";

export const count = writable(0);
export const banks = writable([
    'ABC', 'XYZ', 'HDFC'
]);
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

export function getBanks() { 
  return banks;
}

export function reset() {
  count.set(0);
  banks.set([]);
  loader.set(false);
}
