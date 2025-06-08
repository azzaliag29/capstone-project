export default class HomePage {
  async render() {
    return `
      <section class="home-page">
        <div class="about-section-container">

          <div class="about-text">
            <h1 class="about-text__title">Summarize Long Text</h1>
            <h2 class="flash"> In a <strong>flash</strong></h2>

            <p class="subtext">
              With Quibly, you can easily turn long content into a brief summary.
              Whether you're working on an essay, blog, or research article, our tool is ready to assist you.
            </p>
          </div>

          <img src="images/iconic-quibly.png" alt="Quibly App Icon" class="about-image-img">
        </div>

        <br />
        <h2 class="what-title">What is Quibly?</h2>
        <p>
          Quibly is a web-based platform designed to help users understand long documents more efficiently.
          By using intelligent text processing technology, Quibly allows you to transform text or documents into shorter,
          more concise,
          and easier-to-understand summaries.
        </p>
        <br />
        <p>In addition to summarizing, Quibly also automatically extracts important keywords from the
          content of the document. These keywords not only help in understanding the core of the reading but can also be
          used to explore
          further references directly on Google Scholar — making it very suitable for students, researchers, or anyone who
          wants to read
          more critically and quickly.
        </p>

        <br />
        <div class="wrapper">
          <div class="v111">Text Summarize</div>
          <div class="v112">Custom Summaries</div>
        </div>
        <br />


        <h1 class="how">How Our AI Summarizer Works</h1>
        <br />
        <div class="step-container">
          <div class="step">
            <p class="v113">1. Input your text</p>
            <p class="v114">Upload a PDF file or directly write or paste your text in this section to start summarizing.</p>

            <div class="row">
              <p class="v115">Upload PDF</p>
              <p class="v116">Summarize</p>
            </div>
          </div>


          <div class="step">
            <p class="v117">2. Get AI - Generated Summary</p>
            <p class="v118">Accurate summary of keyword</p>

            <div class="flow">
              <p class="v119">Download</p>
              <p class="v120">Copy</p>
              <p class="v121">Save to Library</p>
            </div>
          </div>
        </div>


        <div class="try-now-section">
          <button class="v122">Try FREE Now!</button>
        </div>

        <br />
        <div class="testimoni">
          <div class="testimonials">
            <h2 class="v123">What they say about us</h2>
          </div>

          <div class="feedback-container">
            <div class="feedback">
              <p class="v124">From concept to execution, they made it so easy</p>
              <div class="v125"></div>
              <p class="v126">Baymax Petter</p>
            </div>

            <div class="feedback">
              <p class="v127">I am very helped by the existence of Quibly.</p>
              <div class="v128"></div>
              <p class="v129">Vicky</p>
            </div>

            <div class="feedback">
              <p class="v130">This website saves me time in summarizing documents</p>
              <div class="v131"></div>
              <p class="v132">Felix</p>
            </div>
          </div>
      </section>
    `;
  }

  async afterRender() {}
}
