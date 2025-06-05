
class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-section brand">
          <h2>Quibly</h2>
          <p>Summarize long text</p>
          <p class="copyright">© 2025 QUIBLY.com</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#/about">About us</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#/privacy">Privacy Policy</a></li>
            <li><a href="#/terms">Terms of service</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Social</h4>
          <div class="social-icons">
            <a href="#"><img src="icons/linkedin.svg" alt="LinkedIn"></a>
            <a href="#"><img src="icons/twitter.svg" alt="Twitter"></a>
            <a href="#"><img src="icons/instagram.svg" alt="Instagram"></a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
