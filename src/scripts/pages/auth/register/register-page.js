import RegisterPresenter from "./register-presenter";
import * as SummaryAPI from "../../../data/api";


export default class RegisterPage {
  #presenter = null;

  async render() {
    return `
      <section class="auth-container">
          <div class="auth-image">
            <img src="images/register-image.png" alt="Register image">
          </div>
          <div class="auth-form-container">
            <form id="register-form" class="auth-form">
              <div class="form-header">  
                <h2 class="form-title">Register New Account</h2>
                <p class="form-desc">Get started to access your personal AI summarizer.</p>
              </div>

              <div class="auth-form-control">
                <label for="name-input">Full Name</label>

                <div class="form-input-container">
                  <i class="fa-solid fa-user"></i>
                  <input id="name-input" type="text" name="name" placeholder="Enter your full name" required>
                </div>
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

              <div class="checkbox-control">
                <input type="checkbox" id="checkbox" name="checkbox" value="agree" required>
                <label for="checkbox">I agree to the <a href="#/terms">terms</a> and <a href="#/privacy">privacy policy</a></label>
              </div>

              <div class="form-buttons">
                <div class="submit-button-container">
                  <button class="primary-btn" type="submit">Register</button>
                </div> 
                <p>Already have an account? <a href="#/login">Login</a></p>
              </div>
            </form>
          </div>
        </section>
    `;
  }

  async afterRender() {
    this.#presenter = new RegisterPresenter({
      view: this,
      model: SummaryAPI,
    });

    this.#setupForm();
  }

  #setupForm() {
    document
      .getElementById("register-form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = {
          name: document.getElementById("name-input").value,
          email: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value,
        };
        await this.#presenter.getRegistered(data);
      });
  }

  registeredSuccessfully(message) {
    console.log(message);

    location.hash = "/login";
  }

  registeredFailed(message) {
    alert(message);
  }
}
