/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0B1120',
          accent: '#5E5CE6',
          highlight: '#7F5AF0',
        },
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 20% 20%, rgba(127,90,240,0.35), transparent 50%), radial-gradient(circle at 80% 0%, rgba(94,92,230,0.3), transparent 45%)',
        'card-glass':
          'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      },
      boxShadow: {
        glow: '0 20px 45px rgba(15,23,42,0.45)',
        card: '0 20px 40px rgba(15, 23, 42, 0.15)',
      },
    },
  },
  plugins: [],
};

