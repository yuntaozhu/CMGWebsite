// store.js
import { writable } from 'svelte/store';

// Initial value of the global boolean variable
export const acssWeekStatus = writable(false); // You can set it to true or false based on your initial requirement

export const setAcssWeekStatusTrue = () => {
    acssWeekStatus.set(true);
};

export const setAcssWeekStatusFalse = () => {
    acssWeekStatus.set(false);
};