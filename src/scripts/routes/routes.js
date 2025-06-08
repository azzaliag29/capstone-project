import HomePage from "../pages/home/home-page";
import AboutPage from "../pages/about/about-page";
import LoginPage from "../pages/auth/login/login-page";
import RegisterPage from "../pages/auth/register/register-page";
import ContactUs from "../pages/contactus/contactus-page";
import SummaryPage from "../pages/summary/summary-page";
import SummarizePage from "../pages/summarize/summarize-page";
import LibraryPage from "../pages/library/library-page";
import PrivacyPage from "../pages/privacy/privacy-page";
import TermsPage from "../pages/terms/terms-page";
import { checkAuthenticatedRouteOnly, checkUnauthenticatedRouteOnly } from "../utils/auth";

const routes = {
  "/": () => new HomePage(),
  "/about": () => new AboutPage(),
  "/login": () => checkUnauthenticatedRouteOnly(new LoginPage()),
  "/register": () => checkUnauthenticatedRouteOnly(new RegisterPage()),
  "/contactus": () => new ContactUs(),
  "/summaries/:id": () => checkAuthenticatedRouteOnly(new SummaryPage()),
  "/summarize": () => checkAuthenticatedRouteOnly(new SummarizePage()),
  "/library": () => checkAuthenticatedRouteOnly(new LibraryPage()),
  "/privacy": () => new PrivacyPage(),
  "/terms": () => new TermsPage(),
};

export default routes;
