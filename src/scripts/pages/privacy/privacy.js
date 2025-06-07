export function renderPrivacyPolice() {
  const container = document.createElement("div");
  container.className = "container";

  container.innerHTML = `
    <section class="privacy">
        <div class="privacy-text">
            <div class="title-privacy">
                <h2>Privacy Policy</h2>
            </div>

            <br />
            <p>Last updates : 13/05/25</p>

            <br />
            <p>This Privacy Policy describes how Quibly ("we", "us", or "our") collects, uses,
                and shares personal information when you use our website [www.quibly.com] (the "Site").
                By accessing or using the Site, you agree to the terms of this Privacy Policy. </p>

            <br />

            <h3>Information We Collect</h3>

            <br />
            <p>We may collect certain information automatically when you visit our Site, including:</p>
            <p>• Log Files: Our servers automatically record certain information when you access the Site,
                including your IP address, browser type, referring/exit pages, and the date/time of your visit.</p>

            <br />
            <h3>How We Use Your Information</h3>

            <br />
            <p>We may use the information we collect for various purposes, including:</p>

            <br />
            <p>• Personalization: To personalize your experience on the Site and to provide you with tailored content
                and advertisements.</p>
            <p>• Service Improvement: To analyze trends, track user movements, and improve the functionality and
                performance of the Site.</p>

            <br />
            <h3>Sharing Information</h3>

            <br />
            <p>Your data won't be transferred, used, or sold by any third party, regardless of:</p>
            <p>• Google Scholar</p>

            <br />
            <h3>Acceptance of this Policy</h3>

            <br />
            <p>By using our Site, you indicate your acceptance of this Privacy Policy. If you do not agree with this
                Privacy Policy, please do not use our Site.</p>

            <br />

            <h3>Third Party Services </h3>

            <br />
            <p>We may use third-party services, such as analytics providers and data sources, which may also collect
                information about your online
                activities through cookies and similar technologies. These third parties have their own privacy policies
                that govern the use of your information.</p>

            <br />
            <h3>Data Security </h3>

            <br />
            <p>We take reasonable steps to protect the security of your personal information from unauthorized access,
                disclosure, or alteration. However,
                no method of transmission over the internet or electronic storage is 100% secure.</p>
        </div>
    </section>
  `;

  return container;
}
