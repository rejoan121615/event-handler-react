const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        container: {
            screens: {
                xs: "100%",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                mxl: "1700px",
            },
        },
        extend: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                mxl: "1700px",
            },
            fontFamily: {
                circular: ["circular"],
            },
            colors: {
                primary: "#AEAFFF",
            },
        },
    },
    plugins: [],
};
