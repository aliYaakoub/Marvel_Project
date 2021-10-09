const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        // tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
    ]
}