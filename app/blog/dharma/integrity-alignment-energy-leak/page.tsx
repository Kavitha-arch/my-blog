import BlogLayout from "../../BlogLayout";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import styles from "../..//Dialoge.module.css";

export default function IntegrityAlignmentBlog() {
  return (
    <BlogLayout>

      <article className="prose prose-neutral dark:prose-invert">

        <div className="max-w-3xl mx-auto px-6 py-2">
          <h1 className="text-3xl font-semibold mb-6">
            A Storm Outside, A Steady Flame Within
          </h1>

          <div className="my-8">
            <Image
              src="/images/brain/steady-flame.png"
              alt="A woman standing steady with a flame inside while a storm rages outside"
              width={900}
              height={600}
              className="rounded-xl shadow-md"
              priority
            />
            <p className="text-center text-sm italic text-gray-600 mt-4">
              The storm did not disappear. I simply stopped letting it define my center.
            </p>
          </div>


          <p style={{ textAlign: "center" }}>
            <em>
              Integrity doesn’t require endless engagement.
              <br />
              It requires alignment.
            </em>
          </p>
          <h2>When alignment turns into exhaustion</h2>

          {/* Question */}
          <div className={styles.question}>
            <p>
              For a long time, I believed integrity meant staying in the fight —
              explaining, correcting, persuading — especially when something was
              clearly wrong. Walking away felt like compromise.
            </p>
          </div>
          <p>
            In my work place, the person X misused his authority. Money was
            collected from clients and not deposited. I had proof.
          </p>

          <p>
            Yet one powerful manager supported him for convenience, and most
            co-workers stayed passive. I tried to get others aligned. Instead of
            change, I got resistance and silence.
          </p>

          <blockquote className={styles.quote}>
            <p>Anamika's integrity was intact — but her energy was leaking.</p>
          </blockquote>

          {/* Answer / Link */}
          <div className={styles.reply}>
            The mentor responds, and something unseen settles into harmony.
          </div>

          <h2>The hidden trap is trying to align others</h2>

          <p>
            Speaking your truth is healthy. Repeating it is understandable. Trying
            to make others see is exhausting.
          </p>

          <p>
            Alignment cannot be transferred. Once your thoughts, words, and
            actions are aligned, your ethical work is complete.
          </p>

          <h2>Paying without agreeing</h2>

          <p>
            A small, unannounced charge was introduced. Paying it felt wrong. But
            fighting alone felt worse.
          </p>

          <p>
             <blockquote className={styles.quote}><strong>Paying is not approval when done consciously. Integrity is not
              symbolic suffering.</strong></blockquote>
          </p>

          <h2>A third path</h2>

          <ul>
            <li>Pay, without moral closure</li>
            <li>Document quietly</li>
            <li>Stop leaking energy</li>
            <li>Wait for leverage, not validation</li>
          </ul>

          <p>
            This is not surrender. It is strategic restraint.
          </p>

          <h2>What integrity actually asks</h2>

          <blockquote className={styles.question}>
            <p>
              Anamika replies, I can see the truth without carrying the whole burden of correcting
              it.
            </p>
          </blockquote>
          <blockquote className={styles.quote}>
            The storm did not disappear. She simply stopped letting it define her center.
          </blockquote>
        </div>
      </article>
    </BlogLayout>
  );
}
