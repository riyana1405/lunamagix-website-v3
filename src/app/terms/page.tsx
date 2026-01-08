import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Lunamagix Futuretech Private Limited",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Terms of Service
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          Last updated: January 2026
        </p>

        <div className="prose prose-purple mt-12 max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by {siteConfig.name}
            (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these
            Terms of Service. If you do not agree, please do not use our
            services.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            We provide AI-powered education technology, assistive technology,
            and healthcare solutions, including but not limited to:
          </p>
          <ul>
            <li>Education management platforms (LunaLearn)</li>
            <li>3D presentation tools (LunaViz)</li>
            <li>Campus security solutions (LunaWatch)</li>
            <li>Free neurodevelopmental screening tools (Lumina Screen)</li>
            <li>Assistive technology devices and software</li>
          </ul>

          <h2>3. User Accounts</h2>
          <p>
            Some services may require account registration. You are responsible
            for maintaining the confidentiality of your account credentials and
            for all activities under your account.
          </p>

          <h2>4. Screening Tool Disclaimer</h2>
          <p>
            <strong>
              Our free neurodevelopmental screening tool (Lumina Screen) is for
              informational purposes only and is NOT a medical diagnosis.
            </strong>
          </p>
          <ul>
            <li>
              Results should be discussed with qualified healthcare
              professionals
            </li>
            <li>
              The tool is designed to identify areas that may benefit from
              professional evaluation
            </li>
            <li>We do not provide medical advice, diagnosis, or treatment</li>
            <li>
              Always consult with qualified professionals for medical concerns
            </li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services are owned
            by {siteConfig.name} and are protected by intellectual property
            laws. You may not reproduce, distribute, or create derivative works
            without our permission.
          </p>

          <h2>6. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt our services</li>
            <li>Upload malicious code or content</li>
            <li>Impersonate others or misrepresent your affiliation</li>
          </ul>

          <h2>7. Payment Terms</h2>
          <p>
            For our &quot;Pay What You Like&quot; model, you agree to pay the amount you
            determine is fair for the value received. For premium features and
            hardware products, specific pricing and payment terms will be
            provided at the time of purchase.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {siteConfig.name} shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of our services.
          </p>

          <h2>9. Warranty Disclaimer</h2>
          <p>
            Our services are provided &quot;as is&quot; without warranties of any kind,
            either express or implied. We do not warrant that our services will
            be uninterrupted, error-free, or completely secure.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless {siteConfig.name} and its
            officers, directors, employees, and agents from any claims, damages,
            or expenses arising from your use of our services or violation of
            these terms.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify users of material changes by posting the updated terms on our
            website. Continued use constitutes acceptance of the revised terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India. Any disputes
            shall be subject to the exclusive jurisdiction of the courts in
            Madurai, Tamil Nadu.
          </p>

          <h2>13. Termination</h2>
          <p>
            We may terminate or suspend your access to our services at any time,
            without prior notice, for conduct that we believe violates these
            Terms or is harmful to other users or us.
          </p>

          <h2>14. Contact Information</h2>
          <p>For questions about these Terms, please contact us at:</p>
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
