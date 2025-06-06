export default class SummaryPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  // Function to fetch and display summary by ID
  async getSummaryById(id) {
    try {
      const response = await this.#model.getSummaryById(id);

      if (!response.ok) {
        console.error("getSummaryById: response:", response);
        this.#view.showError(response.message);
        return;
      }

      const { title, summary, keywords } = response.data;
      
      // Display the fetched summary on the view
      this.#view.displaySummary(title, summary, keywords);
    } catch (error) {
      console.error("getSummaryById: error:", error);
      this.#view.showError(error.message);
    }
  }

  // Function to edit summary by ID
  async editSummaryById(id, { title, summary }) {
    try {
      const data = {
        title: title,
        summary: summary,
      };

      const response = await this.#model.editSummaryById(id, data);

      if (!response.ok) {
        console.error("editSummaryById: response:", response);
        this.#view.showError(response.message);
        return;
      }

      this.#view.updateSummary(response.data.title, response.data.summary);
      this.#view.showSuccess(response.message);
    } catch (error) {
      console.error("editSummaryById: error:", error);
      this.#view.showError(error.message);
    }
  }

  // Function to delete summary by ID
  async deleteSummaryById(id) {
    try {
      const response = await this.#model.deleteSummaryById(id);

      if (!response.ok) {
        console.error("deleteSummaryById: response:", response);
        this.#view.showError(response.message);
        return;
      }

      this.#view.clearSummary();
      this.#view.showSuccess(response.message);
    } catch (error) {
      console.error("deleteSummaryById: error:", error);
      this.#view.showError(error.message);
    }
  }
}
