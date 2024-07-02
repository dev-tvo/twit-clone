/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    darkMode: 'class',
    theme: {
        screens: {
            xs: "768px",
            sm: "992px",
            md: "1024px",
            lg: "1200px",
            xl: "1480px",
        },
        extend: {
            colors: {
                dim: {
                    50: "#5F99F7",
                    100: "#5F99F7",
                    200: "#38444d",
                    300: "#202e3a",
                    400: "#253341",
                    500: "#5F99F7",
                    600: "#5F99F7",
                    700: "#192734",
                    800: "#162d40",
                    900: "#15202b",
                },
                lightMode: {
                    200: "#d7dbdc",
                    600: "#f7f9f9",
                    700: "#00000008",
                },
                darkMode: {
                    600: "#ffffff08",
                    700: "#1e2732",
                    900: "#15202b",
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

