module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'instagram-from': '#4D37BC',
        'instagram-via': '#C9237C',
        'instagram-to': '#FA3C30',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
