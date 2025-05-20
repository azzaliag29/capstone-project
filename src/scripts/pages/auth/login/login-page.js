export default class LoginPage {
  async render() {
    return `
      <section class="auth-container">
          <div class="auth-image">
            <img src="images/login-image.png" alt="Login image">
          </div>
          <div class="auth-form-container">
            <form id="login-form" class="auth-form">
              <div class="form-header">
                <h1 class="form-logo">Quibly</h1>      
                <h2 class="form-title">Login To Your Account</h2>
                <p class="form-desc">Pick up where you left off and keep learning</p>
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
                  <button class="btn" type="submit">Login</button>
                </div> 
                <p>Don't have an account? <a href="#/register">Register</a></p>
              </div>
            </form>
          </div>
        </section>
    `;
  }

  async afterRender() {}
}
