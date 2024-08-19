/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#2695ce",
        "primary-light": "#3fa9e2",
        "primary-lighter": "#3fc3ee",
        "primary-border": "#3599cd",
        "green-button": "#32945424",
        "green-text": "#329454",
        "green-tag": "#cef9de",
        "green-tag-text": "#006927",
        "green-yes": "#3ec18d",
        "green-check-bg": "#D8F3E8",
        "default-bg": "#EFF1F3",
        "border": "#c7d0d4",
        "border-light": "#e9eaeb99",
        "grey-cart": "#e4e8eb",
        "grey-cart-hover": "#e1e1e1",
        "grey-cart-text": "#89898c",
        "grey-text": "#6c757d",
        "grey-card": "#F8F9FA",
        "grey-border": "#EFEFF1",
        "grey-light": "#f9fafb",
        "grey-lighter": "#ebebeb",
        "description": "#495056",
        "description-bg": "#49505612",
        "red-error": "#DC3545",
        "border-radio": "#d3d4d6",
        "radio-icon": "#999",
        "grey-muted": "#4e4b8580",
        "orange": "#f8bb86",
      }
    },
  },
  plugins: [],
};
