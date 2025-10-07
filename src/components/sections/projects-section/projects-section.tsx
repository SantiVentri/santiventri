import { SectionSubtitle, SectionTitle } from '@/components/common/text/text';
import styles from './projects-section.module.css';
import Project from './project/project';

export const projects = [
    {
        "image": "https://placehold.co/600x340/3454d1/fff/png",
        "start": "March 2025",
        "end": "August 2025",
        "title": "Project Title",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
        "tools": [
            "Figma",
            "Github",
            "Supabase",
            "NextJS",
        ],
        "link": "santiventri.com"
    },
    {
        "image": "https://placehold.co/600x340/3454d1/fff/png",
        "start": "March 2025",
        "end": "August 2025",
        "title": "Project Title",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
        "tools": [
            "Figma",
            "Github",
            "Supabase",
            "NextJS",
        ],
        "link": "santiventri.com"
    },
    {
        "image": "https://placehold.co/600x340/3454d1/fff/png",
        "start": "March 2025",
        "end": "August 2025",
        "title": "Project Title",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
        "tools": [
            "Figma",
            "Github",
            "Supabase",
            "NextJS",
        ],
        "link": "santiventri.com"
    },
    {
        "image": "https://placehold.co/600x340/3454d1/fff/png",
        "start": "March 2025",
        "end": "August 2025",
        "title": "Project Title",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
        "tools": [
            "Figma",
            "Github",
            "Supabase",
            "NextJS",
        ],
        "link": "https://www.santiventri.com"
    },
    {
        "image": "https://placehold.co/600x340/3454d1/fff/png",
        "start": "March 2025",
        "end": "August 2025",
        "title": "Project Title",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
        "tools": [
            "Figma",
            "Github",
            "Supabase",
            "NextJS",
        ],
        "link": "https://www.santiventri.com"
    },
    {
        "image": "https://placehold.co/600x340/3454d1/fff/png",
        "start": "March 2025",
        "end": "August 2025",
        "title": "Project Title",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.",
        "tools": [
            "Figma",
            "Github",
            "Supabase",
            "NextJS",
        ],
        "link": "https://www.santiventri.com"
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