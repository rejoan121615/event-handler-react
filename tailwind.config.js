module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
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
