import BlogLayout from "../../BlogLayout";
import { FlowCard, VasanaFlowContainer } from "@/app/components/journal/VasanaFlowContainer";
import styles from "./Summary.module.css"; 
import { BackButton } from "@/app/components/BackButton";
import Link from "next/link";

export default function VasanasExamples() {
    return (
        <BlogLayout>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                <BackButton />
            </div>

            <article>
                <h2>Freedom from Vasana & Desire</h2>

                <ul>
                    <li>
                        <strong>1. Vasana (The Subconscious Seed)</strong> →  A latent tendency, deep-seated impression, or conditioning stored in the causal body (Karana Sharira).
                    </li>

                    <li>
                        <strong>2. Vritti (The Thought Wave)</strong> → A ripple or modification that arises in the lake of the mind (Chitta).
                    </li>

                    <li>
                        <strong>3. Kama / Ichha (The Desire)</strong> → The intellect (Buddhi) evaluates the thought wave, attaches an ego-identity (Ahamkara) to it, and projects that the object will bring happiness.
                    </li>

                    <li>
                        <strong>4a. Manasa Karma (The Internal Action)</strong> →  The intellect (Buddhi) tries to solve an unresolvable equation: it demands absolute fairness from an unfair world, but forbids outward action to avoid hurting others.<br />
                        The trapped energy turns inward, causing agitation (Kshobha).<br />
                        Because the mind spent hours reacting to the event internally, the subconscious registers this as a major experience, thickening the Vasana and making you even more sensitive to the next instance of unfairness.<br />
                    </li>
                    <li>
                        <strong>4b. External Karma (The Physical Action)</strong> →  The desire drives the life force (Prana) and commands the organs of action (Karmendriyas) to execute the physical deed.
                    </li>
                </ul>


                <VasanaFlowContainer
                    title="The Invisible Cycle of Bondage"
                    description="Even when we suppress outward actions to avoid conflict, internal mental agitation leaves deep subconscious impressions."
                >
                    {/* Example 1: Financial Inaccuracy */}
                    <FlowCard
                        vasana="An intense, deep-seated latent need for absolute systemic precision, financial order, and transactional correctness."
                        kama="A burning urge to immediately correct the overlooked ledger records, audit the accounts, and enforce total accuracy."
                        externalKarma="Physical non-action. Choosing absolute silence during meetings, staying passive, and avoiding direct confrontation with the building committee."
                        internalKarma="Intense mental friction. Silently policing the accounts, keeping a record of grievances, and replaying stressful imaginary confrontations in the mind."
                        reinforced="A hyper-vigilant, more easily triggered subconscious sensitivity to systemic disorder, making future errors feel even more intolerable."
                    />

                    {/* Example 2: Familial Partiality */}
                    <FlowCard
                        vasana="A foundational subconscious blueprint demanding perfect emotional justice, fairness, and equal respect from maternal/paternal figures."
                        kama="A powerful craving to demand equity, expose the unfair property distribution, and claim equal structural validation without fracturing the family dynamic."
                        externalKarma="Complete outward compliance. Yielding to the decision without a public protest, swallowing the voice to protect parents' feelings and avoid a family rift."
                        internalKarma="Deep emotional isolation, hidden grief, chronic unspoken resentment, and a recurring internal loop of feeling devalued compared to the sibling."
                        reinforced="A reinforced, painful belief that your immediate environment is fundamentally unsafe and unjust, causing you to preemptively expect unfair treatment."
                    />
                </VasanaFlowContainer>
            </article>
            <article>
                <div className={styles.summaryContainer}>
                    <h3 className={styles.summaryTitle}>How Advaita & Ramana Maharshi Break This Loop</h3>
                    <p className={styles.summaryIntro}>
                        Breaking the cycle of bondage does not mean forcing yourself to become passive or emotionally numb.
                        Passivity is simply a form of repressed ego-state. Advaita teaches us to dismantle the loop by changing
                        our relationship to the mind, shifting from a suffering victim to the silent witness.
                    </p>

                    <div className={styles.summaryGrid}>
                        <div className={styles.summaryColumn}>
                            <h4>1. Intercept at the Thought Wave (Vritti)</h4>
                            <p>
                                An accounting error or family partiality is just a piece of objective data. The loop locks when the
                                ego (<em>Ahamkara</em>) claims ownership of it: <em>"They are disrespecting MY need for order."</em>
                                By refusing to attach your personal identity to the external event, you stop the neutral thought
                                from hardening into a burning craving (<em>Kama</em>).
                            </p>
                        </div>

                        <div className={styles.summaryColumn}>
                            <h4>2. Apply Self-Inquiry (Atma-Vichara)</h4>
                            <p>
                                When internal agitation spikes, Ramana Maharshi instructs us to turn the spotlight inward:
                                <strong> "To whom is this agitation happening?"</strong> Instead of obsessing over the ledger or family
                                dynamics, track the origin of the "I" that feels hurt. This anchor dissolves the desperate psychic thirst
                                for external transactional fairness.
                            </p>
                        </div>

                        <div className={styles.summaryColumn}>
                            <h4>3. Shift to Inspired Action (Nishkama Karma)</h4>
                            <p>
                                By neutralizing internal friction, you transition from emotional reaction to purposeful, inspired action.
                                You can still calmly present an audited spreadsheet or firmly state a boundary. However, you perform this
                                as a clean duty, completely unbothered by whether the outside world validates or complies with your actions.
                            </p>
                        </div>
                    </div>

                    <div className={styles.liberatedFooter}>
                        <strong>The Ultimate Goal: Vasanakshaya</strong> — The thinning and complete destruction of the subconscious seed.
                        When external conditions lose the power to dictate your internal state, you are truly liberated.
                    </div>
                </div>
            </article>
            <Link
                href="/blog/vasanas/worksheet" 
                className="link-primary-underline"
            >Worksheet→</Link>  
        </BlogLayout >

    );
}