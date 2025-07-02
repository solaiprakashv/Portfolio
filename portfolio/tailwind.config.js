module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Segoe UI',
          'Arial',
          'sans-serif',
        ],
        heading: [
          'Poppins',
          'Inter',
          'Segoe UI',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        blueberry: {
          DEFAULT: '#4F6DFF', // Blueberry blue
          dark: '#3A4DB7',   // Darker blueberry
        },
        grape: {
          DEFAULT: '#7F53AC',
          dark: '#5F357F',
        },
        cyan: {
          DEFAULT: '#43E7FE',
          dark: '#1CA7EC',
        },
        pink: {
          DEFAULT: '#FF6FD8',
          dark: '#FF3CAC',
        },
        purple: {
          DEFAULT: '#A259FF',
          dark: '#6D28D9',
        },
        sky: {
          DEFAULT: '#38BDF8',
          dark: '#0EA5E9',
        },
        darkglass: {
          DEFAULT: 'rgba(20,24,36,0.85)',
        },
        professional: {
          DEFAULT: '#181C2A', // deep navy
        },
        protext: {
          DEFAULT: '#F3F6FA', // off-white
        },
      },
      backgroundImage: {
        'blueberry-gradient': 'linear-gradient(135deg, #4F6DFF 0%, #7F53AC 40%, #43E7FE 80%, #FF6FD8 100%)',
        'grape-gradient': 'linear-gradient(135deg, #7F53AC 0%, #43E7FE 100%)',
        'purple-sky-gradient': 'linear-gradient(135deg, #A259FF 0%, #38BDF8 100%)',
        'berry-pink-gradient': 'linear-gradient(135deg, #4F6DFF 0%, #FF6FD8 100%)',
        'black-blue-gradient': 'linear-gradient(120deg, #10131a 0%, #4F6DFF 100%)',
        'professional-gradient': 'linear-gradient(120deg, #181C2A 0%, #232946 100%)',
        'pro-gradient': 'linear-gradient(120deg, #232526 0%, #434343 100%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
