export const site = {
  name: "Michael Cretu",
  role: "Composer & Solo Double Bassist",
  city: "Manchester",
  tagline: "Composer · Solo Double Bass · Manchester",
  description:
    "Michael Cretu is an internationally recognised composer and solo double bassist, and musical director of the Manchester International Roots Orchestra. He lives and works in Manchester, UK.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  logo: "/images/logo.svg",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  footerLine:
    "Composer and solo double bassist. Musical director, Manchester International Roots Orchestra. Lives and works in Manchester, UK.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/album", label: "The New Album" },
  { href: "/recordings", label: "Recordings" },
  { href: "/about", label: "About" },
  { href: "/compositions", label: "Compositions" },
  { href: "/miro", label: "MIRO" },
  { href: "/concerts", label: "Concerts" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
] as const;

export const social = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@MichaelCretu-Trio",
  },
  {
    label: "Facebook page",
    href: "https://www.facebook.com/michael.cretu.1",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/michaeldcretu/",
  },
  {
    label: "X",
    href: "https://x.com/MichaelDCretu",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-cretu-715b892a",
  },
] as const;

export type AlbumLink = {
  label: string;
  href: string;
  /** Highlighted purchase CTA — keep the retailer name in the label. */
  primary?: boolean;
};

export type Album = {
  id: string;
  title: string;
  year: string;
  ensemble: string;
  label: string;
  catalogue?: string;
  cover?: string;
  featured?: boolean;
  summary: string;
  dedication?: string;
  tracks: { title: string; duration: string; note?: string }[];
  credits: string[];
  links: AlbumLink[];
};

export const albums: Album[] = [
  {
    id: "johnny",
    title: "Johnny",
    year: "2022",
    ensemble: "Michael Cretu Trio",
    label: "Soft Records",
    catalogue: "SFTA-054-2",
    cover: "/images/johnny.jpg",
    featured: true,
    summary:
      "A jazz trio record dedicated to Johnny Răducanu — Michael’s uncle and mentor, and one of the most important figures in Romanian jazz. Piano, double bass and drums, recorded at the University of Salford.",
    dedication:
      "Dedicated to my uncle and mentor Johnny Răducanu. An annual jazz festival and competition is held in his name in his hometown, Brăila.",
    tracks: [
      { title: "Take 9", duration: "8:53", note: "Traditional, arranged by Michael Cretu" },
      { title: "The Balkan Connection", duration: "5:41", note: "Traditional, arranged by Michael Cretu" },
      { title: "Johnny", duration: "4:26", note: "Michael Cretu" },
      { title: "The Greek Connection", duration: "6:51", note: "Traditional, arranged by Michael Cretu" },
      { title: "October Song", duration: "4:40", note: "Johnny Răducanu" },
      { title: "The Road to Damascus", duration: "5:02", note: "Traditional, arranged by Michael Cretu" },
      { title: "Soliloquy", duration: "6:41", note: "Ed Barnwell" },
      { title: "The Balkan Connection II", duration: "5:37", note: "Traditional, arranged by Michael Cretu" },
    ],
    credits: [
      "Michael Cretu — double bass",
      "Ed Barnwell — piano",
      "Myke Wilson — drums",
      "Recorded at the University of Salford",
      "Engineered and mixed by Stephen Kilpatrick at Soundfackery Productions",
      "Mastered by Gabriel Isac at ISAC Production",
    ],
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/@MichaelCretu-Trio",
      },
      {
        label: "Buy CD",
        href: "https://www.mycd.ro/index.php?id_product=7684&controller=product&id_lang=1",
      },
    ],
  },
  {
    id: "byzantium",
    title: "The Byzantium Connection",
    year: "2019",
    ensemble: "Michael Cretu",
    label: "Prima Facie",
    catalogue: "PFCD114",
    summary:
      "Music for double bass that traces a family of musicians from the eighteenth-century Danube to contemporary Manchester. Solo works, a duo with violin, and two electronic pieces.",
    dedication:
      "Dedicated to my family: my mother and father, my uncle, my partner, and my daughter Sofia.",
    tracks: [
      { title: "Rambi Rambi", duration: "4:21", note: "Traditional, arranged by Michael Cretu" },
      { title: "Dance and Improvisation", duration: "7:33" },
      { title: "Ah Ya Zain", duration: "4:47", note: "Traditional, arranged by Michael Cretu" },
      { title: "Sonata for solo Double Bass — I. Allegro", duration: "" },
      { title: "Sonata for solo Double Bass — II. Adagio Cantabile", duration: "" },
      { title: "Sonata for solo Double Bass — III. Andante con passione", duration: "" },
      { title: "Sonata for solo Double Bass — IV. Allegretto", duration: "" },
      { title: "Homeland for Violin and Double Bass — I. Largo", duration: "" },
      { title: "Homeland for Violin and Double Bass — II. Allegretto", duration: "" },
      { title: "Homeland for Violin and Double Bass — III. Largo", duration: "" },
      { title: "Homeland for Violin and Double Bass — IV. Andante pesante", duration: "" },
      { title: "Electronic Ah Ya Zain", duration: "8:34", note: "M. Cretu / S. Kilpatrick" },
      { title: "Electro Rambi Rambi", duration: "4:58", note: "M. Cretu / S. Kilpatrick; vocals Anikó Tóth" },
    ],
    credits: [
      "Michael Cretu — double bass, compositions",
      "Jisun Youn — violin (Homeland)",
      "Anikó Tóth — vocals (Electro Rambi Rambi)",
      "Recorded at the University of Salford",
      "Produced, engineered and mixed by Steve Kilpatrick",
      "Mastered by Phil Hardman",
      "Cover photograph by Shirlaine Forrest",
      "Realised with the support of the University of Salford",
    ],
    links: [
      {
        label: "Buy on Amazon",
        href: "https://a.co/d/072KmBTZ",
        primary: true,
      },
      {
        label: "Prima Facie",
        href: "https://ascrecords.com/primafacie/byzantium_connection.html",
      },
      {
        label: "Listen on Spotify",
        href: "https://open.spotify.com/album/47V3dHykVwS2wUCAIsM0n4",
      },
      {
        label: "Watch",
        href: "https://www.youtube.com/watch?v=sFspz3QvZ40",
      },
    ],
  },
];

export const featuredAlbum = albums.find((album) => album.featured) ?? albums[0];

export const quotes = [
  {
    text: "Those amazing deep sounds, fabulous.",
    source: "Suzy Klein, BBC Radio 3, In Tune",
  },
  {
    text: "Michael Cretu’s unique combination of skills and experience as a double bass player result in a fascinating and unclassifiable musical blend. Always approachable, his music sits between contemporary classical, jazz, and Balkan folk music, and is played with an emotional immediacy which communicates with audiences in a direct and unforgettable way.",
    source: "Prof. Alan E. Williams, University of Salford",
  },
  {
    text: "There is much here to enjoy, whether you like classical, jazz, improvisation, contemporary, or just enjoy hearing really good music. A great CD with much to offer.",
    source: "David Heyes, Bass Magazine, on The Byzantium Connection",
  },
  {
    text: "Cretu’s elegant and passionate mastery of the double bass, paired with the sentiment expressed during the talk, makes the moment a profound and rich testimony of history and culture.",
    source: "The Wee Review / TVBomb",
  },
] as const;

export const works = [
  {
    title: "Sonata for solo Double Bass",
    detail: "Four movements. Recorded on The Byzantium Connection.",
  },
  {
    title: "Homeland",
    detail: "For violin and double bass. Recorded with Jisun Youn.",
  },
  {
    title: "Eight Steps to Eternity",
    detail: "Premiered in Manchester; noted by the Manchester Evening News.",
  },
  {
    title: "The Wolf, the Bear and the Shepherd",
    detail: "Concert work for double bass.",
  },
  {
    title: "Paganini, Caprice No. 24",
    detail: "Transcription and recording for solo double bass.",
  },
  {
    title: "Suite for the RNCM New Music Festival",
    detail: "Commissioned in 2019. Around forty minutes for chamber orchestra, spoken word, and material from Roma, Kurdish and Pakistani traditions, written for MIRO.",
  },
  {
    title: "Work for the Josef Prunner International Double Bass Competition",
    detail: "Commissioned by the Bucharest Conservatoire.",
  },
  {
    title: "Music for Romanian National Radio",
    detail: "Finalist, Prix Europa 2013.",
  },
  {
    title: "Thrasher",
    detail: "Score for a play that sold out at the Royal Exchange, Manchester, and Camden People’s Theatre, London.",
  },
  {
    title: "Burnt",
    detail: "Live soundtrack. “Fringe theatre at its best… a live soundtrack courtesy of double-bass maestro Michael Cretu.” — Ian Winterton, The Public Reviews.",
  },
];

export const publishers = [
  { name: "Liben Music Publishers", place: "Cincinnati, USA" },
  { name: "Recital Music", place: "United Kingdom" },
];

export const concerts = [
  {
    year: "2019",
    title: "BBC Radio 3, In Tune",
    place: "Live performance and conversation with Suzy Klein",
  },
  {
    year: "2019",
    title: "RNCM New Music Festival",
    place: "Commissioned suite with Manchester International Roots Orchestra",
  },
  {
    year: "2019",
    title: "Sofar Manchester",
    place: "Balkan Connection",
  },
  {
    year: "2019",
    title: "Góbéfest",
    place: "Duo with pianist Ed Barnwell",
  },
  {
    year: "2016",
    title: "Edinburgh Festival Fringe",
    place: "Roma Holocaust — talk and solo recital, St John’s Church",
  },
  {
    year: "2011–",
    title: "Romanian Cultural Institute",
    place: "Premieres in London and Paris; ongoing collaboration",
  },
];

export const venues = [
  "Royal Northern College of Music, Manchester",
  "Bridgewater Hall, Manchester",
  "Manchester Cathedral",
  "Royal Exchange, Manchester",
  "Royal Academy of Music, London",
  "King’s Place, London",
  "Purcell Room, London",
  "St James Piccadilly, London",
  "Queen’s Hall, Edinburgh Festival",
  "HOME, Manchester",
  "Tara Arts, London",
];

export const pressItems = [
  {
    title: "Michael Cretu Releases New Album ‘The Byzantium Connection’",
    source: "Bass Magazine",
    href: "https://bassmagazine.com/michael-cretu-releases-new-album-the-byzantium-connection/",
    year: "2021",
  },
  {
    title: "The Byzantium Connection",
    source: "Prima Facie / ASC Records",
    href: "https://ascrecords.com/primafacie/byzantium_connection.html",
    year: "2019",
  },
  {
    title: "Roma Holocaust: Michael Cretu",
    source: "The Wee Review",
    href: "https://theweereview.com/review/roma-holocaust-michael-cretu/",
    year: "2016",
  },
  {
    title: "Michael Cretu",
    source: "Mapping Migrant Voices",
    href: "https://mappingmigrantvoices.co.uk/Voice/6986667b-de93-4dde-e3f1-08d91b877431",
    year: "",
  },
];
