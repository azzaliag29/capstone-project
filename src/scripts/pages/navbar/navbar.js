class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="navbar-logo">Quibly</div>
        <ul class="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/library">Library</a></li>
          <li><a href="/summarize">Summarize Tool</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/signin">Sign In</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-navbar', AppNavbar);
