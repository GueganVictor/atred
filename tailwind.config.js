/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato"],
            },
            colors: {
                primary: '#0c413a',
            },
            maxWidth: {
                '8xl': '1400px',
            }
        },
    },
    // plugins: [require("@tailwindcss/forms"), require('@tailwindcss/line-clamp'),],
}
