"use client"
import { useState, useRef } from "react";
import styles from './AudioBlock.module.css';

type AudioBlockProps = {
    src: string;
};

export function AudioBlock({
    src
}: AudioBlockProps) {
    if (!src) return null;
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((error) => console.log("Playback blocked or failed:", error));
        }
    };

    return (
        <>
            {/* Hidden Audio element - place your mp3 in the public/audio folder */}
            <audio
                ref={audioRef}
                src={src}
                loop
            />

            {/* Floating Audio Control Button */}
            <button
                onClick={toggleAudio}
                className={`${styles.audioButton} ${styles.screenOnly}`}
                aria-label="Toggle Audio Background"
            >
                {isPlaying ? "🔈 Pause Chanting" : "🔊 Play Chanting"}
            </button>
        </>
    );
}