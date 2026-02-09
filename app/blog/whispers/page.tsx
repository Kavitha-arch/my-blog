import Link from "next/link";
import BlogLayout from "../BlogLayout";
import styles from "../Dialoge.module.css";  
import Image from "next/image";

export default function TransparencyPost() {
    return (
        <BlogLayout>
            <h1>Whispers under the ancient Tree</h1>
            {/* Brain image */}
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
                <Image
                    src="/images/brain/whispers_sage.png" // adjust extension if .jpg or .svg
                    alt="Whisers under the ancient Tree diagram"
                    width={600} // desired width
                    height={400} // desired height
                    priority // optional: loads image faster
                />
            </div>
            <h2>There once lived a woman who valued transparency above all else</h2>
             <div className={styles.question}>
                She confided in a wise mentor about a recurring dilemma, and he summarized it thoughtfully:
            </div>
            <p>
                Some disagreements don’t feel like simple differences of opinion — they feel like battles.
                Not because voices are raised, but because something deeper is being challenged.
            </p>
            <p>
                This usually happens when honesty, transparency, or process is missing.
                And when you’re the only one who seems to care, the emotional weight can feel outsized.
            </p>

            <h2>Why Small Things Can Trigger Big Emotions</h2>

            <p>
                Imagine a situation where a person in authority quietly introduces a fee — no announcement,
                no explanation of who approved it, no written documentation. The amount is small.
                Most people are busy. They shrug and move on.
            </p>

            <p>
                But for some of us, the issue isn’t the money. It’s the lack of transparency.
            </p>

            <h2>Why This Situation Hits So Hard</h2>

            <h3>1. It’s not a rule break — it’s a precedent</h3>
            <p>
                When small, unannounced actions go unchallenged, they quietly set a standard.
                They teach what is acceptable. For someone who values integrity and process, this feels dangerous — not trivial.
            </p>

            <h3>2. Silence feels like complicity</h3>
            <p>
                When others stay quiet because they are busy or indifferent, it can feel invalidating.
                Even without intent, the silence sends a message: <em>this doesn’t matter enough to question</em>.
            </p>

            <h3>3. You’re forced into an impossible position</h3>
            <p>
                Speak up, and risk being labeled difficult or overly sensitive. Stay quiet, and feel like you’re betraying your own values.
                That internal conflict is exhausting — and it’s a major source of the anger that follows.
            </p>

            <h2>Why Disagreements Feel Personal</h2>

            <ul>
                <li>Beliefs are tied to who we are</li>
                <li>The nervous system treats disagreement like threat</li>
                <li>Past experiences of being dismissed resurface</li>
                <li>“Losing” can unconsciously feel unsafe</li>
            </ul>

            <h2>Reframing the Conversation</h2>

            <blockquote>
                <p><strong>This is not a moral battle. It’s a request for clarity.</strong></p>
            </blockquote>

            <p>
                When the goal is clarity rather than winning, the tone changes.
                You’re no longer accusing — you’re asking for documentation.
            </p>

            <blockquote>
                <p>“Can you clarify when this charge was approved, by whom, and where it’s documented?”</p>
            </blockquote>

            <h2>When to Push — and When to Disengage</h2>

            <h3>Push if:</h3>
            <ul>
                <li>There is a paper trail that should reasonably exist</li>
                <li>The action sets a precedent, even if it’s small</li>
                <li>You can state the issue calmly and clearly</li>
                <li>There is a concrete next step (documentation, confirmation, timeline)</li>
            </ul>

            <h3>Disengage if:</h3>
            <ul>
                <li>You are repeating the same request</li>
                <li>Responses deflect instead of clarify</li>
                <li>You feel the urge to convince others to care</li>
                <li>The emotional cost outweighs the likely outcome</li>
            </ul>

            <p>
                A useful rule: <strong>You only owe a request for clarity once.</strong>
                After that, silence becomes information.
            </p>

            <h2>Processing Anger So It Doesn’t Linger</h2>

            <h3>1. Name the real violation</h3>
            <p>
                Not the behavior — the value breach. Examples: Transparency was bypassed, Authority was exercised without consent, Process was skipped.
            </p>

            <h3>2. Take one contained action</h3>
            <p>
                Send one clear message. Ask once for documentation. Then acknowledge:
            </p>
            <blockquote>
                <p>“I’ve acted in alignment with my values.”</p>
            </blockquote>

            <h3>3. Close the loop intentionally</h3>
            <p>
                Otherwise the mind keeps reopening the issue.
            </p>
            <blockquote>
                <p>“I’ve done my part. The rest isn’t mine to carry.”</p>
            </blockquote>

            <h3>4. Discharge the physical energy</h3>
            <p>
                Anger lives in the body. Walk, stretch, shake out tension, breathe deeply — anything that signals completion.
            </p>

            <h2>A Simple Reminder</h2>
            <blockquote>
                <p>
                    Being the only person asking for honesty in a passive group is isolating — but it doesn’t mean you’re wrong.
                </p>
            </blockquote>

            <p>
                Integrity doesn’t require endless engagement. It requires alignment. Sometimes the most grounded response is knowing when to speak — and when to step back without guilt.
            </p>
            <div>
                {/* Question */}
                <div className={styles.question}>
                    She nods thoughtfully and says: <br />
                    “I get all of this in theory, but the moment it actually happens, I feel my anger rise.
                    What exactly is going on in my mind?”
                </div>

                {/* Answer / Link */}
                <div className={styles.answer}>
                    <Link href="/blog/brain">
                        The mentor smiles and replies: let’s explore what’s happening inside your mind…
                    </Link>
                </div>
            </div>

        </BlogLayout>
    );
}
