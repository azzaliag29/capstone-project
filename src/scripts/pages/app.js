import routes from "../routes/routes";
import { getActiveRoute } from "../routes/url-parser";
import {
  generateAuthenticatedNavigationListTemplate,
  generateUnauthenticatedNavigationListTemplate,
} from "../templates";
import { transitionHelper } from "../utils";
import { getAccessToken, getLogout } from "../utils/auth";

class App {
  #content = null;
  #drawerButton = null;
  #drawerNavigation = null;
  #navbar = null;
  #footer = null;

  constructor({ content, navbar, footer }) {
    this.#content = content;
    this.#navbar = navbar;
    this.#footer = footer;
  }

  #setupDrawer() {
    this.#drawerButton = document.querySelector("#drawer-button");
    this.#drawerNavigation = document.querySelector(".navbar-links");

    this.#drawerButton.addEventListener("click", () => {
      this.#drawerNavigation.classList.toggle("open");
    });

    document.body.addEventListener("click", (event) => {
      const isTargetInsideDrawer = this.#drawerNavigation.contains(
        event.target,
      );
      const isTargetInsideButton = this.#drawerButton.contains(event.target);

      if (!(isTargetInsideDrawer || isTargetInsideButton)) {
        this.#drawerNavigation.classList.remove("open");
      }

      this.#drawerNavigation.querySelectorAll("a").forEach((link) => {
        if (link.contains(event.target)) {
          this.#drawerNavigation.classList.remove("open");
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

    const transition = transitionHelper({
      updateDOM: async () => {
        this.#content.innerHTML = await page.render();
        await page.afterRender();
      },
    });
    transition.ready.catch(console.error);
    transition.updateCallbackDone.then(() => {
      requestAnimationFrame(() => {
        scrollTo({ top: 0, behavior: "instant" });
        this.#setupNavigation();
        this.#setupDrawer();
      });
    });
  }
}

export default App;
