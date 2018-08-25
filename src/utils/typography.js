// http://kyleamathews.github.io/typography.js/
// https://www.styled-components.com/docs/basics#extending-styles
import Typography from "typography";

// import lawtonTheme from "typography-theme-lawton";
// const typography = new Typography(lawtonTheme);

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
});

export default typography;