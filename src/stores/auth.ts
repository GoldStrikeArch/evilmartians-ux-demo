import { writable } from "svelte/store";

export const showLoginForm = writable(true);
export const isAuth = writable(false);
