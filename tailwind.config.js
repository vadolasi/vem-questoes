/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#38bdf8",
          "secondary": "#9ca3af",
          "accent": "#0284c7",
          "neutral": "#24262e",
          "base-100": "#f6f7f9",
          "info": "#a0c9ee",
          "success": "#15803d",
          "warning": "#f59e0b",
          "error": "#dc2626"
        }
      }
    ]
  }
}
