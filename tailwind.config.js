module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                'sm': { 'min': '0px', 'max': '547px' },
                'md': { 'min': '548px', 'max': '767px' },
                'lg': { 'min': '768px', 'max': '1023px' },
                'xl': { 'min': '1024px', 'max': '1679px' },
                '2xl': { 'min': '1680px' },
            },
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