import { showFormattedDate } from "./utils";

export function generateAuthenticatedNavigationListTemplate() {
  return `
    <div class="navbar-logo"><strong>Quibly</strong></div>

    <div class="navbar-links">
      <ul class="navbar-center-links">
        <li><a href="/">Home</a></li>
        <li><a href="#/library">Library</a></li>
        <li><a href="#/summarize">Summarize Tool</a></li>
        <li><a href="#/about">About</a></li>
        <li><a href="#/contactus">Contact Us</a></li>
      </ul>

      <ul class="navbar-right-links">
        <li id="logout-button"><i class="fa-solid fa-arrow-right-to-bracket"></i><a href="#/login">Log out</a></li>
      </ul>
    </div>

    <button id="drawer-button" class="drawer-button">☰</button>
  `;
}

export function generateUnauthenticatedNavigationListTemplate() {
  return `
    <div class="navbar-logo"><strong>Quibly</strong></div>

    <ul class="navbar-center-links">
      <li><a href="/">Home</a></li>
      <li><a href="#/library">Library</a></li>
      <li><a href="#/summarize">Summarize Tool</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/contactus">Contact Us</a></li>
    </ul>

    <ul class="navbar-right-links">
      <li id="login-button"><i class="fa-solid fa-arrow-right-to-bracket"></i><a href="#/login">Login</a></li>
    </ul>

    <button id="drawer-button" class="drawer-button">☰</button>
  `;
}

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

export function generateSummaryDetailTemplate({
  title,
  summary,
  keywords,
}) {
  return `
    <div class="section-header">
      <h1 class="section-title" form="summary-form" role="textbox">${title}</h1>
    </div>

    <div class="summary-col">
      <div class="summary__top">
        <p>Keywords:</p>
        <div class="keywords-buttons">${keywords}</div>
      </div>

      <div class="summary__bottom">
        <form id="summary-form" class="summary-form">
          <textarea
            id="summary"
            name="summary"
            placeholder="Your summary will show here."
            readonly
          >${summary}</textarea>

          <div class="summary__bottom__buttons">
            <div class="summary__button__left">
              <div class="download-button-container">
                <i class="fa-solid fa-download"></i>
                <a href="" download="summary.txt" id="download-button" class="summary-btn">Download</a>
              </div>

              <div class="copy-button-container">
                <i class="fa-solid fa-copy"></i>
                <button id="copy-button" class="summary-btn" type="button">Copy</button>
              </div>
            </div>

            <div class="summary__button__right">
              <button id="edit-button" class="edit__button primary-btn" type="button"><i class="fa-solid fa-pen-to-square"></i>Edit</button>
              <button id="delete-button" class="delete__button" type="button"><i class="fa-solid fa-trash"></i>Delete</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `
}
