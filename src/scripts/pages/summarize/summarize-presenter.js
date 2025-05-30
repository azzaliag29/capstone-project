export default class SummarizePresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async postNewSummary({ language, originalContent }) {
    try {
      const data = {
        language: language,
        originalContent: originalContent,
      };

      const response = await this.#model.storeSummary(data);

      if (!response.ok) {
        console.error("postNewSummary: response:", response);
        this.#view.storeFailed(response.message);
        return;
      } 
    } catch (error) {
      console.error("postNewSummary: error:", error);
      this.#view.storeFailed(error.message);
    }
  }
}
