import { SectionSubtitle, SectionTitle } from '@/components/common/text/text';
import styles from './cta.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.titles}>
                        <SectionTitle text="Have an idea for a project?" />
                        <SectionSubtitle text="Let's get in touch!" />
                    </div>
                    <Link className={styles.button} href="/contact-me">Contact me</Link>
                </div>
                <div className={styles.socials}>
                    <Link href="https://x.com/santiventri" target="_blank" className={styles.icon}>
                        <Image
                            src="/icons/socials/X.png"
                            height={32}
                            width={32}
                            alt='X Icon'
                        />
                    </Link>
                    <Link href="https://github.com/santiventri" target="_blank" className={styles.icon}>
                        <Image
                            src="/icons/socials/GitHub.png"
                            height={32}
                            width={32}
                            alt='Github Icon'
                        />
                    </Link>
                    <Link href="https://linkedin.com/in/santinoventrice" target="_blank" className={styles.icon}>
                        <Image
                            src="/icons/socials/LinkedIn.png"
                            height={32}
                            width={32}
                            alt='LinkedIn Icon'
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}