/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#6200EE', // Buttons, active links, headers.
        primaryVariant: '#3700B3', // Hover states, emphasis on primary elements.
        secondary: '#03DAC6', // Accent buttons, floating action buttons (FAB).
        background: '#FFFFFF', // Main app background.
        surface: '#F5F5F5', // Cards, modals, dialogs.
        error: '#B00020', // Error messages, validation highlights.
        textPrimary: '#000000', // Main text, headers, paragraphs.
        textSecondary: '#616161', // Subtext, muted information.
        border: '#E0E0E0', // Borders for components, dividers.
        navigationBar: '#F5F5F5', // Android navigation bar background.
      },
    },
  },
  plugins: [],
}

