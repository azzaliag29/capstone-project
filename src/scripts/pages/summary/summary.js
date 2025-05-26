export default class SummaryPage {
  constructor() {
    this.content = 'This study aimed to investigate how different light intensities affect the growth of mung bean plants...'; // Default content
  }

  async render() {
    return `
      <section class="summary-page">
        <div class="summary-container">
          <!-- Article Title Section -->
          <div class="summary-header">
            <h1>Article-1.pdf</h1>
          </div>

          <!-- Keywords Section with Border around the Keywords -->
          <div class="keywords-container">
            <div class="keywords">
              <button class="keyword-btn">Keyword 1</button>
              <button class="keyword-btn">Keyword 2</button>
              <button class="keyword-btn">Keyword 3</button>
            </div>
          </div>

          <!-- Content Section with Border (Dynamic Content Placeholder + Action Buttons) -->
          <div class="summary-content">
            <p id="content-display">${this.content}</p>

            <!-- Action Buttons Container (Download, Copy, Edit, Delete) -->
            <div class="actions-container-left">
              <button class="btn download-btn" id="download-btn">Download</button>
              <button class="btn copy-btn" id="copy-btn">Copy</button>
            </div>

            <div class="actions-container-right">
              <button class="btn save-btn" id="save-btn">Save</button>
              <button class="btn delete-btn" id="delete-btn-final">Delete</button>
            </div>
          </div>
        </div>
           <div class="cta-container">
          <div class="simplify-text-container">
            <div class="simplify-text-container__left-col">
              <h3>Let’s Simplify Your Text</h3>
              <p>Quickly transform long content into clear and concise summaries. Ideal for essays, blogs, or research articles to help you focus on what matters.</p>
              <a href="#/summarize" class="btn">Try Now For Free</a>
            </div>
            <div class="simplify-text-container__right-col">
              <img src="images/cta-image.png" alt="Simplify Text" class="simplify-image">
            </div>
      </section>
    `;
  }

  async afterRender() {
    // Ensure event listeners are added correctly after the page is rendered
    document.getElementById("download-btn")?.addEventListener("click", this.downloadContent.bind(this));
    document.getElementById("copy-btn")?.addEventListener("click", this.copyContent.bind(this));
    document.getElementById("save-btn")?.addEventListener("click", this.saveContent.bind(this));
    document.getElementById("delete-btn-final")?.addEventListener("click", this.deleteContent.bind(this));
  }

  // Download content as a text file
  downloadContent() {
    const content = document.getElementById('content-display').textContent;
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "article.txt"; // Name of the downloaded file
    link.click();
  }

  // Copy content to clipboard
  copyContent() {
    const content = document.getElementById('content-display').textContent;
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    }).catch((err) => {
      console.error('Error copying text: ', err);
    });
  }

  // Save the content (currently the same as the edit function)
  saveContent() {
    alert('Content saved!');
  }

  // Delete or reset the content
  deleteContent() {
    this.content = '';
    document.getElementById('content-display').textContent = 'Content deleted';
  }
}
