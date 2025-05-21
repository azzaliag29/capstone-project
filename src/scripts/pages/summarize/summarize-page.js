export default class SummarizePage {
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
              <i class="fa-solid fa-globe"></i>
              <div class="language-button">
                <p>Bahasa Indonesia</p>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>

            <div class="summarize-tool__bottom">
              <form id="summarize-input-form" class="summarize-form">
                <textarea
                id="text-input"
                name="text"
                placeholder="Upload a PDF file or directly write or paste your text in this section. Whenever you’re ready, just click “Summarize”. Your summary will come out within a minute!"
                required
                ></textarea>

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
                    <button id="summarize-button" class="submit__button btn" type="submit">Summarize</button>
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
                    <button id="save-button" class="save__button btn" type="submit">Save to library</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-container container">
        <div class="section-header">
          <h1 class="section-title">Frequently Asked Questions</h1>
          <p>Here are the most asked question by our user</p>
        </div>

        <ul class="faq-list">
          <li>
            <div class="faq-item__title">
              <h2>What is AI Summarizer?</h2>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <p class="faq-item__body hidden">AI Summarizer is an artificial intelligence-powered tool that helps you condense long texts into shorter and easy-to-understand versions.</P>
          </li>

          <li>
            <div class="faq-item__title">
              <h2>Can i summarize PDFs or only plain text?</h2>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <p class="faq-item__body hidden">You can upload documents in formats like PDF or simply paste plain text into the input field.</P>
          </li>

          <li>
            <div class="faq-item__title">
              <h2>Are the summaries 100% accurate?</h2>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <p class="faq-item__body hidden">AI Summarizer is designed to provide relevant and logical summaries, but we recommend reviewing the output to ensure contextual accuracy.</P>
          </li>

          <li>
            <div class="faq-item__title">
              <h2>Can i save my summaries for later?</h2>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <p class="faq-item__body hidden">Yes. Your summaries are saved in your personal library so you can revisit and manage them anytime.</P>
          </li>

          <li>
            <div class="faq-item__title">
              <h2>Does Quibly store my uploaded data?</h2>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <p class="faq-item__body hidden">Yes. Your input and generated summaries are stored securely in your personal account library for future access. We prioritize user privacy and data security.</P>
          </li>
        </ul>
      </section>

      <section class="cta-container"></section>
    `;
  }

  async afterRender() {}
}
