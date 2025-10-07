import { SectionTitle } from '@/components/common/text/text';
import styles from './skills-section.module.css';
import Image from 'next/image';

const skills = [
    "Responsive web design and development",
    "Mobile development",
    "Mockup design",
    "Application testing",
    "Agile methodologies"
]

export default function SkillsSection() {
    return (
        <section className={styles.section} id='skills'>
            <div className={styles.bubble}></div>
            <div className={styles.container}>
                <article>
                    <SectionTitle text="The languages and tools I use to bring my ideas to life." />
                    <p>I usually work with everything that helps me bring my ideas to life: from the frontend and backend to design and databases. I&apos;m always learning and trying new things.</p>
                    <div className={styles.skills}>
                        {skills.map((item, index) => (
                            <div className={styles.skill} key={index}>{item}</div>
                        ))}
                    </div>
                </article>
                <aside>
                    <Image
                        className={styles.image}
                        src="/sections/SkillsContainer.png"
                        width={360}
                        height={360}
                        alt="Skills container image"
                        draggable={false}
                        priority
                    />
                </aside>
            </div>
        </section>
    )
}