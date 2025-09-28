import { ReactNode } from 'react';
import styles from './text.module.css';

export function Title({ text }: { text: ReactNode }) {
    return (
        <h1 className={styles.title}>{text}</h1>
    );
}

export function Subtitle({ text }: { text: string }) {
    return (
        <h2 className={styles.subtitle}>{text}</h2>
    )
}

export function SectionTitle({ text }: { text: string }) {
    return (
        <h1 className={styles.sectionTitle}>{text}</h1>
    )
}

export function SectionSubtitle({ text }: { text: string }) {
    return (
        <h2 className={styles.sectionSubtitle}>{text}</h2>
    )
}