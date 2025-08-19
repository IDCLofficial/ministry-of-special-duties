import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import { FaUsers, FaShieldHalved, FaHandshake } from 'react-icons/fa6';
import { FaHandsHelping } from 'react-icons/fa';

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.SERVICES} />

            {/* Main Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Special Duties provides strategic government interventions, emergency response coordination, inter-agency collaboration, and special project implementation to meet the unique needs of Imo State.
                        </p>
                    </AnimatedEntrance>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 - Emergency Response Coordination */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaShieldHalved className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Emergency Response Coordination
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Coordinating state-level responses to emergencies, natural disasters, and crises. We work closely with SEMA/NEMA and other emergency agencies to ensure rapid and effective response to critical situations across Imo State.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        State-level emergency response coordination
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Natural disaster preparedness and response
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Crisis management and coordination
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 2 - Special Projects Implementation */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaUsers className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Special Projects Implementation
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Overseeing the execution and supervision of high-impact, governor-mandated projects that fall outside routine ministerial duties. We ensure strategic project planning and successful implementation across various sectors.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        High-impact governor-mandated projects
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Cross-sectoral project coordination
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Strategic project planning and monitoring
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 3 - Inter-Ministerial Coordination */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[4]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaHandsHelping className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Inter-Ministerial Coordination
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Ensuring synergy and collaboration between ministries and agencies during cross-sectoral initiatives. We facilitate seamless coordination to maximize the effectiveness of government programs and policies.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Cross-ministerial collaboration facilitation
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Inter-agency coordination and synergy
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Government program effectiveness optimization
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 4 - Grassroots Development & Partnerships */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[5]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaHandsHelping className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Grassroots Development & Partnerships
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Partnered with Ex‑Iwuanyanwu National (Heartland FC alumni) for youth football development and entry pathways to create opportunities for young athletes.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Partnership with Heartland FC alumni
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Youth football development programs
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Career entry pathways for young athletes
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 5 - Mini-Football Promotion & Integration */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaHandshake className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Mini-Football Promotion & Integration
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Endorsed mini-football and partnered with the Imo State Mini Football Association to promote and integrate the sport in local programs across the state.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Mini-football endorsement and promotion
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Partnership with Mini Football Association
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Integration into local youth programs
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>
                    </div>
                </div>
            </section>
        </div>
    );
}
