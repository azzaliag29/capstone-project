import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import ContactUs from '../pages/contactus/contact-us';
import summary from '../pages/summary/summary';


const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/login': new LoginPage(),
  '/register': new RegisterPage(),
  '/contactus': new ContactUs(),
  '/summary': new summary(),
};

export default routes;
