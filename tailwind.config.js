/** Theme: deep teal (brand) + coral (accent) on a soft mist background */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { 50: '#ecfaf7', 100: '#d0f2ea', 200: '#a3e4d6', 300: '#6bcfbd', 400: '#34b3a0', 500: '#1a9483', 600: '#0f7a6c', 700: '#0d6157', 800: '#0c4d46', 900: '#0a3d38' },
        coral: { 50: '#fff1ee', 100: '#ffe0d9', 400: '#ff8a70', 500: '#f86a4b', 600: '#e5502f' },
        gold: { 50: '#fff8e6', 100: '#ffefc2', 500: '#f5b400', 600: '#d99a00' },
        sky: { 50: '#eef4ff', 100: '#dce8ff', 500: '#4c7dff', 600: '#3563e6' },
        ink: { 900: '#10231f', 700: '#33504a', 500: '#6b8a83', 400: '#8fa8a2', 300: '#b6c8c3', 100: '#e4ecea', 50: '#f3f7f6' },
      },
      boxShadow: { soft: '0 1px 2px rgba(16,35,31,.04), 0 8px 24px -12px rgba(16,35,31,.12)' },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(14px) scale(.985)' }, '100%': { opacity: 1, transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        shine: { '0%': { transform: 'translateX(0) skewX(-20deg)', opacity: 0 }, '20%': { opacity: 1 }, '100%': { transform: 'translateX(450%) skewX(-20deg)', opacity: 0 } },
      },
      animation: { rise: 'rise .5s cubic-bezier(.2,.7,.2,1) both', float: 'float 7s ease-in-out infinite', shine: 'shine 1.1s ease-out' },
    },
  },
  plugins: [],
}
