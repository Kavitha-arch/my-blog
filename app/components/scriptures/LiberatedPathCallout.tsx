import React from 'react';
import styles from './VasanaFlowContainer.module.css';

export const LiberatedPathCallout: React.FC = () => {
    return (
        <>
            <div className={styles.liberatedCalloutBox}>
                <div className={styles.calloutHeader}>
                    <span className={styles.calloutBadge}>The Realized Path</span>
                    <h4>The True Challenge: How to "Stay as the Self"</h4>
                </div>
                <p className={styles.calloutBody}>
                    You are not wrong for pointing out errors or protecting your office or home or anything that is dear to you and shared with others.

                    Arjuna had to fight the battle, Krishna didn't tell Arjuna to run away, drop the bow, or become a passive victim. Instead, Krishna told him to anchor himself in the Self first, establish internal peace, and then fight the battle as a matter of pure duty.

                </p>
                <ul className={styles.calloutList}>
                    <li><strong>1. De-personalize the Data:</strong> For example in a office meeting, before you speak, look at the audited numbers on your paper. Remind yourself: "These numbers are just facts moving in the realm of nature (Prakriti). I am the silent awareness witnessing these numbers, witnessing this room, and witnessing this body."
                        <blockquote>You are not defending your ego; you are simply stating objective math.</blockquote></li>
                    <li><strong>2. Welcome Their Reactions as "Weather": </strong> If others becomes defensive, make excuses, or tries to dismiss you, do not take it as a personal attack. See their defensiveness as a natural weather pattern.Just as a stormy cloud is expected in July, a defensive reaction is expected from an inefficient human.
                        <blockquote>Let their words pass through your awareness without hitting an internal wall of resistance</blockquote>
                    </li>
                    <li><strong>3. Catch the "Righteous Anger" Trap: </strong>The ego loves to say, "But I am right, and they are wrong! Everyone should see this!"The moment you feel that hot surge of righteousness in your chest, silently ask yourself: "Who is feeling right?"Instantly turn your attention back to the silent space inside you.
                        <blockquote>The Self doesn't need to win the argument to be whole. You present the truth cleanly, leave it on the table for the community to see, and sit down.</blockquote></li>
                </ul>
            </div>
            <div className={styles.liberatedCalloutBox}>
                <div className={styles.calloutHeader}>
                    <span className={styles.calloutBadge}>The Realized Path</span>
                    <h4>Agitation is Optional</h4>
                </div>
                <p className={styles.calloutBody}>

                    The core teaching of
                    <strong> Nishkama Karma</strong> simply shows that you can protect your physical property with
                    your intellect, while protecting your spiritual home with your awareness. <strong> In fact, protecting your spiritual home first is what will help you protect your physical property always. </strong> Krishna asked Arjuna to perform his duty fully—but ONLY after anchoring his mind in absolute, unshakeable inner stillness.
                </p>

                <ul className={styles.calloutList}>
                    <li><strong>Protect Your Spiritual Home First:</strong> Clear out the internal mental friction, resentment, and emotional noise before taking action.</li>
                    <li><strong>Execute Your Physical Duty:</strong> Present the numerical facts at the meeting cleanly, sharply, and assertively. No passivity.</li>
                    <li><strong>Surrender the Reactions:</strong> If the members gets defensive, let it pass through your awareness like a passing cloud. You have done your part.</li>
                </ul>

                
                 {/* Sanskrit Verse Visual Anchor Box */}
                <div className={styles.gitaQuoteBox}>
                    <span className={styles.sanskritScript}>
                        तस्मात् सर्वेषु कालेषु मामनुस्मर युध्य च।
                    </span>
                    <span className={styles.sanskritTranslation}>
                        — Therefore, at all times, remember Me (the Self) and fight. (Bhagavad Gita 8.7)
                    </span>
                </div>
            </div>


        </>
    );
};
