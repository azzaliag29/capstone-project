export default class TermsPage {
  async render() {
    return `
      <section class="terms global-container">
        <div class="terms-text">
          <div class="title-terms">
            <h2>Terms of Use</h2>
          </div>

          <br />
          <h3>Our Services</h3>

          <br />
            <p>We help people understand long documents more quickly and easily.
              Seeing the need for concise yet accurate information, we were inspired
              to build an AI model capable of automatic summarization. With the additional
              feature of searching for similar documents, we hope this web not only summarizes
              but also enriches users' insights effectively. This idea was born from discussions
              and a desire to provide a real solution amidst the overwhelming flow of information today. </p>

          <br />

          <h3>Using Quibly</h3>

          <br />
          <p>a. Who can use “Quibly”</p>
          <p>You may use “Quibly” only if you can legally form a binding contract with “Quibly”,
            and only in compliance whit these Terms and all applicable laws. When you create account,
            you must provide us with accurate and complete information. Any use or access by anyone
            under the age of 13 is not allowed.</p>

          <br />
          <p>b. Our license to you</p>
          <p>Subject to these Terms and our policies including our Community guidelines .</p>

          <br />
          <p>c. Commercial use of “Quibly”</p>
          <p>If you want to use “Quibly” for commercial purposes you must create a business account and
            agree to our Business Terms of Service.</p>

          <br />
          <p>d. User responsibility</p>
          <p>Users must not abuse the service, such as sending spam, misusing the system, or uploading
            illegal content.Users are responsible for the content they upload or input into the system (e.g., the
            text they summarize).</p>

          <p>Users are responsible for maintaining the security of their own accounts.</p>

          <br />
          <p>e. General prohibitions</p>
          <p>Reverse engineering, system exploitation, etc. are not allowed.</p>

          <br />

          <p>Latest date of modifications</p>
          <p>This privacy policy was last updated on 13th Mei, 2025</p>

        </div>
      </section>
    `;
  }

  async afterRender() {}
}
