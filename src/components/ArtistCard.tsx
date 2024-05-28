import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArtistProps {
    name: string;
    image: string;
    description: string;
    profile: string;
    styleClass: string;
}

const ArtistCard = ({
    name,
    image,
    description,
    profile,
    styleClass,
}: ArtistProps) => {
    return (
        <Link href={profile} target="_blank" className={styleClass}>
            <figure>
                <Image src={image} alt={`${name}'s profile picture`} fill />
            </figure>
            <div>
                <h2>@{name}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default ArtistCard;
