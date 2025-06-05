class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="navbar-logo">Quibly</div>
        <ul class="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/library.html">Library</a></li>
          <li><a href="/summarize.html">Summarize Tool</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
          <li><a href="/signin.html">Sign In</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-navbar', AppNavbar);
