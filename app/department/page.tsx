import HeroSection from "@/components/HeroSection";
import TabContentSystem from "../components/TabContentSystem";
import { HERO_CONFIGS } from "@/utils/constants/heroSections";

export default function Department() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <HeroSection  {...HERO_CONFIGS.DEPARTMENT}/> 

            {/* Main Content Section with Tab System */}
            <TabContentSystem 
                sidebarTitle="Our Departments"
                tabs={[
                    {
                        id: "emergency-management",
                        label: "Emergency Management & Disaster Response",
                        content: {
                            title: "Emergency Management and Disaster Response Department",
                            imageSrc: "/photos/Disaster Response.jpg",
                            imageAlt: "Emergency Management and Disaster Response Department",
                            description: "Responsible for coordinating state-level responses to emergencies, natural disasters, and crises (often works closely with SEMA/NEMA).",
                            additionalInfo: [
                                "Coordination of state-level emergency responses",
                                "Natural disaster preparedness and response planning",
                                "Crisis management and coordination",
                                "Collaboration with SEMA/NEMA and other emergency agencies",
                                "Emergency communication and public alert systems",
                                "Disaster risk assessment and mitigation strategies"
                            ]
                        }
                    },
                    {
                        id: "special-projects",
                        label: "Special Projects & Interventions",
                        content: {
                            title: "Special Projects & Interventions Department",
                            imageSrc: "/photos/Photo - Special Projects.jpeg",
                            imageAlt: "Special Projects & Interventions Department",
                            description: "Oversees the execution and supervision of high-impact, governor-mandated projects that fall outside routine ministerial duties.",
                            additionalInfo: [
                                "Execution of high-impact governor-mandated projects",
                                "Supervision of special government interventions",
                                "Cross-sectoral project coordination",
                                "Strategic project planning and implementation",
                                "Monitoring and evaluation of special initiatives",
                                "Partnership development for special projects"
                            ]
                        }
                    },
                    {
                        id: "inter-ministerial-coordination",
                        label: "Inter-Ministerial Coordination",
                        content: {
                            title: "Inter-Ministerial Coordination Department",
                            imageSrc: "/photos/Photo - Inter-Ministerial Coordination.jpg",
                            imageAlt: "Inter-Ministerial Coordination Department",
                            description: "Ensures synergy between various ministries and agencies during the implementation of cross-sectoral initiatives.",
                            additionalInfo: [
                                "Coordination between various ministries and agencies",
                                "Implementation of cross-sectoral government initiatives",
                                "Inter-agency collaboration and communication",
                                "Synergy development for government programs",
                                "Cross-ministerial project management",
                                "Policy alignment and harmonization"
                            ]
                        }
                    },
                    {
                        id: "protocol-events",
                        label: "Protocol & Events Management",
                        content: {
                            title: "Protocol and Events Management Department",
                            imageSrc: "/photos/Photo - Protocol & Events Management.jpg",
                            imageAlt: "Protocol and Events Management Department",
                            description: "Handles state ceremonies, official events, and the Governor's special engagements requiring logistical coordination.",
                            additionalInfo: [
                                "Organization of state ceremonies and official events",
                                "Coordination of the Governor's special engagements",
                                "Protocol management for government functions",
                                "Logistical coordination for official events",
                                "Event planning and execution services",
                                "Ceremonial protocol and etiquette management"
                            ]
                        }
                    },
                    {
                        id: "strategic-planning-monitoring",
                        label: "Strategic Planning & Monitoring",
                        content: {
                            title: "Strategic Planning & Monitoring Department",
                            imageSrc: "/photos/Photo - Strategic Planning & Monitoring.jpg",
                            imageAlt: "Strategic Planning & Monitoring Department",
                            description: "Focuses on policy formulation, project evaluation, and performance tracking of special interventions.",
                            additionalInfo: [
                                "Policy formulation for special government interventions",
                                "Project evaluation and performance assessment",
                                "Performance tracking of special initiatives",
                                "Strategic planning for ministry operations",
                                "Monitoring and evaluation of special projects",
                                "Data analysis and reporting for decision-making"
                            ]
                        }
                    },
                    {
                        id: "administration-finance",
                        label: "Administration & Finance",
                        content: {
                            title: "Administration and Finance Department",
                            imageSrc: "/photos/Photo - Administration & Finance.jpg",
                            imageAlt: "Administration and Finance Department",
                            description: "Manages internal human resources, budgeting, and procurement for the ministry.",
                            additionalInfo: [
                                "Internal human resources management",
                                "Budget preparation and financial planning",
                                "Procurement and supply chain management",
                                "Financial reporting and accountability",
                                "Administrative support services",
                                "Staff development and training coordination"
                            ]
                        }
                    }
                ]}
            />
        </div>
    );
}
