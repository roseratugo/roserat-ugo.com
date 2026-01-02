export type TimelineEntry = {
  type: 'education' | 'work';
  title: { fr: string; en: string };
  organization: string;
  location?: string;
  period: { fr: string; en: string };
  description: { fr: string; en: string };
};

export const timelineData: TimelineEntry[] = [
  // Work experience
  {
    type: 'work',
    title: {
      fr: 'Chargé de production, communication et développement logiciel',
      en: 'Production, Communication & Software Development Manager',
    },
    organization: 'ACR Fers Aluminium',
    location: 'Ruaudin (72)',
    period: {
      fr: 'Août 2025 - Présent',
      en: 'August 2025 - Present',
    },
    description: {
      fr: "CDI suite à 3 ans d'alternance. Gestion de la production, communication d'entreprise et développement d'outils logiciels internes.",
      en: 'Full-time position after 3 years of work-study. Managing production, corporate communication and internal software tool development.',
    },
  },
  {
    type: 'work',
    title: {
      fr: 'Développeur Web (Alternance)',
      en: 'Web Developer (Work-Study)',
    },
    organization: 'ACR Fers Aluminium',
    location: 'Ruaudin (72)',
    period: {
      fr: '2022 - 2025',
      en: '2022 - 2025',
    },
    description: {
      fr: "3 ans d'alternance en développement web. Création et maintenance d'applications internes, développement de solutions métier.",
      en: '3 years of work-study in web development. Creation and maintenance of internal applications, development of business solutions.',
    },
  },
  // Education
  {
    type: 'education',
    title: {
      fr: "Bac+3 Concepteur d'application",
      en: "Bachelor's in Application Design",
    },
    organization: 'ekod',
    location: 'Le Mans',
    period: {
      fr: '2024 - 2025',
      en: '2024 - 2025',
    },
    description: {
      fr: "Formation en alternance. Conception et développement d'applications web et mobiles.",
      en: 'Work-study program. Web and mobile application design and development.',
    },
  },
  {
    type: 'education',
    title: {
      fr: 'Bac+2 Développeur Web',
      en: 'Associate Degree in Web Development',
    },
    organization: 'ekod',
    location: 'Le Mans',
    period: {
      fr: '2023 - 2024',
      en: '2023 - 2024',
    },
    description: {
      fr: 'Formation en alternance. Développement web front-end et back-end.',
      en: 'Work-study program. Front-end and back-end web development.',
    },
  },
  {
    type: 'education',
    title: {
      fr: "Brevet des Métiers d'Art - Art graphique et signalétique",
      en: "Diploma in Arts and Crafts - Graphic Art and Signage",
    },
    organization: 'Lycée',
    period: {
      fr: '2020 - 2022',
      en: '2020 - 2022',
    },
    description: {
      fr: 'Formation artistique spécialisée dans la création graphique et la signalétique.',
      en: 'Artistic training specialized in graphic creation and signage.',
    },
  },
  {
    type: 'education',
    title: {
      fr: 'CAP Signalétique Décors Graphique',
      en: 'Vocational Certificate in Graphic Signage and Decor',
    },
    organization: 'Lycée',
    period: {
      fr: '2018 - 2020',
      en: '2018 - 2020',
    },
    description: {
      fr: 'Formation initiale aux techniques de signalétique et de décors graphiques.',
      en: 'Initial training in signage and graphic decor techniques.',
    },
  },
];
