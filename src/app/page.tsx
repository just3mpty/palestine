/* eslint-disable react/no-unescaped-entities */
import styles from "./page.module.scss";
import data from "../../public/artistData.json";
import ArtistCard from "@/components/ArtistCard";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Free Palestine</h1>

            <p className={styles.description}>
                Liste d'artistes proposant leurs services et/ou oeuvres à la
                vente dans le but de récolter des fonds pour soutenir la
                Palestine.
            </p>
            <div className={styles.source}>
                <p>Source :</p>
                <Link
                    href={"https://x.com/praeg__/status/1795123396662948184"}
                    target="_blank">
                    Thread twitter de @praeg__
                </Link>
            </div>
            <p className={styles.description}>Hésitez pas à partager !</p>
            <section className={styles.artistGrid}>
                {data.map((artist, idx) => (
                    <ArtistCard
                        key={idx}
                        name={artist.name}
                        image={artist.image}
                        description={artist.description}
                        profile={artist.profile}
                        styleClass={styles.card}
                    />
                ))}
            </section>
        </main>
    );
}
