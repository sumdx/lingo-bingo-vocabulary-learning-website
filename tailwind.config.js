/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : [
          "Poppins", "sans-serif"
        ]
      },
      colors: {
        // Primary Colors
        primaryBg: '#F7F9FC', // Light grayish blue
        primaryAccent: '#5865F2', // Bright blue
        cardBg: '#FFFFFF', // Pure white
        highlightText: '#30C39E', // Soft teal
        buttonBgClr: 'rgba(88, 101, 242, 0.05)',

        // Typography Colors
        heading: '#1E293B', // Dark slate gray
        subheading: '#475569', // Muted blue-gray
        bodyText: '#6B7280', // Neutral gray
        link: '#2563EB', // Bright blue

        // Supporting Colors
        toggleActive: '#4CAF50', // Vibrant green
        buttonHover: '#4756F2', // Slightly darker blue
        borderLine: '#D1D5DB', // Light gray

        // Gradient (Optional)
        gradientStart: '#5865F2', // Starting color for gradients
        gradientEnd: '#819CFF', // Ending color for gradients
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(190deg, rgb(129, 156, 255) 15%, rgb(88, 101, 242) 72.498%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

