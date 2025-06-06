export default class ContactUsPage {
  async render() {
    return `
      <section class="contactus-container">
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
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
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
