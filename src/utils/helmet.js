const title = "Babylon Metropolis Verlag"
const description =
  "Bücher zum Kolonialismus, Großstädte, und Dichtung sowie die Kosmopolis Zeitschrift. Autoren sind Ronald Daus, Ursula Daus uva."

const favicon = require("src/assets/images/favicon.png")
const share = require("src/assets/images/share.png")

export const helmet = {
  title,
  titleTemplate: "%s - Babaylon Metropolis Verlag",
  htmlAttributes: { lang: "de" },
  meta: [
    { name: "description", content: description },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, user-scalable=no",
    },
    { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    { name: "msapplication-navbutton-color", content: "#000" },
    { name: "msapplication-TileColor", content: "#000" },
    { name: "theme-color", content: "#000" },

    { property: "og:title", content: title },
    { property: "og:image", content: share },
    { property: "og:image:width", content: "880px" },
    { property: "og:image:height", content: "440px" },
    { property: "og:image:alt", content: description },

    { name: "twitter:title", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: share },
    { name: "twitter:site", content: "@mat_twitta" },
    { name: "twitter:creator", content: "@mat_twitta" },
    { name: "twitter:description", content: description },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: favicon }],
}
