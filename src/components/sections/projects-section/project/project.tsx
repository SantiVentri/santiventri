"use client"

import Link from 'next/link';
import styles from './project.module.css';
import Image from 'next/image';

interface ProjectProps {
    image: string;
    start: string;
    end: string;
    title: string;
    description: string;
    tools: string[];
    link: string;
}

export default function Project({ image, start, end, title, description, tools, link }: ProjectProps) {
    return (
        <Link href={link} target='_blank' className={styles.card}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Image
                        src={image}
                        className={styles.headerImage}
                        fill
                        draggable={false}
                        alt={`${title} header image`}
                        quality={95}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.titles}>
                        <p className={styles.timeframe}>{start} - {end}</p>
                        <h1>{title}</h1>
                    </div>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
            <div className={styles.tools}>
                {tools.map((item, index) => (
                    <div className={styles.tool} key={index}>
                        <Image
                            src={`/icons/tools/${item}.png`}
                            height={30}
                            width={30}
                            alt={`${item} icon`}
                            quality={100}
                        />
                    </div>
                ))}
            </div>
        </Link>
    )
}