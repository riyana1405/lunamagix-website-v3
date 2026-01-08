import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Lunamagix Futuretech Private Limited",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Last updated: January 2026
        </p>

        <div className="prose prose-purple mt-12 max-w-none">
          <h2>1. Introduction</h2>
          <p>
            {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide, including:</p>
          <ul>
            <li>Name and contact information (email, phone number)</li>
            <li>Institution or organization name</li>
            <li>Professional role or relationship to students</li>
            <li>Inquiry details and communications</li>
          </ul>

          <h3>Assessment Tool Data</h3>
          <p>
            When using our free screening tool, we collect responses to
            questionnaires and, with explicit consent, optional webcam-based
            observations. This data is:
          </p>
          <ul>
            <li>Encrypted in transit and at rest</li>
            <li>Never sold or shared with third parties</li>
            <li>Deletable upon request</li>
            <li>Used solely for generating your personalized report</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            We automatically collect certain information when you visit our
            website, including IP address, browser type, device information, and
            usage patterns through privacy-focused analytics.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send relevant communications (with consent)</li>
            <li>Generate screening reports</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Protection for Children</h2>
          <p>
            We take special care with information related to children. Our
            screening tool is designed for parents and educators to use on
            behalf of children. We:
          </p>
          <ul>
            <li>Never directly collect information from children</li>
            <li>
              Require parental or guardian consent for any child-related data
            </li>
            <li>Apply enhanced security measures to all child-related data</li>
            <li>Comply with COPPA, FERPA, and relevant child protection laws</li>
          </ul>

          <h2>5. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share information
            with:
          </p>
          <ul>
            <li>Service providers who assist in operating our services</li>
            <li>
              Legal authorities when required by law or to protect our rights
            </li>
            <li>
              Partners with your explicit consent (e.g., connecting you with
              specialists)
            </li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data, including encryption, access controls, and
            regular security assessments.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes
            outlined in this policy or as required by law. Screening tool data
            can be deleted immediately after you receive your report upon
            request.
          </p>

          <h2>9. International Data Transfers</h2>
          <p>
            Your data may be processed in India and other countries where our
            service providers operate. We ensure appropriate safeguards are in
            place for international transfers.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by posting the new policy on our website
            with an updated date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <address className="not-italic">
            {siteConfig.name}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city} - {siteConfig.address.postalCode}
            <br />
            {siteConfig.address.state}, {siteConfig.address.country}
            <br />
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </address>
        </div>
      </div>
    </div>
  );
}
