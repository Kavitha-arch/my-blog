import React, { ReactNode } from 'react';
import styles from './VasanaFlowContainer.module.css';

interface ContainerProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export const VasanaFlowContainer: React.FC<ContainerProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.mainTitle}>{title}</h2>}
      {description && <p className={styles.subtitle}>{description}</p>}
      
      <div className={styles.flowWrapper}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          return (
            <div key={index} className={styles.cardItem}>
              <div className={styles.stepBadge}>Cycle {index + 1}</div>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface FlowCardProps {
  vasana: string;
  kama: string;
  externalKarma?: string; // Optional: outward actions
  internalKarma: string;  // Required: mental agitation/rumination
  reinforced: string;
}

export const FlowCard: React.FC<FlowCardProps> = ({ 
  vasana, 
  kama, 
  externalKarma, 
  internalKarma, 
  reinforced 
}) => {
  return (
    <div className={styles.flowCard}>
      <div className={styles.flowText}>
        <div className={styles.node} data-label="Vasana">{vasana}</div>
        <div className={styles.arrow}>→</div>
        <div className={styles.node} data-label="Kama (Desire)">{kama}</div>
        <div className={styles.arrow}>→</div>
        
        {/* Karma Section Split */}
        <div className={styles.karmaContainer}>
          {externalKarma && (
            <div className={`${styles.node} ${styles.external}`} data-label="External Karma">
              {externalKarma}
            </div>
          )}
          <div className={`${styles.node} ${styles.internal}`} data-label="Internal Karma (Agitation)">
            {internalKarma}
          </div>
        </div>
        
        <div className={styles.arrow}>→</div>
        <div className={styles.node} data-label="Reinforced Vasana">{reinforced}</div>
      </div>
    </div>
  );
};