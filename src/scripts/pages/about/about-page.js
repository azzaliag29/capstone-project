export default class AboutPage {
  async render() {
    return `
      <div class="about-page">
        <section class="about-container">
          <div class="about-header">
            <h1>About Quibly</h1>
            <p>Quibly is a web-based platform that simplifies long documents by generating concise summaries. it also extracts key keywords,
            helping users quickly grasp essentials information. These keywords are linked to Google Scholar for further researxch, making Quibly an ideal tool for students, researcher,and anyone looking to read more efficienty.</p>
          </div>

          <div class="about-content">
            <h2>Our Mission</h2>
            <p>At Quibly, our mission is to empower users to read smarter and faster. We aim to simplify complex documents, providing concise summaries and key insights to enhance understanding. By combining advanced text processing with easy access to further research, we help students, researchers, and professionals stay informed and efficient in their reading journey.</p>
          </div>

         <div class="simplify-text-container">
  <h1>Let’s Simplify Your Text</h1>
  <p>Quickly transform long content into clear and concise summaries</p>
 <!-- Image added below the text -->
  <img src="images/Group 25.png" alt="Simplify Text" class="simplify-image">
  <div class="border-container">
       <a href="#">Try Now For Free</a>
  </div>
</div>
    `;
  }

  async afterRender() {
    console.log("AboutPage Rendered!");
  }
}
