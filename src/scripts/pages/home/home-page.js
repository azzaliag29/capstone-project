export default class HomePage {
  async render() {
    return `
      <section class="jumbotron-container">
        <div class="jumbotron-wrapper">
          <div class="jumbotron-content">
            <div class="jumbotron-text">
              <h1>Summarize Long Text In a <span><i>Flash</i><i class="fa-solid fa-bolt"></i></span></h1>
              <p>Powered by AI, Quibly helps you turn long content into a brief summary. Whether you're working on an essay, blog, or research article, our tool is ready to assist you.</p>
              <a href="#/summarize" class="primary-btn">Try Quibly Now</a> 
            </div>
          </div>
        </div>
      </section>

      <section class="about-container">
        <div class="about-content">
          <div class="about-text">
            <h2>What is Quibly?</h2>
            <p>Quibly is a web-based platform designed to help users understand long documents more efficiently. 
              By using intelligent text processing technology, Quibly allows you to transform text or documents 
              into shorter, more concise, and easier-to-understand summaries, while also automatically extracting 
              important keywords to help you discover relevant topics.
            </p>
          </div>
          <a href="#/about" class="primary-btn">Read More</a> 
        </div>
      </section>

      <section class="tutorial-container">
        <div class="section-header">
          <h2 class="section-title">How Our AI Summarizer Work</h2>
        </div>

        <div class="tutorial-content">
          <div class="tut-left-col">
            <div class="tut-top">
              <h3>1. Input your text</h3>
              <p>Upload a PDF file or directly write or paste your text in this section to start summarizing.</p>
            </div>
            <div class="tut-buttons">
              <div class="tut-buttons-left">
                <p><i class="fa-solid fa-arrow-up-from-bracket"></i></p>
              </div>
              <div class="tut-buttons-right">
                <p class="primary-btn">Summarize</p>
              </div>
            </div>
          </div>

          <div class="tut-right-col">
            <div class="tut-top">
              <h3>2. Get your summary</h3>
              <p>Once you click the button, your summary and keywords will appear instantly.</p>
            </div>
            <div class="tut-buttons">
              <div class="tut-buttons-left">
                <p><i class="fa-solid fa-download"></i></p>
                <p><i class="fa-solid fa-copy"></i></p>
              </div>
              <div class="tut-buttons-right">
                <p class="primary-btn">Open Library</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial-container global-container">
        <div class="testimonial-content">
          <div class="section-header">
            <h2 class="section-title">What They Say About Us</h2>
          </div>

          <div class="container text-center">
            <div class="row align-items-start gy-5">
              <div class="col">
                <div class="card custom-card mx-auto">
                  <div class="card-body d-flex flex-column align-items-center justify-content-center text-center">
                    <img src="images/pfp1.jpg" class="img-thumbnail profile-img mb-3" alt="...">
                    <h3 class="card-title text-white fs-4">Kevin Rinaldi</h3>
                    <p class="card-text fs-6 text-white">“The summaries are clear and the related paper search is spot on.”</p>
                    <img src="images/rating-image.webp" class="img-fluid rating-img" alt="...">
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card custom-card mx-auto">
                  <div class="card-body d-flex flex-column align-items-center justify-content-center text-center">
                    <img src="images/pfp2.jpg" class="img-thumbnail profile-img mb-3" alt="..."> 
                    <h3 class="card-title text-white fs-4">Sarah Lim</h3>
                    <p class="card-text fs-6 text-white">“Love how easy it is to get key ideas from complex academic texts!”</p>
                    <img src="images/rating-image.webp" class="img-fluid rating-img" alt="...">
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card custom-card mx-auto">
                  <div class="card-body card-body d-flex flex-column align-items-center justify-content-center text-center">
                    <img src="images/pfp3.jpg" class="img-thumbnail profile-img mb-3" alt="...">
                    <h3 class="card-title fs-4 text-white">Dina Marquez</h3>
                    <p class="card-text fs-6 text-white">“Quibly helps me understand so much faster. It’s a must-have for students!”</p>
                    <img src="images/rating-image.webp" class="img-fluid rating-img" alt="Star rating">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {}
}
