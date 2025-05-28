export default class SummaryPage {
  async render() {
    return `
      <section class="summary-tool-container">
        <div class="section-header">
          <h1 class="section-title">Article-1.pdf</h1>
        </div>

        <div class="summary-tool__right-col">
          <div class="summary-tool__top">
            <p>Keywords:</p>
            <div class="keywords-buttons">
              <button class="keywords-button" type="button">Keyword 1</button>
              <button class="keywords-button" type="button">Keyword 2</button>
              <button class="keywords-button" type="button">Keyword 3</button>
            </div>
          </div>

          <div class="summary-tool__bottom">
            <form id="summary-output-form" class="summary-form">
              <textarea
                id="text-output"
                name="summary"
                placeholder="Your summary will show here."
                readonly
              ></textarea>

              <div class="summary-tool_bottom_buttons">
                <div class="summary-tool_button_left">
                  <div class="download-button-container">
                    <i class="fa-solid fa-download"></i>
                    <a href="" download="summary.txt" id="download-button" class="summary-btn">Download</a>
                  </div>

                  <div class="copy-button-container">
                    <i class="fa-solid fa-copy"></i>
                    <button id="copy-button" class="summary-btn" type="button">Copy</button>
                  </div>
                </div>

                <div class="summary-tool_button_right">
                  <button id="edit-button" class="edit__button primary-btn" type="button"><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                  <button id="delete-button" class="delete__button" type="button"><i class="fa-solid fa-trash"></i>Delete</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div class="cta-container container">
          <div class="simplify-text-container">
            <div class="simplify-text-container__left-col">
              <h3>Let’s Simplify Your Text</h3>
              <p>Quickly transform long content into clear and concise summaries. Ideal for essays, blogs, or research articles to help you focus on what matters.</p>
              <a href="#/" class="primary-btn">Try Now For Free</a>
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
    // Access buttons and textarea
    const editButton = document.getElementById("edit-button");
    const deleteButton = document.getElementById("delete-button");
    const textarea = document.getElementById("text-output");

    // Edit Button functionality
    editButton.addEventListener("click", () => {
      if (textarea.hasAttribute("readonly")) {
        textarea.removeAttribute("readonly");
        textarea.focus();
        editButton.innerHTML = '<i class="fa-solid fa-check"></i>Save';
      } else {
        textarea.setAttribute("readonly", true);
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>Edit';
      }
    });

    // Delete Button functionality
    deleteButton.addEventListener("click", () => {
      textarea.value = ""; // Clear the textarea content
    });
  }
}