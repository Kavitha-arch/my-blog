import BlogLayout from "../../BlogLayout";
import Sidebar from "@/app/components/Sidebar";

export default function VerbalExcessReflectionPage() {
  return (
    <BlogLayout>
      <h1>When Alignment Is Enough</h1>
      <h2>Anamika reflects...</h2>
      <p>
        I used to think integrity required staying in conversations until
        everything felt resolved. Over time, I learned that clarity and
        completion are not the same thing.
      </p>

      <Sidebar title="What does “Integrity doesn’t require endless engagement. It requires alignment” actually mean?">
        <p>
          Integrity is not about staying in conversations until everyone agrees.
          It’s about <strong>internal consistency</strong> — my thoughts, words,
          and actions pointing in the same direction.
        </p>
        <p>
          Once alignment is achieved, continued engagement becomes optional,
          not mandatory.
        </p>
      </Sidebar>

      <Sidebar color="red" title="How does this relate to manasā vācā karmaṇā?">
        <p>
          <em>Manasā vācā karmaṇā</em> points to alignment of:
        </p>
        <ul>
          <li><strong>Mind</strong> — what I think</li>
          <li><strong>Speech</strong> — what I say</li>
          <li><strong>Action</strong> — what I do</li>
        </ul>
        <p>
          Integrity exists when these three are unified. The tradition does
          not require repetition, persuasion, or external validation.
        </p>
      </Sidebar>

      <Sidebar title="If I already speak what I think and do, why talk about “verbal excess”?">
        <p>
          Verbal excess does not mean honest or clear speech.
          It means <strong>continuing to speak in order to make others align</strong>,
          after I am already aligned myself.
        </p>
        <p>
          The issue is not truth. It’s <strong>over-effort</strong>.
        </p>
      </Sidebar>

      <Sidebar color="red" title="Is trying to get others aligned wrong?">
        <p>
          No. Offering clarity is reasonable.
        </p>
        <p>
          The problem begins when the effort shifts from
          <strong> expression </strong> to <strong> conversion </strong>.
        </p>
        <p>
          Alignment cannot be transferred. I can explain my position,
          but I cannot install coherence in someone else.
        </p>
      </Sidebar>

      <Sidebar title="What is an “energy leak” in this context?">
        <p>An energy leak happens when:</p>
        <ul>
          <li>I repeat the same point in different words</li>
          <li>I over-explain intent, tone, or context</li>
          <li>The outcome stops improving despite more effort</li>
        </ul>
        <p>
          My nervous system usually recognizes this mismatch
          before my mind does.
        </p>
      </Sidebar>

      <Sidebar color="red" title="Does integrity require making things right at all costs?">
        <p>
          No. Integrity asks:
          <em> “Am I aligned?”</em>
        </p>
        <p>
          It does not ask:
          <em> “Did everyone understand, agree, or approve?”</em>
        </p>
        <p>Agreement is not an ethical requirement.</p>
      </Sidebar>

      <Sidebar title="How do I know when to stop engaging?">
        <blockquote>
          <strong>
            “Is my next sentence adding new truth, or just more energy?”
          </strong>
        </blockquote>
        <p>
          If it’s only energy, stopping isn’t avoidance.
          It’s <strong>completion</strong>.
        </p>
      </Sidebar>



      <Sidebar color="red" title="Why is this especially hard for people with strong integrity?">
        <p>Because they tend to:</p>
        <ul>
          <li>value coherence deeply</li>
          <li>assume good faith longer</li>
          <li>feel unsettled by misalignment</li>
        </ul>
        <p>
          This often leads to engagement past the point of usefulness.
        </p>
      </Sidebar>

      <Sidebar title="Core takeaway">
        <blockquote>
          <strong>Alignment is my responsibility. Agreement is not.</strong>
        </blockquote>
        <p>
          Or more simply:
        </p>
        <blockquote>
          <strong>“My job is to be clear, not to be convincing.”</strong>
        </blockquote>
      </Sidebar>
    </BlogLayout>
  );
}
