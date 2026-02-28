/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dynared: {
          DEFAULT: '#C41E3A',
          light: '#E8304F',
          dark: '#9A1630',
          50: '#FEF2F4',
          100: '#FDE6EA',
          200: '#F9BCC5',
          300: '#F592A0',
          400: '#DE3957',
          500: '#C41E3A',
          600: '#B01B34',
          700: '#8A152A',
          800: '#6E1121',
          900: '#5A0D1B',
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A017',
          dark: '#8B6914',
          50: '#FDF8E8',
          100: '#FAF0C8',
          200: '#F2DA7E',
          300: '#E8C234',
          400: '#D4A017',
          500: '#B8860B',
          600: '#966D09',
          700: '#745407',
          800: '#523B05',
          900: '#3A2A04',
        },
        green: {
          DEFAULT: '#1B5E20',
          light: '#2E7D32',
          dark: '#124116',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#4CAF50',
          500: '#2E7D32',
          600: '#1B5E20',
          700: '#155A1D',
          800: '#104517',
          900: '#0B3012',
        },
        brown: {
          DEFAULT: '#6D4C2E',
          light: '#8B6347',
          dark: '#4F3620',
        },
        cream: {
          DEFAULT: '#FFF8F0',
          dark: '#F5EDE0',
        },
        charcoal: {
          DEFAULT: '#2D2926',
          light: '#4A4543',
        },
        grey: {
          DEFAULT: '#9E9792',
          light: '#D4CFC9',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Lora', 'Georgia', 'serif'],
        accent: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(45, 41, 38, 0.08)',
        'card-hover': '0 12px 40px rgba(45, 41, 38, 0.15)',
        'glow-red': '0 0 30px rgba(196, 30, 58, 0.2)',
        'glow-gold': '0 0 30px rgba(184, 134, 11, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
