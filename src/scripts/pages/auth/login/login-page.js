import LoginPresenter from "./login-presenter";
import * as SummaryAPI from "../../../data/api";
import * as AuthModel from "../../../utils/auth";

export default class LoginPage {
  #presenter = null;

  async render() {
    return `
      <section class="auth-container">
          <div class="auth-image">
            <img src="images/login-image.png" alt="Login image">
          </div>
          <div class="auth-form-container">
            <form id="login-form" class="auth-form">
              <div class="form-header">  
                <h2 class="form-title">Login To Your Account</h2>
                <p class="form-desc">Pick up where you left off and keep learning</p>
              </div>

              <div class="auth-form-control">
                <label for="email-input">Email Address</label>

                <div class="form-input-container">
                  <i class="fa-solid fa-envelope"></i>
                  <input id="email-input" type="email" name="email" placeholder="Enter your email address" required>
                </div>
              </div>

              <div class="auth-form-control">
                <label for="password-input">Password</label>

                <div class="form-input-container">
                  <i class="fa-solid fa-lock"></i>
                  <input id="password-input" type="password" name="password" placeholder="Enter your password" minlength="8" required>
                </div>
              </div>

              <div class="form-buttons">
                <div class="submit-button-container">
                  <button class="primary-btn" type="submit">Login</button>
                </div> 
                <p>Don't have an account? <a href="#/register">Register</a></p>
              </div>
            </form>
          </div>
        </section>
    `;
  }

  async afterRender() {
    this.#presenter = new LoginPresenter({
      view: this,
      model: SummaryAPI,
      authModel: AuthModel,
    });

    this.#setupForm();
  }

  #setupForm() {
    document
      .getElementById("login-form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = {
          email: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value,
        };
        await this.#presenter.getLogin(data);
      });
  }

  loginSuccessfully(message) {
    console.log(message);

    location.hash = "#/";
  }

  loginFailed(message) {
    alert(message);
  }
}
