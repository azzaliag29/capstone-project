import { showFormattedDate } from "./utils";

export function generateSummaryItemTemplate({
  id,
  title,
  summary,
  savedAt,
}) {
  return `
      <div tabindex="0" class="library-item" data-libraryid="${id}">
        <div class="library-item__illustration">
          <img src="images/file-illustration.png" alt="File illustration">
        </div>

        <div class="library-item__detail">
          <div class="library-item__header">
            <h2 class="library-item__title">${title}</h2>
            <div class="library-item__desc">
              <p>${summary}</p>
            </div>
          </div>

          <div class="library-item__footer">
            <p class="library-item__date">Saved at
              <span>
                ${showFormattedDate(savedAt,"id-ID")}
              </span>
            </p>
            <div class="library-item__buttons">
              <a href="#/summaries/${id}" class="open-button" aria-label="Open summary"><i class="fa-solid fa-chevron-right"></i></a>
              <button class="delete-button" aria-label="Delete summary"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;
}

export function generateSummaryListEmptyTemplate() {
  return `
      <div id="library-list-empty" class="library-list__empty">
        <img src="images/error-empty-illustration.png" alt="Empty library list" class="library-list__empty__image">
        <div class="library-list__empty__desc">
          <h2>Your summary list is empty</h2>
          <p>Looks like you haven’t saved any summaries</p>
        </div>
      </div>
    `;
}

export function generateSummaryListErrorTemplate(message) {
  return `
      <div id="library-list-error" class="library-list__error">
        <img src="images/error-empty-illustration.png" alt="Error library list" class="library-list__error__image">
        <div class="library-list__error__desc">
          <h2>Oops! We couldn’t fetch your summary list</h2>
            <p>${
              message ? message : "Try a different network or report this error"
            }</p>
        </div>
      </div>
    `;
}

export function generateKeywords(text) {
  return `<a href="" class="keywords-button">${text}</a>`;
}
