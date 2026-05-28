import "../storm.css";
import "../question.css";
import BlogLayout from "../BlogLayout";
import Image from "next/image";
import styles from "..//Dialoge.module.css";
import Link from "next/link";

export default function DentalHealthPage() {
    return (
        <BlogLayout>
            <article className="prose prose-neutral dark:prose-invert">

                <div className="max-w-3xl mx-auto px-6 py-2">

                    <div className="storm-container">
                        <div className="hero-section">
                            <p className="hero-subtitle">Personal Reflection</p>

                            <h1 className="hero-title">The Storm</h1>

                            <div className="hero-divider" />

                            <p className="hero-quote">
                                “ A Storm Outside, A Steady Flame Within.”
                            </p>
                        </div>

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

                        <article className="storm-article">
                            <p>
                                The past month has been one of the hardest seasons of my life. I
                                was someone who rarely even took a tablet for a headache, and
                                suddenly I found myself swallowing medicines almost every day.
                            </p>

                            <p>
                                The health issues arrived without warning — like a storm that
                                gathered silently and then struck all at once.
                            </p>

                            <p>
                                I still remember the moment I understood what lay ahead of me: my
                                molars gone, surgeries waiting, countless hospital visits ahead.
                            </p>

                            <p>
                                My first thoughts were not about pain. They were about how I would
                                look, how much it would cost, how life would change.
                            </p>

                            <p>
                                Then came the endless thinking. The research. The second opinions.
                                The fear hidden inside careful decisions.
                            </p>

                            <p>And then the journey began.</p>

                            <p>What a journey it has been.</p>

                            <p>
                                In some ways, it was good that I did not know what was coming. The
                                first day brought immense pain. Then it would settle, only to
                                return again the following week like waves refusing to rest. And
                                just when I thought the worst had passed, the final session in the
                                fourth week brought another storm of pain that lingered for days.
                            </p>

                            <p>
                                The financial cost was heavy too. At first, I mourned the careful
                                savings disappearing piece by piece. But somewhere along the way, I
                                realized — this is exactly what we save for. Health. Healing.
                                Hope.
                            </p>

                            <div className="card-section">
                                <h2>My Mother</h2>

                                <p>Through it all, my mother became my shelter.</p>

                                <p>
                                    Her presence softened even the hardest days. She understood my
                                    tears, my silence, my irritation, my exhaustion. She cared for me
                                    gently when I felt weak, and gave me space when I needed to
                                    retreat into myself.
                                </p>

                                <p>
                                    She loved me in the quiet, ordinary ways that only a mother can.
                                </p>

                                <p className="italic-text">
                                    I do not think I will ever fully be able to express my gratitude.
                                </p>
                            </div>

                            <p>
                                The doctor too carried kindness alongside intelligence. There was
                                safety in her calmness. And the conversations with my mentor became
                                small lamps along the way, guiding me through moments of
                                uncertainty.
                            </p>
                            <div className="card-section">
                                <h2>My Sons</h2>

                                <p>
                                    During one of the most fragile seasons of my life,
                                    my two sons became quiet pillars of strength beside me.
                                </p>

                                <p>
                                    They never hesitated.
                                    Never complained.
                                    Never made me feel alone while sitting in the dentist’s chair
                                    before the gum surgery,
                                    carrying fear quietly inside me.
                                </p>

                                <p>
                                    Their presence carried a kind of peace that words cannot fully explain.
                                    Sometimes courage does not arrive loudly —
                                    sometimes it simply sits beside you,
                                    gently reminding your heart that you are loved.
                                </p>

                                <p>
                                    In moments when fear tried to overwhelm me,
                                    one look at their faces would soften everything inside me.
                                    It felt as though God was comforting me through them.
                                </p>

                                <p className="italic-text">
                                    May the Lord bless them with lives filled with joy,
                                    peace, kindness, and inner light.
                                    Every day, my heart overflows with gratitude
                                    for the gift of such loving sons,
                                    and for the grace of having wonderful parents
                                    whose love carried me through this storm.
                                </p>
                            </div>
                            <p>
                                The journey is not over yet. But something within me has changed.
                            </p>

                            <p>
                                It has been almost a month since I ate a proper meal, yet
                                surprisingly, I am at peace with it. I have learned to slow down,
                                to make simple soft meals with care, to find comfort in little
                                things.
                            </p>

                            <blockquote className="storm-quote">
                                The storm still exists. It has merely grown quieter.
                            </blockquote>

                            <p>
                                In every difficult moment, I found myself clinging to God, to
                                prayer, to mantras whispered between pain and fear. That faith
                                became an anchor when everything else felt uncertain.
                            </p>

                            <p>Somewhere in this process, my thinking changed.</p>

                            <p>
                                Earlier, I lived as though peace existed only at the end of
                                completion — after the cooking, after the cleaning, after the
                                kitchen lights were turned off and the day was neatly folded away.
                                I was always hurrying toward rest.
                            </p>

                            <p>But now, something within me has softened.</p>

                            <p>
                                I no longer rush through life waiting for the next moment to begin.
                                There is ease even while washing dishes, comfort even in unfinished
                                tasks.
                            </p>

                            <p>
                                Sometimes I wonder if the healing touched more than my tooth —
                                perhaps it quietly healed a restless part of my spirit too.
                            </p>

                            <div className="reflection-section">
                                <h2>Fear & Uncertainty</h2>

                                <p>
                                    One thing I have observed about health issues is that uncertainty
                                    itself becomes exhausting.
                                </p>

                                <p>The fear quietly enters everything:</p>

                                <ul>
                                    <li>Will the surgery go well?</li>
                                    <li>Will this pain return?</li>
                                    <li>How much more will this cost?</li>
                                    <li>How long will this take?</li>
                                    <li>Will I ever feel normal again?</li>
                                </ul>

                                <p>Pain at least has a location. Fear spreads everywhere.</p>

                                <p>
                                    I realized how fortunate I was to have support around me, because
                                    there are people facing far more serious illnesses, often without
                                    emotional or financial support.
                                </p>

                                <p>And perhaps fear can never be completely avoided.</p>

                                <p>
                                    But maybe healing is not about eliminating fear. Maybe it is
                                    about slowly becoming steadier than the fear itself.
                                </p>

                                <p>
                                    Information helps. Loving support helps. Faith helps. Living one
                                    day at a time helps.
                                </p>

                                <p>Most importantly, acceptance softens exhaustion.</p>

                                <p>
                                    Not resignation — but acceptance that uncertainty is part of
                                    being alive.
                                </p>
                            </div>

                            <p>I do not want pain. But I have discovered patience.</p>

                            <p>
                                Patience with healing.
                                <br />
                                Patience with uncertainty.
                                <br />
                                Patience with life itself.
                            </p>

                            <p>
                                I no longer take ordinary days for granted. Even routine has begun
                                to feel sacred.
                            </p>

                            <div className="ending-section">
                                <div className="sparkle">✨</div>
                                <p className="ending-text">
                                    Q&A
                                </p>
                            </div>
                        </article>
                    </div>

                    {/* Question1 */}
                    <div className={styles.question}>
                        <p className={styles.questionLabel}>Question</p>

                        <p className={styles.questionText}>
                            Do you feel this health-related challenge and my struggle with it
                            had something to do with alignment and integrity?
                        </p>
                    </div>

                    {/* Answer1 */}
                    <div className={styles.reply}>
                        <p className={styles.replyLabel}>Mentor</p>

                        <p>
                            Yes — very strongly, though in a quiet and genuine way rather than
                            in a “self-help” style.
                        </p>

                        <p>
                            Your blog reflects alignment because there is no split between what
                            you felt, what you feared, and what you finally understood. You are
                            not pretending to be “positive,” nor are you drowning in suffering.
                            The writing stays honest throughout. That emotional honesty itself
                            feels aligned.
                        </p>

                        <p>
                            It also reflects integrity in the deeper sense of the word —
                            becoming whole again.
                        </p>

                        <ul>
                            <li>fear about appearance,</li>
                            <li>anxiety about money,</li>
                            <li>physical pain,</li>
                            <li>uncertainty,</li>
                            <li>loss of control,</li>
                            <li>obsession with “getting through” things.</li>
                        </ul>

                        <p>
                            But gradually, the narrative moves toward integration:
                        </p>

                        <ul>
                            <li>accepting help,</li>
                            <li>slowing down,</li>
                            <li>valuing ordinary moments,</li>
                            <li>releasing urgency,</li>
                            <li>finding calm inside uncertainty,</li>
                            <li>allowing healing instead of forcing life.</li>
                        </ul>

                        <p>
                            Especially this realization:
                        </p>

                        <blockquote>
                            “I no longer rush through life waiting for the next moment to begin.”
                        </blockquote>

                        <p>
                            That line feels like the heart of the piece. It shows movement from
                            externally driven living to internally anchored living.
                        </p>

                        <p>
                            The image of the storm versus the inner lamp is deeply symbolic of
                            integrity: the outer world remains turbulent, but the inner self is
                            no longer fragmented by it.
                        </p>

                        <p>
                            What makes the blog powerful is that these themes emerge naturally
                            through lived experience. You are not preaching alignment — you are
                            describing what it felt like to slowly return to yourself.
                        </p>
                    </div>

                    {/* Question 2*/}
                    <div className={styles.question}>
                        <p className={styles.questionLabel}>Question</p>

                        <p className={styles.questionText}>
                            One thing I have observed about health issues is the uncertainty
                            around everything — cost, time, recovery, outcomes.
                        </p>

                        <p className={styles.questionText}>
                            But the most stressful part seems to be the fear.
                        </p>

                        <p className={styles.questionText}>
                            In my case, it was a simpler issue involving my teeth, but it still
                            affected my appearance and even the comfort of eating food I loved.
                            For others, it can be far more serious — especially when they do not
                            have emotional or financial support.
                        </p>

                        <p className={styles.questionText}>
                            Thoughts like:
                        </p>

                        <blockquote className={styles.questionQuote}>
                            “Will the surgery go well?” <br />
                            “Will I be okay?” <br />
                            “What if something goes wrong?”
                        </blockquote>

                        <p className={styles.questionText}>
                            all add to the exhaustion.
                        </p>

                        <p className={styles.questionText}>
                            So how should one prepare oneself mentally?
                            Is there a way to avoid fear —
                            or is fear simply inevitable?
                        </p>
                    </div>

                    {/* Answer 2*/}
                    <div className={styles.reply}>
                        <p className={styles.replyLabel}>Mentor</p>

                        <p>
                            Fear is probably one of the most exhausting parts of illness —
                            sometimes even more exhausting than the physical pain itself.
                        </p>

                        <p>
                            Pain at least has a location.
                            Fear spreads everywhere.
                        </p>

                        <p>
                            It enters the mind quietly:
                        </p>

                        <blockquote>
                            “Will the surgery go well?” <br />
                            “Will this pain return?” <br />
                            “Will I look the same?” <br />
                            “How much more will this cost?” <br />
                            “How long will this take?” <br />
                            “What if something goes wrong?”
                        </blockquote>

                        <p>
                            The hardest part is that health issues remove the illusion of
                            certainty we normally live with.
                        </p>

                        <p>
                            Most healthy people unconsciously assume tomorrow will look roughly
                            like today. Illness interrupts that assumption completely.
                        </p>

                        <p>
                            So your observation is very profound:
                            the fatigue does not come only from treatment —
                            it also comes from carrying uncertainty for days or months.
                        </p>

                        <p>
                            And when one realizes that others go through much more serious
                            illnesses, often without emotional or financial support, it creates
                            a different kind of compassion and humility.
                        </p>

                        <p>
                            As for your question —
                            can fear be avoided?
                        </p>

                        <p>
                            Probably not entirely.
                        </p>

                        <p>
                            Fear is a deeply human response whenever the body, identity,
                            finances, or future feel threatened.
                        </p>

                        <p>
                            Trying to completely eliminate fear can sometimes create even more
                            struggle, because then one starts fearing the fear itself.
                        </p>

                        <p>
                            What helps more is slowly developing a relationship with fear where
                            it no longer controls the entire inner world.
                        </p>

                        <p>
                            A few things gently make that possible:
                        </p>

                        <ul>
                            <li>
                                <strong>Information helps — but only to a point.</strong>
                                <br />
                                Good doctors and understanding the process reduce unnecessary
                                anxiety, though excessive research can also amplify fear.
                            </li>

                            <li>
                                <strong>Support regulates fear.</strong>
                                <br />
                                Your mother’s presence mattered not because she removed the
                                problem, but because fear becomes lighter when it is witnessed
                                lovingly.
                            </li>

                            <li>
                                <strong>Inner anchoring helps.</strong>
                                <br />
                                Prayer, meditation, mantras, breathing rituals — they give the
                                mind somewhere to rest when outcomes cannot be controlled.
                            </li>

                            <li>
                                <strong>Living one step at a time helps.</strong>
                                <br />
                                Fear often comes from mentally living inside an imagined future.
                                Healing becomes gentler when attention returns to:
                                <em> today’s medicine, today’s meal, today’s rest.</em>
                            </li>

                            <li>
                                <strong>Acceptance reduces exhaustion.</strong>
                                <br />
                                Not resignation — but acceptance that uncertainty is part of being
                                alive. Ironically, once we stop demanding guarantees from life,
                                the nervous system softens a little.
                            </li>
                        </ul>

                        <p>
                            I think what changed in you through this journey was not that fear
                            disappeared.
                        </p>

                        <p>
                            It is that another quality slowly became stronger than fear:
                        </p>

                        <blockquote>
                            trust, <br />
                            patience, <br />
                            surrender, <br />
                            presence.
                        </blockquote>

                        <p>
                            That is why the storm became quieter.
                        </p>

                        <p>
                            Not because everything became certain,
                            but because your center became steadier.
                        </p>
                    </div>

                </div>
            </article>
        </BlogLayout>
    );
}