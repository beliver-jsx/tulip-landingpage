/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1629px',
      '4xl': '1920px',

      // custom breakpoints;







    },
    extend: {

      colors: {
        blue: '#4b6cc1',
        gray: 'gray'
      },

      fontSize: {



        // h1

        'h1-4xl': ['13rem', {
          lineHeight: '15rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h1-3xl': ['10rem', {
          lineHeight: '12rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h1-2xl': ['10rem', {
          lineHeight: '12rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h1-xl': ['6rem', {
          lineHeight: '8rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h1-lg': ['6rem', {
          lineHeight: '8rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h1-md': ['3rem', {
          lineHeight: '5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h1-sm': ['3rem', {
          lineHeight: '5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        // h2
        'h2-4xl': ['9rem', {
          lineHeight: '11rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h2-3xl': ['7rem', {
          lineHeight: '9rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h2-2xl': ['7rem', {
          lineHeight: '9rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h2-xl': ['6rem', {
          lineHeight: '8rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h2-lg': ['6rem', {
          lineHeight: '8rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h2-md': ['5rem', {
          lineHeight: '7rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h2-sm': ['3rem', {
          lineHeight: '5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        // h3
        'h3-4xl': ['5rem', {
          lineHeight: '7rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h3-3xl': ['5rem', {
          lineHeight: '7rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h3-2xl': ['5rem', {
          lineHeight: '7rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h3-xl': ['5rem', {
          lineHeight: '7rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h3-lg': ['3rem', {
          lineHeight: '5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h3-md': ['2.5rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h3-sm': ['2.5rem', {
          lineHeight: '4.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h3-xs': ['2rem', {
          lineHeight: '4.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],


        // h4 
        'h4-4xl': ['4.125rem', {
          lineHeight: '6.125rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h4-3xl': ['4.125rem', {
          lineHeight: '6.125rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h4-2xl': ['4.125rem', {
          lineHeight: '6.125rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h4-xl': ['3rem', {
          lineHeight: '5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h4-lg': ['3rem', {
          lineHeight: '5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h4-md': ['3rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],

        'h4-sm': ['2.625rem', {
          lineHeight: '4.625rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        }],




        'sm': ['14px', {
          lineHeight: '20px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],



        'md': ['16px', {
          lineHeight: '1.4rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],

        'lg': ['20px', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],


        'elg': ['80px', {
          lineHeight: '6rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],

        'xl': ['8.5rem', {
          lineHeight: '180px',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        }]
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
