// CSS imports
import "../styles/styles.css";
import "../styles/responsives.css";

import App from "./pages/app";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App({
    content: document.querySelector("#main-content"),
    navbar: document.querySelector("nav"),
    footer: document.querySelector("footer"),
  });
  await app.renderPage();

  window.addEventListener("hashchange", async () => {
    await app.renderPage();
  });
});
