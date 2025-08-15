import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import Image from "next/image";

// Special Projects
const SPECIAL_PROJECTS = [
    {
        number: 1,
        title: "Outpatient Clinic at Umuduru Health Complex",
        description: "Construction and commissioning of a modern outpatient clinic facility to improve healthcare delivery and accessibility for the community.",
        location: "Umuduru",
        category: "Health Infrastructure",
        status: "Completed",
        partners: "Ministry of Health, Community Partners",
        budget: "₦50M"
    },
    {
        number: 2,
        title: "Three-Block Market Stalls at Eke Amandugba",
        description: "Development of modern market infrastructure to boost local commerce and provide better trading facilities for vendors and customers.",
        location: "Eke Amandugba",
        category: "Commercial Infrastructure",
        status: "Completed",
        partners: "Ministry of Commerce, Local Community",
        budget: "₦75M"
    },
    {
        number: 3,
        title: "Technical College and Skills Acquisition Centre",
        description: "Establishment of a comprehensive technical education facility to enhance skills development and vocational training opportunities.",
        location: "Uburu-Ekwe",
        category: "Educational Infrastructure",
        status: "Completed",
        partners: "Ministry of Education, Skills Development Partners",
        budget: "₦120M"
    },
    {
        number: 4,
        title: "Civic Centre in Amucha Ebeise",
        description: "Construction of a modern civic centre to serve as a community hub for meetings, events, and administrative functions.",
        location: "Amucha Ebeise (Njaba LGA)",
        category: "Community Infrastructure",
        status: "Completed",
        partners: "Local Government, Community Leaders",
        budget: "₦80M"
    },
    {
        number: 5,
        title: "Health Centre and Solar-Powered Borehole",
        description: "Rehabilitation of health centre and installation of solar-powered borehole to improve healthcare services and water access.",
        location: "Okwelle Motherless Babies Home",
        category: "Health & Water Infrastructure",
        status: "Completed",
        partners: "Ministry of Health, Water Resources",
        budget: "₦60M"
    },
    {
        number: 6,
        title: "Community Primary School and Town Hall",
        description: "Construction of 4-classroom primary school and town hall to enhance educational opportunities and community governance.",
        location: "Ndiekwuru Imenze, Onuimo LGA",
        category: "Educational & Community Infrastructure",
        status: "Completed",
        partners: "Ministry of Education, Local Government",
        budget: "₦90M"
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="bg-white" />
            
            {/* Projects Description */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Special Projects & Interventions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover our transformative special projects and strategic interventions designed to address critical needs across Imo State. 
                            Each initiative reflects our commitment to building essential infrastructure, improving community services, and creating opportunities 
                            for sustainable development through cross-sectoral collaboration.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Updates</h3>
                        <p className="text-gray-600 mb-6">
                            Stay informed about our completed and ongoing special projects and strategic interventions 
                            across Imo State. Each project is designed to address critical community needs, improve essential services, and enhance quality of life through targeted interventions.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                            <li>Health infrastructure development and facility upgrades</li>
                            <li>Educational infrastructure and skills development programs</li>
                            <li>Community facilities and civic infrastructure projects</li>
                            <li>Commercial infrastructure and market development</li>
                            <li>Water and sanitation infrastructure improvements</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SPECIAL_PROJECTS.map((project, index) => (
                            <AnimatedEntrance 
                                key={project.number} 
                                {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                            >
                                <div className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                    <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={'/assets/no-image-lg.jpg'}
                                            alt={project.title}
                                            width={400}
                                            height={200}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {project.title}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                project.status === "Active" ? "bg-blue-100 text-blue-800" :
                                                project.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                                                project.status === "Completed" ? "bg-green-100 text-green-800" :
                                                project.status === "Ongoing" ? "bg-orange-100 text-orange-800" :
                                                "bg-gray-100 text-gray-800"
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        
                                        <div className="space-y-3 text-sm border-t border-gray-100 pt-4 mt-4">
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Location:</span>
                                                <span className="text-gray-900">{project.location}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Category:</span>
                                                <span className="text-gray-900">{project.category}</span>
                                            </div>
                                            {project.budget && (
                                                <div className="flex items-start">
                                                    <span className="text-gray-600 w-24 flex-shrink-0">Budget:</span>
                                                    <span className="text-gray-900 font-semibold">{project.budget}</span>
                                                </div>
                                            )}
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Partners:</span>
                                                <span className="text-gray-900">{project.partners}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <div className="flex items-center text-sm text-green-600">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
