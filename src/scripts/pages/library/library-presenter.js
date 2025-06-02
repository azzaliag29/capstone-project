export default class LibraryPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async initialGallery() {
    try {
      const response = await this.#model.getAllSummaries();

      if (!response.ok) {
        console.error("response:", response);
        this.#view.populateSummaryListError(response.message);
        return;
      }

      this.#view.populateSummaryList(response.message, response.data.summaries);
    } catch (error) {
      console.error("error:", error);
      this.#view.populateSummaryListError(error.message);
    }
  }

  async deleteButtonHandler(id) {
    try {
      const response = await this.#model.deleteSummaryById(id);
    
      if (!response.ok) {
        console.error("response:", response);
        return;
      }

      await this.initialGallery();
    } catch (error) {
      console.error("error:", error);
    }
  }
}
