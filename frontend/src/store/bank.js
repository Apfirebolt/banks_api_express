import { writable } from 'svelte/store';

const initialValue = { count: 0 }; // Set an initial value for your state

export const countStore = writable(initialValue);
