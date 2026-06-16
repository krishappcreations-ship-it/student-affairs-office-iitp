import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Student Affairs Office demo site handles information submitted through its contact form.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold text-primary-deep">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">
        Demo notice: this is a student project (DeployIITP) and uses dummy data.
      </p>

      <div className="mt-8 space-y-5 text-ink/90">
        <p>
          This website is a demonstration built for the DeployIITP event. It is
          not an official IIT Patna service and is not used to provide real
          student support.
        </p>
        <h2 className="font-serif text-xl font-semibold">What we collect</h2>
        <p>
          If you use the contact form, we process the name, email, organisation,
          subject and message you submit, solely to respond to your enquiry.
        </p>
        <h2 className="font-serif text-xl font-semibold">How it is used</h2>
        <p>
          Submissions are validated on the server and are not sold or shared with
          third parties. No tracking or advertising cookies are set.
        </p>
        <h2 className="font-serif text-xl font-semibold">Contact</h2>
        <p>
          For questions about this notice, use the contact page. Replace this
          text with an official policy before any real deployment.
        </p>
      </div>
    </article>
  );
}
