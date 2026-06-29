"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

export const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    // Check if the user has a previous history entry within your session
    const hasHistory = typeof window !== 'undefined' && window.history.length > 1;

    if (hasHistory) {
      router.back();
    } else {
      // Fallback route if they landed directly on this page via a link or bookmark
      router.push('/blog');
    }
  };

  return (
    <button 
      onClick={handleBack} 
      className={styles.navigationBackButton}
      aria-label="Go back to the main page"
    >
      ← Go Back
    </button>
  );
};
