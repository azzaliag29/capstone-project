export default class LibraryPage {
  async render() {
    return `
      <section class="library-container container">
        <div class="section-header">
          <h1 class="section-title">My Library</h1>
          <p>All of the saved summary will be stored in here</p>
        </div>

        <div class="library-list">
          <div class="library-item">
            <div class="library-item__illustration">
              <img src="images/file-illustration.png" alt="File illustration">
            </div>

            <div class="library-item__detail">
              <div class="library-item__header">
                <h2 class="library-item__title">Article-1.pdf</h2>
                <div class="library-item__desc">
                  <p>This study aimed to investigate how different light intensities affect the growth of mung bean plants. The researchers conducted an experiment using three light treatments: full light, partial light, and no light. Results showed that plants exposed...</p>
                </div>
              </div>

              <div class="library-item__footer">
                <p class="library-item__date">Saved at <span>May 5 2025</span></p>
                <div class="library-item__buttons">
                  <a href="#/library/id" class="open-button"><i class="fa-solid fa-chevron-right"></i></a>
                  <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>

          <div class="library-item">
            <div class="library-item__illustration">
              <img src="images/file-illustration.png" alt="File illustration">
            </div>

            <div class="library-item__detail">
              <div class="library-item__header">
                <h2 class="library-item__title">Article-1.pdf</h2>
                <div class="library-item__desc">
                  <p>This study aimed to investigate how different light intensities affect the growth of mung bean plants. The researchers conducted an experiment using three light treatments: full light, partial light, and no light. Results showed that plants exposed...</p>
                </div>
              </div>

              <div class="library-item__footer">
                <p class="library-item__date">Saved at <span>May 5 2025</span></p>
                <div class="library-item__buttons">
                  <a href="#/library/id" class="open-button"><i class="fa-solid fa-chevron-right"></i></a>
                  <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gradient-image"></div>
      <section>
    `;
  }

  async afterRender() {}
}

// Kalau data sudah bisa di fetch, hapus <div class="library-item"> dan childnya, diganti pakai generateLibraryItem()