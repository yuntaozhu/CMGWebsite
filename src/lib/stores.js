import { writable } from "svelte/store";

export const submissionSuccess = writable(false);
export const showNotification = writable(false);
export const notificationMessage = writable("");