import { writable } from "svelte/store";

export const submissionSuccess = writable(false);
export const showNotification = writable(false);
export const notificationMessage = writable("");
export const usePresetMessages = writable(true);
export const acssWeekStatus = writable(false);
export const qaPairs = writable({});

export const setAcssWeekStatusTrue = () => {
    acssWeekStatus.set(true);
};

export const setAcssWeekStatusFalse = () => {
    acssWeekStatus.set(false);
};