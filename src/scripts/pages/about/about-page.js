export default class AboutPage {
  async render() {
    return `
      <section class="about-page">
        <div class="about-container">
          <div class="about-header">
            <h1>About Quibly</h1>
            <p>Quibly is a web-based platform that simplifies long documents by generating concise summaries. it also extracts key keywords,
            helping users quickly grasp essentials information. These keywords are linked to Google Scholar for further researxch, making Quibly an ideal tool for students, researcher,and anyone looking to read more efficienty.</p>
          </div>

          <div class="about-content">
            <h2>Our Mission</h2>
            <p>At Quibly, our mission is to empower users to read smarter and faster. We aim to simplify complex documents, providing concise summaries and key insights to enhance understanding. By combining advanced text processing with easy access to further research, we help students, researchers, and professionals stay informed and efficient in their reading journey.</p>
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
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    console.log("AboutPage Rendered!");
  }
}
