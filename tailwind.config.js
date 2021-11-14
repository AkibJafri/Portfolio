module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Red Hat Display', 'sans-serif'],
                'pop': ['Rubik', 'Roboto', 'Arial', 'sans-serif'],
                'tech': ['Share Tech Mono', 'cursive'],
            },
            scale: {
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}