export default class SummarizePresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async createNewSummary({ language, originalContent }) {
    try {
      const data = {
        language: language,
        originalContent: originalContent,
      };

      const response = await this.#model.createSummary(data);

      if (!response.ok) {
        console.error("createNewSummary: response:", response);
        this.#view.createFailed(response.message);
        return;
      }
      
      this.#view.createSuccessfully(response.message);
    } catch (error) {
      console.error("createNewSummary: error:", error);
      this.#view.createFailed(error.message);
    }
  }
}
