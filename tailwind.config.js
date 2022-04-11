module.exports = {
    content: ["./src/**/*.{js,jsx,tx,tsx}"],
    theme: {
        extend: {
            transitionProperty: {
                'width': 'width'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}
