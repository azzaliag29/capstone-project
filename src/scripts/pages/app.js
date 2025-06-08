import routes from "../routes/routes";
import { getActiveRoute } from "../routes/url-parser";

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;
  #navbar = null;

  constructor({ navigationDrawer, drawerButton, content, navbar }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;
    this.#navbar = navbar;

    /* this._setupDrawer(); */
    this.#setupNavigation();
  }

  _setupDrawer() {
    this.#drawerButton.addEventListener("click", () => {
      this.#navigationDrawer.classList.toggle("open");
    });

    document.body.addEventListener("click", (event) => {
      if (
        !this.#navigationDrawer.contains(event.target) &&
        !this.#drawerButton.contains(event.target)
      ) {
        this.#navigationDrawer.classList.remove("open");
      }

      this.#navigationDrawer.querySelectorAll("a").forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove("open");
        }
      });
    });
  }

  #setupNavigation() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.#navbar.classList.add("scrolled");
      } else {
        this.#navbar.classList.remove("scrolled");
      }
    });
  }

  async renderPage() {
    const url = getActiveRoute();
    const page = routes[url];

    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
