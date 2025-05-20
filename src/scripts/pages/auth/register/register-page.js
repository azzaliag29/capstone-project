export default class RegisterPage {
  async render() {
    return `
      <section class="auth-container">
          <div class="auth-image">
            <img src="images/register-image.png" alt="Register image">
          </div>
          <div class="auth-form-container">
            <form id="auth-form" class="auth-form">
              <div class="form-header">
                <h1 class="form-logo">Quibly</h1>      
                <h2 class="form-title">Register New Account</h2>
                <p class="form-desc">Get started to access your personal AI summarizer.</p>
              </div>

              <div class="form-control">
                <label for="name-input">Full Name</label>

                <div class="form-input-container">
                  <i class="fa-solid fa-user"></i>
                  <input id="name-input" type="text" name="name" placeholder="Enter your full name">
                </div>
              </div>

              <div class="form-control">
                <label for="email-input">Email Address</label>

                <div class="form-input-container">
                  <i class="fa-solid fa-envelope"></i>
                  <input id="email-input" type="email" name="email" placeholder="Enter your email address">
                </div>
              </div>

              <div class="form-control">
                <label for="password-input">Password</label>

                <div class="form-input-container">
                  <i class="fa-solid fa-lock"></i>
                  <input id="password-input" type="password" name="password" placeholder="Enter your password">
                </div>
              </div>

              <div class="form-buttons">
                <div class="submit-button-container">
                  <button class="btn" type="submit">Register</button>
                </div> 
                <p>Already have an account? <a href="#/login">Login</a></p>
              </div>
            </form>
          </div>
        </section>
    `;
  }

  async afterRender() {}
}
