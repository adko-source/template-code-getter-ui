/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'spin-flash': 'spin 1s linear infinite, flash-blue 2s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'flash-blue': {
          '0%, 100%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: '#f2e51b' }, // blue-500 color
        },
      },
      colors: {
        'custom-cyan': '#15d4d4',
        'cream': '#faf3e0',
      },
      boxShadow: {
        'right-only': '4px 0 8px rgba(0, 0, 0, 0.15)', 
      },
      screens: {
        'sm': '735px',
        // tablet => @media (min-width: 735px) { ... }
  
        'md': '1024px',
        // laptop => @media (min-width: 1024px) { ... }
  
        'lg': '1620px',
        // desktop => @media (min-width: 1920px) { ... }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'dashboard-bg': "url('$lib/images/wallhaven-4xm13n.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
    
  },
  plugins: []
};