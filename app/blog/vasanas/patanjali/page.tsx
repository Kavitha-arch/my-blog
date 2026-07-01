"use client"
import { VerseImage } from "@/app/components/katha/VerseImage";
import BlogLayout from "../../BlogLayout";
import styles from '../samskara/Samskara.module.css';
import { PhilosophyToggle } from '@/app/components/journal/PhilosophyToggle';
import Link from "next/link";

export default function PatanjaliPage() {
    return (
        <BlogLayout>
             <h1>Patanjali Yoga</h1>
            <figure className={styles.imageFigure}>
                <VerseImage
                    src="/images/journal/patanjali.png"
                    alt="When Desire Ends, The World Ends"
                    width={500}
                    height={600}
                />

                <figcaption className={styles.figCaption}>
                    <strong>वितर्कबाधने प्रतिपक्षभावनम्॥ </strong>
                    <strong>"Vitarka-badhane pratipaksha-bhavanam"</strong>
                    <blockquote>Translation: When disturbed by negative, agitating, or destructive thoughts, consciously cultivate the exact opposite thought. </blockquote>
                </figcaption>
            </figure>

            <h2>पतञ्जलिः: योगश्चित्तवृत्तिनिरोधः॥</h2>
            <strong>"Yoga Chitta Vritti Nirodha"</strong>
            <p>—the calming of the thought-waves (vrittis) rising from your subconscious impressions (samskaras and vasanas).</p>
            <div className={styles.perspectiveBlock}>
                <h5> 1. The Core Strategy: Abhyasa (Practice) and Vairagya (Dispassion)</h5>
                <p>
                    Abhyasa (Persistent Effort):The steady, uninterrupted practice of anchoring your mind back to stillness.
                </p>
                <p>Vairagya (Dispassion/Non-Attachment):Freedom from craving external results. It means looking at the  error or partiality, executing your clean duty, but completely dropping the mental demand that the person must acknowledge you or your loved ones must change.</p>
            </div>
            <div className={styles.perspectiveBlock}>
                <h5> 2. The Mental Reset Button: Pratipaksha Bhavanam</h5>
                <blockquote>"Vitarka-badhane pratipaksha-bhavanam"Translation: When disturbed by negative, agitating, or destructive thoughts, consciously cultivate the exact opposite thought.</blockquote>
                <p>
                    How you apply it: The moment your mind starts rehearsing an angry speech   or feeling sad  , you catch it and switch the channel.
                </p>
                <p>Instead of feeding the loop of "This is unfair, they are incompetent," you pivot to: "Human conditioning is messy. I see their carelessness, but I choose to preserve the peace of my inner home. My awareness remains unbothered." This starves the vasana of attention.</p>
            </div>
            <div className={styles.conceptBox}>
                <h5 className={styles.conceptTitle}>Patanjali’s Formula for Social Peace</h5>
                <p>
                    In Yoga Sutra 1.33, Patanjali recommends <strong>Upekṣā (Equanimity/Indifference)</strong> when dealing with
                    careless or unjust behaviors (<em>Apunye</em>). You do not become passive; you state the truth, but you practice
                    dispassion (<em>Vairagya</em>), refusing to let the flaws of others disrupt the lake of your mind.
                </p>
            </div>

            {/* Render the interactive toggle panel tool */}
            <PhilosophyToggle />

            <h2><Link
                href="/blog/vasanas/worksheet"
                className="link-primary-underline"
            >Worksheet→</Link></h2>
            
        </BlogLayout>

    );
}