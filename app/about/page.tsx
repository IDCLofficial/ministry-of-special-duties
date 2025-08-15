import Image from "next/image";
import { 
  FaRegEye, FaBullseye, FaEye, FaClipboardCheck, FaShieldHalved, FaUsers,
  FaBuilding, FaFileContract,
  FaChartLine, FaHouse, FaMapPin, FaFileSignature, FaLandmark, FaCity,
  FaTree
} from "react-icons/fa6";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1 max-h-[400px] overflow-hidden rounded-lg">
                                <Image
                                    src="/photos/Photo - Ministry of Special Duties.jpg"
                                    alt="Imo State Ministry of Special Duties – Overview"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300 object-cover object-[30%_30%] -mt-20"
                                />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry of Special Duties, Imo State plays a strategic role in executing priority mandates of the state government. We handle high-impact assignments, emergency responses, inter-agency coordination, and special interventions that demand urgent and cross-functional delivery.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry of Special Duties is a dynamic arm of the Imo State Government, created to handle assignments that fall outside the direct scope of conventional ministries. It oversees strategic interventions, inter-governmental collaborations, disaster response, and implementation of high-level projects as directed by the Executive Governor.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    Our ministry acts as a bridge between the Governor's special directives and the implementing agencies, ensuring that every assignment is executed with precision, urgency, and public impact across Imo State.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission & Core Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Our Guiding Principles</h2>
                        <div className="mt-4 h-1 w-24 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <FaRegEye className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To be a dynamic and responsive arm of government, delivering timely special assignments and interventions that strengthen governance, promote resilience, and enhance the wellbeing of all citizens across Imo State.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Mission Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <FaBullseye className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    To coordinate and implement the Governor's special mandates through strategic planning, emergency response, inter-agency collaboration, and efficient execution of high-impact projects ensuring fast, transparent, and citizen-focused service delivery throughout Imo State.
                                </p>
                            </div>
                        </AnimatedEntrance>
                    </div>

                    {/* Core Values */}
                    <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={STAGGER_DELAYS.MEDIUM[2]}>
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Integrity", description: "We maintain accountability and transparency in all our operations.", icon: <FaEye className="w-6 h-6 text-green-600" /> },
                                    { title: "Responsiveness", description: "We act swiftly to emergencies and special assignments.", icon: <FaClipboardCheck className="w-6 h-6 text-green-600" /> },
                                    { title: "Collaboration", description: "We work closely with ministries, agencies, and communities to drive results.", icon: <FaShieldHalved className="w-6 h-6 text-green-600" /> },
                                    { title: "Service", description: "We put the welfare of the people at the center of every mandate.", icon: <FaUsers className="w-6 h-6 text-green-600" /> },
                                    { title: "Excellence", description: "We uphold professionalism and high standards in project delivery.", icon: <FaChartLine className="w-6 h-6 text-green-600" /> }
                                ].map((value, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            {value.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedEntrance>
                </div>
            </section>

            {/* Commissioner Profile Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Dr. (Sir) Chika Abazu
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Commissioner, Ministry of Special Duties
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                A highly accomplished Public Health Physician with over 22 years of distinguished service in the Federal Civil Service, rising to the rank of Director. Throughout his career, he has demonstrated integrity, dedication, and a passion for excellence in service delivery for the benefit of humanity.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                He holds degrees from Abia State University, Nigeria Defence Academy Kaduna, West Virginia University, USA, and Emory University, USA. He is happily married and blessed with children.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                A God-fearing, honest, hardworking, and focused leader who does not make empty promises. Under his leadership, the ministry coordinates special assignments and handles strategic government interventions that cut across various sectors in the state, ensuring precision, urgency, and public impact in all mandates.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[3/4]">
                            <Image
                                src="/photos/Dr. Sir Chika Abazu – Commissioner for Special Duties.jpg"
                                alt="Dr. (Sir) Chika Abazu – Commissioner for Special Duties"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Our Departments
                            </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Emergency Management and Disaster Response */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaFileContract className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Emergency Management & Disaster Response
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Responsible for coordinating state-level responses to emergencies, natural disasters, and crises (often works closely with SEMA/NEMA).
                            </p>
                        </div>

                        {/* Special Projects & Interventions */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaChartLine className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Special Projects & Interventions
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Oversees the execution and supervision of high-impact, governor-mandated projects that fall outside routine ministerial duties.
                            </p>
                        </div>

                        {/* Inter-Ministerial Coordination */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaBuilding className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Inter-Ministerial Coordination
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Ensures synergy between various ministries and agencies during the implementation of cross-sectoral initiatives.
                            </p>
                        </div>

                        {/* Protocol and Events Management */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaHouse className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Protocol & Events Management
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Handles state ceremonies, official events, and the Governor's special engagements requiring logistical coordination.
                            </p>
                        </div>

                        {/* Strategic Planning & Monitoring */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaShieldHalved className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Strategic Planning & Monitoring
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Focuses on policy formulation, project evaluation, and performance tracking of special interventions.
                            </p>
                        </div>

                        {/* Administration and Finance */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaBuilding className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Administration & Finance
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Manages internal human resources, budgeting, and procurement for the ministry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Goals</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Special Duties is committed to delivering timely special assignments and interventions that strengthen governance, promote resilience, and enhance the wellbeing of all citizens across Imo State through strategic planning, emergency response, and inter-agency collaboration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Enhance emergency response coordination capabilities across all 27 Local Government Areas in Imo State.",
                            "Establish comprehensive inter-ministerial coordination framework for cross-sectoral initiatives.",
                            "Complete additional health infrastructure projects including 3 more community health centres.",
                            "Develop strategic planning and monitoring systems for all special government interventions.",
                            "Implement protocol and events management systems for state ceremonies and official functions.",
                            "Strengthen disaster response capabilities through partnerships with SEMA and NEMA.",
                            "Execute high-impact governor-mandated projects outside routine ministerial duties.",
                            "Build additional educational infrastructure including 2 more technical colleges across the state.",
                            "Establish community boreholes and water infrastructure in 10 additional communities.",
                            "Develop administration and finance systems to support ministry operations and procurement processes."
                        ].map((goal, index) => (
                            <AnimatedEntrance
                                key={index}
                                {...ANIMATION_PRESETS.CARD_FADE_UP}
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commissioner's Priority Areas Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Priority Areas & Planned Initiatives</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Dr. (Sir) Chika Abazu's strategic focus areas and planned initiatives for the Ministry of Special Duties.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Priority Areas */}
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Priority Areas</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Legislative representation",
                                    "Accountability",
                                    "Education",
                                    "Youth and women empowerment",
                                    "Infrastructure",
                                    "Power",
                                    "Water",
                                    "Health",
                                    "Sports",
                                    "Social welfare",
                                    "Security"
                                ].map((area, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        <span className="text-gray-700">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Planned Initiatives */}
                        <div className="bg-green-50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Planned Initiatives</h3>
                            <div className="space-y-3">
                                {[
                                    "Sponsor impactful bills",
                                    "Ensure transparent use of constituency funds",
                                    "Build modern schools",
                                    "Establish training hubs",
                                    "Restore electricity",
                                    "Launch the Greater Ideato Water Scheme",
                                    "Construct health centres",
                                    "Develop sports facilities",
                                    "Provide elderly care through 'Kitbuz'-styled settlements",
                                    "Strengthen local security",
                                    "Attract funding from donor agencies"
                                ].map((initiative, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                                        <span className="text-gray-700">{initiative}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the dedicated leaders driving strategic interventions, emergency response, and special government initiatives in Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Honourable Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-300 transition-all hover:shadow-xl">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden border-b border-slate-300">
                                <Image
                                    src="/photos/Dr. Sir Chika Abazu – Commissioner for Special Duties.jpg"
                                    alt="Dr. (Sir) Chika Abazu – Commissioner for Special Duties"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Dr. (Sir) Chika Abazu</h3>
                                <p className="text-green-700 font-medium mt-1">Commissioner</p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-300 transition-all hover:shadow-xl">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden border-b border-slate-300">
                                <Image
                                    src="/photos/Ogunsanya Bimbola Kehinde GEM, FCAI, JP.jpeg"
                                    alt="Ogunsanya Bimbola Kehinde GEM, FCAI, JP."
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Ogunsanya Bimbola Kehinde GEM, FCAI, JP.</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                                The Ministry of Special Duties operates through a well-defined hierarchical structure designed to effectively coordinate special assignments, emergency responses, and strategic government interventions across Imo State. Our organizational setup ensures efficient service delivery, inter-agency collaboration, and rapid response to special mandates from the Executive Governor.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/photos/Structure - Ministry of Special Duties.jpg"
                                alt="Ministry of Special Duties - Organizational Structure"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Emergency Management and Disaster Response Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaLandmark className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Emergency Management & Disaster Response</h3>
                            <p className="text-sm text-gray-400">Responsible for coordinating state-level responses to emergencies, natural disasters, and crises (often works closely with SEMA/NEMA).</p>
                        </div>

                        {/* Special Projects & Interventions Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaMapPin className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Special Projects & Interventions</h3>
                            <p className="text-sm text-gray-400">Oversees the execution and supervision of high-impact, governor-mandated projects that fall outside routine ministerial duties.</p>
                        </div>

                        {/* Inter-Ministerial Coordination Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaCity className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Inter-Ministerial Coordination</h3>
                            <p className="text-sm text-gray-400">Ensures synergy between various ministries and agencies during the implementation of cross-sectoral initiatives.</p>
                        </div>

                        {/* Protocol and Events Management Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaHouse className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Protocol & Events Management</h3>
                            <p className="text-sm text-gray-400">Handles state ceremonies, official events, and the Governor's special engagements requiring logistical coordination.</p>
                        </div>

                        {/* Strategic Planning & Monitoring Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaClipboardCheck className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Strategic Planning & Monitoring</h3>
                            <p className="text-sm text-gray-400">Focuses on policy formulation, project evaluation, and performance tracking of special interventions.</p>
                        </div>

                        {/* Administration and Finance Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaFileSignature className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Administration & Finance</h3>
                            <p className="text-sm text-gray-400">Manages internal human resources, budgeting, and procurement for the ministry.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
