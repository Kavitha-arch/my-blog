"use client" 
import styles from './Samskara.module.css';
import BlogLayout from '../../BlogLayout';
import { BackButton } from '@/app/components/BackButton';

export default function SamskaraGeneticsPage() {
  return (
    <BlogLayout>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <BackButton />
      </div>

      <div className={styles.conceptBox}>
        <h4 className={styles.conceptTitle}>Samskaras & Genetic Inheritance</h4>
        <p className={styles.conceptText}>
          Can a Samskara be inherited from your ancestors? <strong>Yes.</strong> What Indian psychology
          calls an ancestral <em>Samskara</em>, modern science calls <strong>epigenetic inheritance</strong>.
        </p>
        <div className={styles.dualPerspectiveGrid}>
          <div className={styles.perspectiveBlock}>
            <h5>The Epigenetic View</h5>
            <p>
              An intense life experience or behavioral trait in your grandmother can alter her gene expression.
              This biological blueprint is passed down, giving you a nervous system pre-wired with those exact traits.
            </p>
          </div>
          <div className={styles.perspectiveBlock}>
            <h5>The Vedantic View</h5>
            <p>
              Your individual soul's subconscious memory matches the biological frequency of your family line.
              Your grandmother's inherited traits provide the perfect physical vehicle for your latent tendencies to manifest.
            </p>
          </div>
        </div>
      </div>

    </BlogLayout>
  );
}
