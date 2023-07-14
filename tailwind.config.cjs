/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{svelte,js,ts}"],
    theme: {
        extend: {
            colors: {
                base: {
                    purple: "#5E35DA",
                    blue: "#3B7FEF",
                    "sky-blue": "#00F5F1",
                    white: "#F4F1FF",
                    dark: {
                      purple: "#3D338D",
                      blue: "#3B7FEF",
                      "sky-blue": "#30CAF2",
                      1: '#1E0E37',
                      2: '#0A041F',
                      3: '#060217'
                    },
                    gray: {
                      1: "#9593A4",
                      2: '#83828C',
                      3: '#3E3B4C'
                    }
                },
            },
        },
    },
    plugins: [],
};
