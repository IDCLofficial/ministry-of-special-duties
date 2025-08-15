export interface HeroConfig {
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}
 
export const HERO_CONFIGS = {
  HOME: {
    title: "Ministry of Special Duties",
    subtitle: "Delivering Strategic Interventions, Coordinating Special Mandates",
    description: "Championing emergency response, inter-agency collaboration, and strategic government initiatives to meet the special needs of Imo State.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },

  DEPARTMENT: {
    title: "Ministry of Special Duties",
    description: "Departments & Agencies",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Our Special Projects & Interventions",
    description: "Explore our completed and ongoing special projects including health facilities, educational infrastructure, community facilities, and strategic interventions that are transforming communities across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Our Leadership Team",
    description: "Meet Dr. (Sir) Chika Abazu, Commissioner for Special Duties, and the dedicated team committed to coordinating strategic interventions, emergency response, and special government mandates across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Programs & Services",
    description: "The Ministry of Special Duties offers comprehensive services including emergency response coordination, special projects implementation, inter-ministerial coordination, protocol and events management, and strategic planning to ensure effective government operations across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const,
  },
  
  NEWS: {
    title: "News & Announcements",
    description: "Stay updated with the latest news, press releases, and public notices from the Ministry of Sports and Youth Development, including sports events, athlete achievements, and youth empowerment initiatives.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Media Gallery & Success Stories",
    description: "Explore our visual documentation of sports events, infrastructure projects, athlete achievements, and youth empowerment success stories from across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Sports Events & Youth Programs",
    description: "Stay informed about upcoming sports competitions, youth marathons, talent identification programs, and community engagement events related to sports development and youth empowerment in Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Special Duties",
    description: "A dynamic arm of the Imo State Government, created to handle assignments that fall outside the direct scope of conventional ministries. We oversee strategic interventions, inter-governmental collaborations, disaster response, and implementation of high-level projects as directed by the Executive Governor.",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
