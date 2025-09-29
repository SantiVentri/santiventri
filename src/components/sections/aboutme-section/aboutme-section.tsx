import { SectionTitle } from '@/components/common/text/text';
import styles from './aboutme-section.module.css';
import Image from 'next/image';

export default function AboutMeSection() {
    return (
        <section className={styles.section} id='about-me'>
            <div className={styles.container}>
                <article>
                    <SectionTitle text="Who I am and what I do" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.<br /><br />Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
                </article>
                <aside>
                    <Image
                        className={styles.image}
                        src="/sections/MyPic.png"
                        width={360}
                        height={360}
                        alt="My picture"
                        draggable={false}
                        priority
                    />
                </aside>
            </div>
        </section>
    )
}