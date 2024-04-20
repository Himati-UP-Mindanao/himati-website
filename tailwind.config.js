/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      screens: {
        desktop: '1080px',
        tablet: '744px',
        mobile: '414px'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        neutral: {
          50: 'hsl(var(--neutral-50))',
          100: 'hsl(var(--neutral-100))',
          200: 'hsl(var(--neutral-200))',
          300: 'hsl(var(--neutral-300))',
          400: 'hsl(var(--neutral-400))',
          500: 'hsl(var(--neutral-500))',
          600: 'hsl(var(--neutral-600))',
          700: 'hsl(var(--neutral-700))',
          800: 'hsl(var(--neutral-800))',
          900: 'hsl(var(--neutral-900))',
          950: 'hsl(var(--neutral-950))'
        },
        warming: {
          50: 'hsl(var(--warming-50))',
          100: 'hsl(var(--warming-100))',
          200: 'hsl(var(--warming-200))',
          300: 'hsl(var(--warming-300))',
          400: 'hsl(var(--warming-400))',
          500: 'hsl(var(--warming-500))',
          600: 'hsl(var(--warming-600))',
          700: 'hsl(var(--warming-700))',
          800: 'hsl(var(--warming-800))',
          900: 'hsl(var(--warming-900))',
          950: 'hsl(var(--warming-950))'
        },
        negative: {
          50: 'hsl(var(--negative-50))',
          100: 'hsl(var(--negative-100))',
          200: 'hsl(var(--negative-200))',
          300: 'hsl(var(--negative-300))',
          400: 'hsl(var(--negative-400))',
          500: 'hsl(var(--negative-500))',
          600: 'hsl(var(--negative-600))',
          700: 'hsl(var(--negative-700))',
          800: 'hsl(var(--negative-800))',
          900: 'hsl(var(--negative-900))',
          950: 'hsl(var(--negative-950))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      fontFamily: {
        'acronym': ['Acronym', 'sans-serif'],
        'guardian': ['Guardian Egyptian', 'slab-serif']
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], 
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], 
        '2xl': ['1.5rem', { lineHeight: '2rem' }], 
        'xl': ['1.25rem', { lineHeight: '1.75rem' }], 
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], 
        'md': ['1rem', { lineHeight: '1.5rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], 
        'xs': ['0.75rem', { lineHeight: '1rem' }],
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
