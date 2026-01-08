import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility commitment and statement for Lunamagix Futuretech Private Limited",
};

export default function AccessibilityPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Accessibility Statement
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Last updated: January 2026
        </p>

        <div className="prose prose-purple mt-12 max-w-none">
          <h2>Our Commitment</h2>
          <p>
            {siteConfig.name} is committed to ensuring digital accessibility for
            people with disabilities. We are continually improving the user
            experience for everyone and applying the relevant accessibility
            standards.
          </p>
          <p>
            As a company focused on inclusive education and assistive
            technology, accessibility is not just a compliance requirement — it
            is central to our mission.
          </p>

          <h2>Conformance Status</h2>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG)
            2.2 Level AA. These guidelines explain how to make web content more
            accessible for people with disabilities.
          </p>

          <h2>Accessibility Features</h2>
          <p>Our website includes the following accessibility features:</p>

          <h3>Navigation</h3>
          <ul>
            <li>Skip navigation links to bypass repetitive content</li>
            <li>Consistent navigation across all pages</li>
            <li>Keyboard-accessible menus and interactive elements</li>
            <li>Focus indicators for keyboard navigation</li>
          </ul>

          <h3>Content</h3>
          <ul>
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>Descriptive alt text for all meaningful images</li>
            <li>Sufficient color contrast (4.5:1 for normal text)</li>
            <li>Text resizable up to 200% without loss of functionality</li>
            <li>Clear and simple language</li>
          </ul>

          <h3>Forms</h3>
          <ul>
            <li>Properly labeled form fields</li>
            <li>Clear error identification and suggestions</li>
            <li>Logical tab order</li>
            <li>Adequate touch target sizes (minimum 44x44 pixels)</li>
          </ul>

          <h3>Media</h3>
          <ul>
            <li>Captions for video content</li>
            <li>Transcripts for audio content</li>
            <li>No auto-playing media with sound</li>
          </ul>

          <h3>Preferences</h3>
          <ul>
            <li>Respects user&apos;s reduced motion preferences</li>
            <li>Supports system dark/light mode preferences</li>
            <li>Works with screen readers (tested with NVDA and VoiceOver)</li>
          </ul>

          <h2>Known Limitations</h2>
          <p>
            While we strive for full accessibility, some areas may have
            limitations:
          </p>
          <ul>
            <li>
              Some third-party embedded content may not be fully accessible
            </li>
            <li>
              Legacy PDF documents may not be fully accessible (we are working
              to remediate these)
            </li>
            <li>
              Interactive demos may have limited accessibility features in
              initial releases
            </li>
          </ul>
          <p>
            We are actively working to address these limitations and welcome
            feedback on how to improve.
          </p>

          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you
            encounter any barriers or have suggestions for improvement, please
            contact us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>Subject line: Accessibility Feedback</li>
          </ul>
          <p>We aim to respond to accessibility feedback within 5 business days.</p>

          <h2>Compatibility</h2>
          <p>Our website is designed to be compatible with:</p>
          <ul>
            <li>Modern browsers (Chrome, Firefox, Safari, Edge)</li>
            <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
            <li>Voice recognition software</li>
            <li>Screen magnification software</li>
            <li>Mobile devices and tablets</li>
          </ul>

          <h2>Assessment Approach</h2>
          <p>{siteConfig.name} assessed the accessibility of this website by:</p>
          <ul>
            <li>Self-evaluation using automated testing tools</li>
            <li>Manual testing with assistive technologies</li>
            <li>Review against WCAG 2.2 criteria</li>
          </ul>

          <h2>Formal Complaints</h2>
          <p>
            If you are not satisfied with our response to your accessibility
            feedback, you may escalate your concern to our management team at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
