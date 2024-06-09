import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  yourlogo2,
  yourlogo3,
  yourlogo4,
  yourlogo5,
} from '../assets'

export const navigation = [
  {
    id: '0',
    title: 'Funciones',
    url: '#features',
  },
  {
    id: '1',
    title: 'Precios',
    url: '#pricing',
  },
  {
    id: '2',
    title: 'Como usar',
    url: '#how-to-use',
  },
  {
    id: '3',
    title: 'Hoja de ruta',
    url: '#roadmap',
  },
  {
    id: '4',
    title: 'Empezar',
    url: '/home',
    onlyMobile: true,
  },
]

export const navigationHome = [
  {
    id: '1',
    title: 'Jobs',
    url: '/jobs',
  },
  {
    id: '2',
    title: 'Create',
    url: '/create',
  },
  {
    id: '3',
    title: 'Profile',
    url: '/profile',
  },
  {
    id: '4',
    title: 'Empezar',
    url: '/home',
    onlyMobile: true,
  },
]

export const heroIcons = [homeSmile, file02, searchMd, plusSquare]

export const notificationImages = [notification4, notification3, notification2]

export const companyLogos = [
  yourlogo,
  yourlogo2,
  yourlogo3,
  yourlogo4,
  yourlogo5,
]

export const devcodeServices = [
  'Busqueda de empleo',
  'Solicitud de empleo',
  'Charla con empresas',
]

export const devcodeServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
]

export const LANGUAGES = {
  javascript: '18.15.0',
  typescript: '5.0.3',
  python: '3.10.0',
  java: '15.0.2',
  go: '1.16.2',
  rust: '1.68.2',
}

export const CODE_SNIPPETS = {
  javascript: `\nfunction sum(n,n2) {\n\t// Aqui va tu codigo
  \n}\n\nconsole.log(sum(2,3));\n`,
  typescript: `\nfunction sum(name: string): void {\n\tconsole.log("¡" + "Hola, " + name + "!");\n}\n\ngreet("Fran");\n`,
  python: `\ndef greet(name):\n\tprint("¡Hola, " + name + "!")\n\ngreet("Fran")\n`,
  java: `\npublic class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("¡Hola, Mundo!");\n\t}\n}\n`,
  go: `\npackage main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("¡Hola, Mundo!")\n}\n`,
  rust: `\nfn main() {\n\tprintln!("¡Hola, Mundo!");\n}\n`,
}

export const roadmap = [
  {
    id: '0',
    title: 'DevCode',
    text: 'Nuestra aplicación de DevCode te permite buscar y compartir código, así como colaborar con otros desarrolladores en proyectos de código abierto.',
    date: 'Mayo 2024',
    status: 'done',
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: '1',
    title: 'Inteligencia Artificial',
    text: 'Integracion de IA para generar preguntas personalizadas y desafiantes que te ayudarán a encontrar a los mejores candidatos.',
    date: 'Mayo 2024',
    status: 'progress',
    imageUrl: roadmap2,
  },
  {
    id: '2',
    title: 'Entrevista Tecnica',
    text: 'Nuestro sistema de entrevista de trabajo permite a los candidatos realizar entrevistas técnicas personalizadas y desafiantes para demostrar sus habilidades técnicas y encontrar el trabajo de sus sueños.',
    date: 'May 2023',
    status: 'done',
    imageUrl: roadmap3,
  },
  {
    id: '3',
    title: 'Integraciones de terceros',
    text: 'Integraciones de terceros para mejorar la experiencia del usuario y permitir a los usuarios acceder a sus herramientas favoritas directamente desde nuestra aplicación.',
    date: 'May 2023',
    status: 'progress',
    imageUrl: roadmap4,
  },
]

export const collabText =
  'Nuestro sistema de entrevista de trabajo utiliza la inteligencia artificial para generar preguntas personalizadas y desafiantes que te ayudarán a encontrar a los mejores candidatos.'

export const collabContent = [
  {
    id: '0',
    title: 'Entrevista rrhh',
    text: collabText,
  },
  {
    id: '1',
    title: 'Entrevista técnica',
  },
  {
    id: '2',
    title: 'Conecta con las empresas',
  },
]

export const collabApps = [
  {
    id: '0',
    title: 'Figma',
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: '1',
    title: 'Notion',
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: '2',
    title: 'Discord',
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: '3',
    title: 'Slack',
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: '4',
    title: 'Photoshop',
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: '5',
    title: 'Protopie',
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: '6',
    title: 'Framer',
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: '7',
    title: 'Raindrop',
    icon: raindrop,
    width: 38,
    height: 32,
  },
]

export const pricing = [
  {
    id: '0',
    title: 'Basico',
    description: 'Conecta con las empresas y encuentra trabajo',
    price: '0',
    features: [
      'Busqueda de empleo',
      'Solicitud de empleo',
      'Charla con empresas',
    ],
  },
  {
    id: '1',
    title: 'Premium',
    description: 'Mejora tu proceso de entrevista',
    price: '9.99',
    features: [
      'Entrevista técnica personalizada',
      'Certificado de entrevista técnica',
      'Charla con empresas de tecnología líderes',
    ],
  },
  {
    id: '2',
    title: 'Enterprise',
    description: 'Para empresas y equipos de reclutamiento',
    price: null,
    features: [
      'Entrevista técnica personalizada para tu empresa',
      'Panel de control de reclutamiento personalizado',
      'Soporte prioritario 24/7',
    ],
  },
]

export const benefits = [
  {
    id: '0',
    title: 'Entrevista técnica',
    text: 'Nuestro sistema de IA genera preguntas de entrevista técnica personalizadas y desafiantes para ayudarte a encontrar a los mejores candidatos.',
    backgroundUrl: benefitCard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '1',
    title: 'Facilidad de uso',
    text: 'Nuestro chatbot es fácil de usar y se integra perfectamente con tus herramientas favoritas, como Discord, Slack y Figma.',
    backgroundUrl: benefitCard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '2',
    title: 'Conecta con las empresas',
    text: 'Nuestro chatbot te conecta con empresas de todo el mundo que buscan talento técnico, lo que te permite encontrar oportunidades de trabajo emocionantes.',
    backgroundUrl: benefitCard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: '3',
    title: 'Retos de algoritmos',
    text: 'Nuestro sistema de retos de algoritmos te permite mejorar tus habilidades técnicas y mantenerte al día con las últimas tendencias de la industria.',
    backgroundUrl: benefitCard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '4',
    title: 'Búsqueda rápida',
    text: 'Nuestro chatbot te permite buscar rápidamente información sobre temas técnicos y obtener respuestas precisas y detalladas en cuestión de segundos.',
    backgroundUrl: benefitCard5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '5',
    title: 'Mejora continua',
    text: 'Nuestro sistema de retos de algoritmos te permite mejorar tus habilidades técnicas y mantenerte al día con las últimas tendencias de la industria.',
    backgroundUrl: benefitCard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
]

export const socials = [
  {
    id: '0',
    title: 'Discord',
    iconUrl: discordBlack,
    url: '#',
  },
  {
    id: '1',
    title: 'Twitter',
    iconUrl: twitter,
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    iconUrl: instagram,
    url: '#',
  },
  {
    id: '3',
    title: 'Telegram',
    iconUrl: telegram,
    url: '#',
  },
  {
    id: '4',
    title: 'Facebook',
    iconUrl: facebook,
    url: '#',
  },
]
