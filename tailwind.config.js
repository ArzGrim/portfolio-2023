module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        fontSize: {
            base: "10px",
            "01__p-mobile": "1.4rem",
            "01__p-desktop": "1.8rem",

            "h-mobile": "2.4rem",
            "h-desktop": "3rem",

            "01__home-h1-mobile": "3rem",
            "01__home-h1-desktop": "4rem",

            "01__h2-mobile": "2rem",
            "01__h2-desktop": "2.4rem",
        },
        letterSpacing: {
            "title-mobile": "1px",
            "title-desktop": "2px",
        },
        lineHeight: {
            title: "1",
            12: "3rem",
        },
        extend: {
            height: {
                "01__homepage-img-desktop": "calc(100vh - 170px)",
                "01__homepage-img-mobile": "700px",
            },
            width: {
                "01__homepage-img": "100%",

                "01__full-mobile": "calc(100% - 10px)",
                "01__full-tablet": "calc(100% - 40px - 145px)",
            },
            screens: {
                sm: "480px",
                md: "768px",
                lg: "1200px",
                xl: "1560px",
            },
            gridTemplateAreas: {
                "01__layout-desktop": [
                    ". . . .",
                    ". header header .",
                    ". main aside .",
                    ". footer footer .",
                    ". . . .",
                ],
                "01__layout-tablet": [
                    ". . . .",
                    ". header header .",
                    ". main aside .",
                    ". footer footer .",
                    ". . . .",
                ],
                "01__layout-mobile": [
                    ". . . .",
                    ". header header .",
                    ". main main .",
                    ". main main .",
                    ". . . .",
                ],
                "01__layout-menu": [
                    ". . . .",
                    ". header header .",
                    ". aside aside .",
                    ". footer footer .",
                    ". . . .",
                ],
            },
            gridTemplateColumns: {
                //—————————————————————| Style 01
                "01__global-desktop-xl": "auto 1400px 145px auto",
                "01__global-desktop": "auto 1000px 145px auto",
                "01__global-tablet": "20px auto 145px 20px",
                "01__global-mobile": "5px auto auto 5px",

                "01__content-desktop": "repeat(12, 1fr)",
                "01__content-mobile": "repeat(6, 1fr)",

                "01__header-desktop": "auto",
                "01__header-mobile": "auto 75px",

                "01__footer": "auto",

                "01__menu-desktop": "repeat(6, 95px) auto",

                "01__container-desktop": "50% 50%",
            },
            gridColumn: {
                "01__full": "1 / -1",
                "01__half-left": "1 / 7",
                "01__half-right": "7 / 13",

                "01__two-third-left": "1 / 9",

                "01__third-left": "1 / 5",
                "01__third-middle": "5 / 9",
                "01__third-right": "9 / 13",
            },

            gridTemplateRows: {
                //—————————————————————| Style 01
                "01__global-desktop": "25px 75px auto 45px 25px",
                "01__menu-open": "25px 1fr 1fr 1fr 25px",

                "01__header-desktop": "auto",
                "01__header-mobile": "75px auto",

                "01__footer-desktop": "auto",

                "01__homepage-desktop": "auto",
                "01__homepage-mobile": "auto auto",
            },
            gridRow: {
                "01__homepage-top": "1 / 1",
                "01__homepage-bottom": "2 / 2",
                "01__full": "1 / -1",
            },
            colors: {
                blue: "#1fb6ff",
                pink: "#ff49db",
                orange: "#ff7849",
                green: "#13ce66",
                "gray-dark": "#273444",
                gray: "#8492a6",
                "gray-light": "#d3dce6",
            },
            fontFamily: {
                sans: ["Graphik", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@savvywombat/tailwindcss-grid-areas"),
    ],
};
