export default class ContactUsPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async submitContactForm(formData) {
    this.#view.showLoading();

    try {
      if (!formData.name || !formData.email || !formData.message) {
        this.#view.showError("Please fill in all fields.");
        return;
      }

      const response = await this.#model.sendMessage(formData);

      if (!response.ok) {
        console.error("submitContactForm: response:", response);
        this.#view.showError(response.message);
        return;
      }

      this.#view.showSuccess(
        `Thanks, ${formData.name}! Your message has been submitted.`,
      );
    } catch (error) {
      console.error("submitContactForm: error:", error);
      this.#view.showError(error.message);
    } finally {
      this.#view.hideLoading();
    }
  }
}
