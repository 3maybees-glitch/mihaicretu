import { featuredAlbum, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    image: `${site.url}/images/logo.svg`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressCountry: "GB",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "George Enescu Music School" },
      { "@type": "CollegeOrUniversity", name: "Royal Northern College of Music" },
    ],
    knowsAbout: ["Double bass", "Composition", "Jazz", "Contemporary classical music"],
  };

  const album = {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: featuredAlbum.title,
    byArtist: {
      "@type": "MusicGroup",
      name: featuredAlbum.ensemble,
    },
    datePublished: featuredAlbum.year,
    recordLabel: featuredAlbum.label,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(album) }}
      />
    </>
  );
}
