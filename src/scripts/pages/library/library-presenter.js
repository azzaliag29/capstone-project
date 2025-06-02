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
        console.error("initialGallery: response:", response);
        this.#view.populateSummaryListError(response.message);
        return;
      }

      this.#view.populateSummaryList(response.message, response.data.summaries);
    } catch (error) {
      console.error("initialGallery: error:", error);
      this.#view.populateSummaryListError(error.message);
    }
  }
}
