export default class ContactUsPage {
  async render() {
    return `
      <section class="contactus-container">
        <nav class="cu-navbar">
          <div class="cu-logo">Quibly</div>
          <div class="cu-nav-links">
            <a href="#">Home</a>
            <a href="#">Library</a>
            <a href="#">Summarize Tool</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Sign In</a>
          </div>
        </nav>

        <h1 class="cu-title">Talk To Our Team</h1>
        <div class="cu-form-wrapper">
          <form id="contact-form">
            <div class="cu-form-group">
              <label for="name-input">Name</label>
              <input id="name-input" type="text" name="name" placeholder="Your Name" />
            </div>
            <div class="cu-form-group">
              <label for="email-input">Email</label>
              <input id="email-input" type="email" name="email" placeholder="your@email.com" />
            </div>
            <div class="cu-form-group">
              <label for="message-input">Your Message</label>
              <textarea id="message-input" name="message" placeholder="Write your message here..." rows="3"></textarea>
            </div>
            <button type="submit" class="cu-submit-btn">
              Submit Message
            </button>
          </form>
        </div>

        <div class="cu-simple-bottom">
          <div class="cu-simple-left">
            <span class="quibly-title">Quibly</span>
            <span class="cu-summary-text">Summarize long text</span>
          </div>

          <div class="cu-simple-right">
            <!-- About Us and Privacy Policy Links -->
            <div class="cu-simple-menu">
              <div>
                <a href="#/about">About Us</a>
              </div>
              <div>
                <a href="#/privacy-policy">Privacy Policy</a>
              </div>
            </div>

            <!-- Support and Terms of Service Links -->
            <div class="cu-support-terms">
              <div>
                <a href="#/support">Support</a>
              </div>
              <div>
                <a href="#/terms-of-service">Terms of Service</a>
              </div>
            </div>

            <!-- Social Media Links -->
            <div class="cu-social-links">
              <span>Social</span>
              <a href="https://www.instagram.com" target="_blank">
                <i class="fab fa-instagram cu-social-icon"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <i class="fab fa-linkedin cu-social-icon"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i class="fab fa-twitter cu-social-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2025 Quibly.com</span>
      </footer>
    `;
  }

  async afterRender() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (name && email && message) {
          alert(`Thanks, ${name}! Your message has been submitted.`);
          form.reset();
        } else {
          alert("Please fill in all fields.");
        }
      });
    }
  }
}
