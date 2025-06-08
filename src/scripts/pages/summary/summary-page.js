import SummaryPresenter from "./summary-presenter";
import * as SummaryAPI from "../../data/api";
import { generateSummaryDetailTemplate } from "../../templates";
import { parseActivePathname } from "../../routes/url-parser";

export default class SummaryPage {
  #presenter = null;
  #form = null;

  async render() {
    return `
      <section class="summary-container global-container">
        <div id="summary-detail"></div>
      </section>

      <section>
        <div class="cta-container container">
          <div class="simplify-text-container">
            <div class="simplify-text-container__left-col">
              <h3>Let’s Simplify Your Text</h3>
              <p>Quickly transform long content into clear and concise summaries. Ideal for essays, blogs, or research articles to help you focus on what matters.</p>
              <a href="#/summarize" class="primary-btn">Try Now For Free</a>
            </div>
            <div class="simplify-text-container__right-col">
              <img src="images/cta-image.png" alt="Simplify Text" class="simplify-image">
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new SummaryPresenter(parseActivePathname().id, {
      view: this,
      model: SummaryAPI,
    });
    
    this.#presenter.getSummaryById();
  }

  displaySummary(title, summary, keywords) {
    document.getElementById("summary-detail").innerHTML =
      generateSummaryDetailTemplate({
        title,
        summary,
        keywords,
      });
    
    this.populateKeywords(keywords);
    this.#setupForm();
  }

  #setupForm() {
    this.#form = document.getElementById("summary-form");
    const textArea = document.getElementById("summary");
    const copyButton = document.getElementById("copy-button");
    const downloadButton = document.getElementById("download-button");
    const summaryEditButton = document.getElementById("edit-button");
    const deleteButton = document.getElementById("delete-button");

    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(textArea.value).then(() => {
        alert("Summary copied to clipboard!");
      });
    });

    downloadButton.addEventListener("click", () => {
      const blob = new Blob([textArea.value], {type: "text/plain"});
      const url = URL.createObjectURL(blob);
      downloadButton.href = url;
    });

    summaryEditButton.addEventListener("click", async () => {
      const summaryTitle = document.querySelector(".section-title");
      const isEditing = textArea.hasAttribute("readonly") === false;

      if (!isEditing) {
        summaryTitle.contentEditable = "true";
        summaryTitle.focus();
        textArea.removeAttribute("readonly");
        summaryEditButton.innerHTML = '<i class="fa-solid fa-check"></i>Save';
      } else {
        summaryTitle.contentEditable = "false";
        textArea.setAttribute("readonly", true);
        summaryEditButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Edit';

        const data = {
          title: summaryTitle.textContent,
          summary: textArea.value,
        };

        await this.#presenter.editSummaryById(data);
      }
    });

    deleteButton.addEventListener("click", async () => {
      const confirmed = confirm("Are you sure you want to delete this summary?");
      if (!confirmed) return;

      await this.#presenter.deleteSummaryById();
    });
  }

  populateKeywords(keywords) {
    const keywordContainer = document.querySelector(".keywords-buttons");
    keywordContainer.innerHTML = "";

    keywords.forEach((keyword) => {
      const encodedKeyword = encodeURIComponent(keyword);
      const keywordButton = document.createElement("a");
      keywordButton.className = "keywords-button";
      keywordButton.href = `https://scholar.google.com/scholar?q=${encodedKeyword}`;
      keywordButton.textContent = keyword;
      keywordContainer.appendChild(keywordButton);
    });
  }

  showSuccess(message) {
    alert(message);
    this.clearSummary();
  }

  showError(message) {
    alert(message);
  }

  clearSummary() {
    this.#form.reset();
  }
}
