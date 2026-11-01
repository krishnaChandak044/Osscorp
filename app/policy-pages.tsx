import React from "react";

type PolicyKind = "privacy" | "disclaimer";

const policies = {
    privacy: {
        title: "Privacy policy",
        intro: "A clear note on what happens when you contact OSSCORP through this website.",
        sections: [
            {
                title: "Information you provide",
                content: "When you submit a project enquiry, we receive the information you choose to share, such as your name, work email, phone number, company, service of interest, project location, expected timeline and project details. Please avoid including passwords, financial account details or other sensitive personal information.",
            },
            {
                title: "How we use it",
                content: "We use enquiry details to understand your requirements, respond to you, assess a potential project and maintain relevant business records. We do not sell personal information submitted through this form.",
            },
            {
                title: "Form processing",
                content: "The enquiry form is submitted through Web3Forms, which processes the information so it can be delivered to OSSCORP. Its handling of submitted information is also subject to Web3Forms’ own privacy terms. The form transmits data over HTTPS.",
            },
            {
                title: "Retention and security",
                content: "We retain enquiry information for as long as needed to respond, manage a business relationship and meet applicable record-keeping needs. We take reasonable steps to protect it, though no method of online transmission or storage can be guaranteed completely secure.",
            },
            {
                title: "Your choices and questions",
                content: "You may contact us to ask about, correct or request deletion of information you have sent, subject to applicable record-keeping requirements. For privacy questions, email osscorp21@gmail.com or call +91 9892135332.",
            },
            {
                title: "Updates to this policy",
                content: "We may update this page when our website or enquiry practices change. The latest version will be published here.",
            },
        ],
    },
    disclaimer: {
        title: "Disclaimer",
        intro: "Website information is provided to introduce OSSCORP and its technical services. Project work is governed by its agreed scope and contract.",
        sections: [
            {
                title: "General information",
                content: "The material on this website is for general informational purposes. While OSSCORP aims to keep it accurate and current, descriptions, capabilities and other website content may change and are not a substitute for project-specific assessment or written technical advice.",
            },
            {
                title: "Project requirements",
                content: "Every deployment depends on site conditions, applicable standards, client requirements, permits, equipment and other project-specific factors. No statement on this website guarantees a particular result, schedule, availability or performance. Confirm all requirements and deliverables with OSSCORP before relying on them for a project decision.",
            },
            {
                title: "Third-party names and references",
                content: "Company names, client names, trademarks and project references belong to their respective owners and are used only to identify relevant work or relationships. Their appearance does not imply endorsement unless expressly stated. External websites are operated by third parties; OSSCORP is not responsible for their content or practices.",
            },
            {
                title: "Limitation",
                content: "To the extent permitted by law, OSSCORP is not responsible for loss arising solely from reliance on general website information or temporary unavailability of this website. Nothing in this notice limits rights or responsibilities that cannot lawfully be excluded.",
            },
            {
                title: "Contact",
                content: "For clarification about any information on this website, contact OSSCORP at osscorp21@gmail.com or +91 9892135332.",
            },
        ],
    },
} satisfies Record<PolicyKind, { title: string; intro: string; sections: { title: string; content: string }[] }>;

export default function PolicyPage({ kind }: { kind: PolicyKind }) {
    const policy = policies[kind];

    return (
        <div className="policy-page">
            <a className="skip" href="#policy-content">Skip to content</a>
            <header className="site-header policy-header">
                <a href="/" className="brand" aria-label="Osscorp home">
                    <img src="/logo/image.png" alt="Osscorp" />
                    <span>OSSCORP<small>ONSHORE &amp; OFFSHORE TECHNICAL SERVICES</small></span>
                </a>
                <nav aria-label="Main navigation">
                    <a href="/#about">About us</a>
                    <a href="/#expertise">Our expertise</a>
                    <a href="/#clients">Our clients</a>
                    <a href="/#leadership">Leadership</a>
                </nav>
                <a className="nav-cta" href="/#contact">Let’s talk <span aria-hidden="true">↗</span></a>
            </header>

            <main id="policy-content" className="policy-main">
                <div className="eyebrow">OSSCORP · ONSHORE &amp; OFFSHORE TECHNICAL SERVICES</div>
                <h1>{policy.title}</h1>
                <p className="policy-intro">{policy.intro}</p>
                <p className="policy-updated">Last updated: 1 November 2026</p>
                <div className="policy-sections">
                    {policy.sections.map((section, index) => (
                        <section key={section.title}>
                            <span className="policy-number">{String(index + 1).padStart(2, "0")}</span>
                            <div>
                                <h2>{section.title}</h2>
                                <p>{section.content}</p>
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <footer>
                <a className="footer-brand" href="/" aria-label="Osscorp — home">
                    <img src="/logo/image.png" alt="" />
                    <span>
                        <strong>OSSCORP</strong>
                        <small>ONSHORE &amp; OFFSHORE TECHNICAL SERVICES</small>
                        <em>30+ YEARS OF TECHNICAL EXCELLENCE</em>
                    </span>
                </a>
                <div>
                    <a href="/#about">About</a>
                    <a href="/#expertise">Expertise</a>
                    <a href="/#leadership">Leadership</a>
                    <a href="/#contact">Contact</a>
                    <a href="/privacy-policy">Privacy policy</a>
                    <a href="/disclaimer">Disclaimer</a>
                </div>
                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Osscorp. All rights reserved.</span>
                    <span>ONSHORE &amp; OFFSHORE TECHNICAL SERVICES</span>
                    <a href="#policy-content">Back to top ↑</a>
                </div>
            </footer>
        </div>
    );
}
