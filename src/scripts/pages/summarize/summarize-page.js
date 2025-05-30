import SummarizePresenter from "./summarize-presenter";
import * as SummaryAPI from "../../data/api";

export default class SummarizePage {
  #presenter = null;
  #form = null;
  #uploadedContent = null;
  #maxFileSize = 1048576 * 10;

  async render() {
    return `
      <section class="summarize-tool-container container">
        <div class="section-header">
          <h1 class="section-title">Study Smarter with AI Summarizer</h1>
          <p>Simplify your study material into clear summaries</p>
        </div>

        <div class="summarize-tool">
          <div class="summarize-tool__left-col">
            <div class="summarize-tool__top">
              <div class="language-selector">
                <label for="language"><i class="fa-solid fa-globe"></i></label>
                <select name="language" id="language" class="language-selector__button">
                  <option value="id" selected>Indonesian</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>

            <div class="summarize-tool__bottom">
              <form id="summarize-input-form" class="summarize-form">
                <textarea
                id="text-input"
                name="text"
                placeholder="Upload a PDF file or directly write or paste your text in this section. Whenever you’re ready, just click “Summarize”. Your summary will come out within a minute!"
                minlength="50"
                required
                ></textarea>

                <div class="file-preview" hidden>
                  <img src="images/file-illustration2.svg" alt="File illustration">
                </div>

                <div class="summarize-tool__bottom__buttons">
                  <div class="summarize-tool__button__left">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    <button id="input-button" class="summarize-btn" type="button">Upload PDF</button>
                    <input
                      id="file-input"
                      class="summarize-tool__file__input"
                      name="file"
                      type="file"
                      accept="application/pdf"
                    >
                  </div>
                    
                  <div class="summarize-tool__button__right">
                    <button id="summarize-button" class="submit__button primary-btn" type="submit">Summarize</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="summarize-tool__right-col">
            <div class="summarize-tool__top">
              <p>Keywords:</p>
              <div class="keywords-buttons">
                <button class="keywords-button" type="button">Keyword 1</button>
                <button class="keywords-button" type="button">Keyword 2</button>
                <button class="keywords-button" type="button">Keyword 3</button>
              </div>
            </div>

            <div class="summarize-tool__bottom">
              <form id="summarize-output-form" class="summarize-form">
                <textarea
                id="text-output"
                name="summary"
                placeholder="Your summary will show here."
                readonly
                ></textarea>

                <div class="summarize-tool__bottom__buttons">
                  <div class="summarize-tool__button__left">
                    <div class="download-button-container">
                      <i class="fa-solid fa-download"></i>
                      <a href="" download="summary.txt" id="download-button" class="summarize-btn">Download</a>
                    </div>

                    <div class="copy-button-container">
                      <i class="fa-solid fa-copy"></i>
                      <button id="copy-button" class="summarize-btn" type="button">Copy</button>
                    </div>
                  </div>

                  <div class="summarize-tool__button__right">
                    <button id="save-button" class="save__button primary-btn" type="submit">Save to library</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="gradient-orbs"></div>
      </section>

      <section class="faq-container container">
        <div class="section-header">
          <h1 class="section-title">Frequently Asked Questions</h1>
          <p>Here are the most asked question by our user</p>
        </div>

        <div class="faq-list">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What is AI Summarizer?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">AI Summarizer is an artificial intelligence-powered tool that helps you condense long texts into shorter and easy-to-understand versions.</div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Can i summarize PDFs or only plain text?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">You can upload documents in formats like PDF or simply paste plain text into the input field.</div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Are the summaries 100% accurate?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">AI Summarizer is designed to provide relevant and logical summaries, but we recommend reviewing the output to ensure contextual accuracy.</div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                  Can i save my summaries for later?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Yes. Your summaries are saved in your personal library so you can revisit and manage them anytime.</div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                  Does Quibly store my uploaded data?
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Yes. Your input and generated summaries are stored securely in your personal account library for future access. We prioritize user privacy and data security.</div>
              </div>
            </div>

            <div class="accordion-item"></div>
          </div>
        </div>

        <div class="faq-bg"></div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new SummarizePresenter({
      view: this,
      model: SummaryAPI,
    });
    this.#uploadedContent;

    this.#setupForm();
  }

  #setupForm() {
    this.#form = document.getElementById("summarize-input-form");
    this.#form.addEventListener("submit", async (event) => {
      event.preventDefault();
      
      const textInput = document.getElementById('text-input').value;
      const fileInput = document.getElementById('file-input').files[0];

      if (!textInput && !fileInput) {
        return alert("Please upload a file or enter text.");
      }

      if (fileInput) {
        if (fileInput.size > this.#maxFileSize) {
          alert("File size exceeds the maximum limit of 10MB.");
          return;
        }
        this.#uploadedContent = fileInput;
      }

      if (textInput) {
        this.#uploadedContent = textInput;
      }

      const data = {
        language: document.getElementById("language").value,
        originalContent: this.#uploadedContent,
      };
      await this.#presenter.postNewSummary(data);
    });

    document
      .getElementById("input-button")
      .addEventListener("click", () => {
        document.getElementById("file-input").click();
    });
  }

  storeSuccessfully(message) {
      console.log(message);
      this.clearForm();
    }

    storeFailed(message) {
      alert(message);
    }

    clearForm() {
      this.#form.reset();
    }
}
