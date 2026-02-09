import BlogLayout from "../BlogLayout"; 
import { steps } from "./steps";

export default function AmygdalaPost() {
  return (
    <BlogLayout>
      <h2>Sequence: You read a message that angers you</h2>

      {steps.map((step) => (
        <section key={step.id} id={step.id}>
          <h3>{step.title}</h3>
          {step.body}
          <hr />
        </section>
      ))}
    </BlogLayout>
  );
}
