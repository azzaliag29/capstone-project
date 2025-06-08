import routes from "../routes/routes";
import { getActiveRoute } from "../routes/url-parser";
import { generateAuthenticatedNavigationListTemplate, generateUnauthenticatedNavigationListTemplate  } from "../templates";
import { getAccessToken, getLogout } from "../utils/auth";

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;
  #navbar = null;
  #footer = null;

  constructor({ navigationDrawer, drawerButton, content, navbar, footer }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;
    this.#navbar = navbar;
    this.#footer = footer;
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
    const isLogin = !!getAccessToken();
    const url = getActiveRoute();

    const isAuthPage = ["/login", "/register"].includes(url);

    if (isAuthPage) {
      this.#navbar.style.display = "none";
      this.#footer.style.display = "none";
      return;
    }

    this.#navbar.style.display = "";
    this.#footer.style.display = "";

    if (!isLogin) {
      this.#navbar.innerHTML = generateUnauthenticatedNavigationListTemplate();

      const navbarLogo = this.#navbar.querySelector(".navbar-logo");
      navbarLogo?.addEventListener("click", (event) => {
        event.preventDefault();
        location.hash = "/";
      });
    } else {
      this.#navbar.innerHTML = generateAuthenticatedNavigationListTemplate();

      const logoutButton = document.getElementById("logout-button");
      logoutButton?.addEventListener("click", async (event) => {
        event.preventDefault();
        if (confirm("Apakah Anda yakin ingin keluar?")) {
          await getLogout();
          location.hash = "/login";
        }
      });
    }

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

    const route = routes[url];

    const page = route();
    if (!page) return;

    this.#content.innerHTML = await page.render();
    await page.afterRender();

    this.#setupNavigation();
  }
}

export default App;
