import { SectionSubtitle, SectionTitle } from '@/components/common/text/text';
import styles from './projects-section.module.css';
import Project from './project/project';

export const projects = [
    {
        "image": "/sections/projects/Scano-Screenshot.png",
        "start": "October 2025",
        "end": "November 2025",
        "title": "Scano QR Code Generator",
        "description": "Scano is a free and easy-to-use QR code generator and manager web app that allows users to create custom QR codes for various purposes.",
        "tools": [
            "Figma",
            "Github",
            "Supabase",
            "CSS",
            "Nextjs",
        ],
        "link": "https://scano.santiventri.com"
    },
    {
        "image": "/sections/projects/GudNewsOnly-Screenshot.png",
        "start": "November 2025",
        "end": "November 2025",
        "title": "GudNewsOnly News Website",
        "description": "GudNewsOnly is a news website that provides users with positive news, articles, and stories from around the world to promote optimism and well-being.",
        "tools": [
            "Figma",
            "Github",
            "CSS",
            "Nextjs",
        ],
        "link": "https://gudnewsonly.santiventri.com"
    },
]

export default function ProjectsSection() {
    return (
        <section className={styles.section} id='projects-section'>
            <div className={styles.bubble}></div>
            <div className={styles.container}>
                <div className={styles.titles}>
                    <SectionTitle text="Selected Work" />
                    <SectionSubtitle text="Some of the projects I'm most proud of. From idea to final product." />
                </div>
                <div className={styles.projectsList}>
                    {projects.map((item, idx) => (
                        <Project key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}