import ContactUsPresenter from "./contactus-presenter";
import * as SummaryAPI from "../../data/api";

export default class ContactUsPage {
  #presenter = null;
  #form = null;

  async render() {
    return `
      <section class="contactus-container global-container">
        <div class="section-header">
          <h1 class="section-title">Talk To Our Team</h1>
          <p>Need help? Our team is just a step away</p>
        </div>

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
            <button type="submit" id="cu-submit-btn" class="primary-btn">
              Submit Message
            </button>
          </form>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new ContactUsPresenter({
      view: this,
      model: SummaryAPI,
    });
  
    this.#setupForm();
  }

  #setupForm() {
    this.#form = document.getElementById("contact-form");
    if (this.#form) {
      this.#form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
          name: this.#form.name.value,
          email: this.#form.email.value,
          message: this.#form.message.value,
        }

        await this.#presenter.submitContactForm(data);
      })
    }
  }

  showSuccess(message) {
    alert(message);
    this.#form.reset();
  }

  showError(message) {
    alert(message);
  }
}
