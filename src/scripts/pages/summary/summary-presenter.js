export default class SummaryPresenter {
  #view;
  #model;
  #summaryId;

  constructor(summaryId, { view, model }) {
    this.#summaryId = summaryId;
    this.#view = view;
    this.#model = model;
  }

  // Function to fetch and display summary by ID
  async getSummaryById() {
    this.#view.showLoading();

    try {
      const response = await this.#model.getSummaryById(this.#summaryId);

      if (!response.ok) {
        console.error("getSummaryById: response:", response);
        this.#view.showError(response.message);
        return;
      }

      const { title, summary, keywords } = response.data.summary;
      
      // Display the fetched summary on the view
      this.#view.displaySummary(title, summary, keywords);
    } catch (error) {
      console.error("getSummaryById: error:", error);
      this.#view.showError(error.message);
    } finally {
      this.#view.hideLoading();
    }
  }

  // Function to edit summary by ID
  async editSummaryById({ title, summary }) {
    this.#view.showLoading();

    try {
      const data = {
        title: title,
        summary: summary,
      };

      const response = await this.#model.editSummaryById(this.#summaryId, data);

      if (!response.ok) {
        console.error("editSummaryById: response:", response);
        this.#view.showError(response.message);
        return;
      }

      this.getSummaryById();
      this.#view.showSuccess(response.message);
    } catch (error) {
      console.error("editSummaryById: error:", error);
      this.#view.showError(error.message);
    } finally {
      this.#view.hideLoading();
    }
  }

  // Function to delete summary by ID
  async deleteSummaryById() {
    this.#view.showLoading();

    try {
      const response = await this.#model.deleteSummaryById(this.#summaryId);

      if (!response.ok) {
        console.error("deleteSummaryById: response:", response);
        this.#view.showError(response.message);
        return;
      }

      this.#view.clearSummary();
      this.#view.showSuccess(response.message);
      location.hash = "/library";
    } catch (error) {
      console.error("deleteSummaryById: error:", error);
      this.#view.showError(error.message);
    } finally {
      this.#view.hideLoading();
    }
  }
}
