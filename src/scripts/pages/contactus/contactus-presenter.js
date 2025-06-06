export default class ContactUsPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  // Function to handle form submission
  async submitContactForm(formData) {
    try {
      // Check if all fields are filled
      if (!formData.name || !formData.email || !formData.message) {
        this.#view.showError("Please fill in all fields.");
        return;
      }

      // Send the contact data to the model for processing (e.g., API call)
      const response = await this.#model.submitContactForm(formData);

      if (!response.ok) {
        console.error("submitContactForm: response:", response);
        this.#view.showError(response.message);
        return;
      }

      // If the form submission is successful, notify the user
      this.#view.showSuccess(`Thanks, ${formData.name}! Your message has been submitted.`);
      this.#view.resetForm();
    } catch (error) {
      console.error("submitContactForm: error:", error);
      this.#view.showError(error.message);
    }
  }
}
