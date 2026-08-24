import { albums, featuredAlbum, site } from "@/lib/site";

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

  const storeAlbums = albums
    .filter((item) => item.links.some((link) => link.primary))
    .map((item) => {
      const store = item.links.find((link) => link.primary);
      return {
        "@context": "https://schema.org",
        "@type": "MusicAlbum",
        name: item.title,
        byArtist: {
          "@type": "MusicGroup",
          name: item.ensemble,
        },
        datePublished: item.year,
        recordLabel: item.label,
        offers: store
          ? {
              "@type": "Offer",
              url: store.href,
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Amazon",
              },
            }
          : undefined,
      };
    });

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
      {storeAlbums.map((item) => (
        <script
          key={item.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
