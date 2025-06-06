import HomePage from "../pages/home/home-page";
import AboutPage from "../pages/about/about-page";
import LoginPage from "../pages/auth/login/login-page";
import RegisterPage from "../pages/auth/register/register-page";
import ContactUs from "../pages/contactus/contactus-page";
import SummaryPage from "../pages/summary/summary-page";
import SummarizePage from "../pages/summarize/summarize-page";
import LibraryPage from "../pages/library/library-page";

const routes = {
  "/": new HomePage(),
  "/about": new AboutPage(),
  "/login": new LoginPage(),
  "/register": new RegisterPage(),
  "/contactus": new ContactUs(),
  "/summary": new SummaryPage(),
  "/summarize": new SummarizePage(),
  "/library": new LibraryPage(),
};

export default routes;
