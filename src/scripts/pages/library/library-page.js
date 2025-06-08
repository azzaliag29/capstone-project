import LibraryPresenter from "./library-presenter";
import * as SummaryAPI from "../../data/api";
import {
  generateSummaryItemTemplate,
  generateSummaryListEmptyTemplate,
  generateSummaryListErrorTemplate,
} from "../../templates";

export default class LibraryPage {
  #presenter = null;

  async render() {
    return `
      <section class="library-container global-container">
        <div class="section-header">
          <h1 class="section-title">My Library</h1>
          <p>All of the saved summary will be stored in here</p>
        </div>

        <div id="library-list" class="library-list"></div>

        <div class="gradient-image"></div>
      <section>
    `;
  }

  async afterRender() {
    this.#presenter = new LibraryPresenter({
      view: this,
      model: SummaryAPI,
    });
    
    await this.#presenter.initialGallery();
  }

  populateSummaryList (message, summaryList) {
    if (summaryList.length <= 0) {
      this.populateSummaryListEmpty();
      return;
    }

    const html = summaryList.reduce((accumulator, summary) => {
      return accumulator.concat(
        generateSummaryItemTemplate({
          ...summary
        })
      )
    }, "");

    document.getElementById("library-list").innerHTML = `
      <div class="library-list">${html}</div>
    `;

    this.deleteButtonListeners();
  }

  populateSummaryListEmpty() {
    document.getElementById("library-list").innerHTML =
      generateSummaryListEmptyTemplate();
  }

  populateSummaryListError(message) {
    document.getElementById("library-list").innerHTML =
      generateSummaryListErrorTemplate(message);
  }

  deleteButtonListeners() {
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const libraryItem = event.target.closest(".library-item");
        const libraryItemId = libraryItem.getAttribute("data-libraryid");
        this.#presenter.deleteButtonHandler(libraryItemId);
      })
    })
  }
}

// Kalau data sudah bisa di fetch, hapus <div class="library-item"> dan childnya, diganti pakai generateLibraryItem()
