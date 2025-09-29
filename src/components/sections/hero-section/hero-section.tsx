import styles from './hero-section.module.css';
import Image from 'next/image';
import { Subtitle, Title } from '@/components/common/text/text';

export default function HeroSection() {
    return (
        <section className={styles.section} id='hero-section'>
            <div className={styles.container}>
                <div className={styles.titles}>
                    <Title text={<>Hi, I’m <span>Santino Ventrice</span>,</>} />
                    <Subtitle text="student & frontend developer" />
                    <Image
                        src={"/sections/underline.svg"}
                        className={styles.vector}
                        alt='Underline vector'
                        width={480}
                        height={0}
                        style={{ height: 'auto' }}
                        draggable={false}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}