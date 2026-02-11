import Image from "next/image";
import BlogLayout from "../BlogLayout"; 
import { steps } from "./steps";
import Link from "next/link";

export default function AmygdalaPost() {
  return (
    <BlogLayout>
        <h1 className="page-title">
            Threat-Sensitive Amygdala
          </h1>
      <h2>Sequence: You read a message that angers you</h2>

      {/* Brain image */}
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Image
          src="/images/brain/anger.png" // adjust extension if .jpg or .svg
          alt="Brain diagram"
          width={600} // desired width
          height={400} // desired height
          priority // optional: loads image faster
        />
      </div>

      {steps.map((step) => (
        <section key={step.id} id={step.id}>
          <h3>{step.title}</h3>
          {step.body}
          <hr />
        </section>
      ))}

      {/* Optional CTA button at the bottom */}
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Link href="/blog/brain/rulebase">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Visit RuleBase
          </button>
        </Link>
      </div>

    </BlogLayout>
  );
}
