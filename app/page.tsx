import Image from "next/image";
import StatisticsSection from "../components/StatisticsSection";
import HeroSection from "../components/HeroSection";
import AnimatedEntrance from "../components/AnimatedEntrance";
import { HOME_STATISTICS } from "../utils/constants/statistics";
import { HERO_CONFIGS } from "../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaLightbulb, FaHandsHolding, FaUsers } from "react-icons/fa6";
import Link from "next/link";
import CustomImage from "./components/CustomImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Hero Section */}
      <HeroSection {...HERO_CONFIGS.HOME}>
        <Link href="/about">
            <button className="bg-white/90 hover:bg-white text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium active:scale-95 transition-colors">
            Learn About Us
            </button>
          </Link>
      </HeroSection>

      {/* Statistics Section */}
      <StatisticsSection statistics={HOME_STATISTICS} />

      {/* Ministry Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1 max-h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/photos/Photo - Ministry of Special Duties.jpg"
                alt="Imo State Ministry of Special Duties – Overview"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300 object-cover object-[30%_30%] -mt-20"
              />
            </AnimatedEntrance>
            <div className="grid gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Welcome to the official website of the Ministry of Special Duties, Imo State.
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We are committed to coordinating special assignments and handling strategic government interventions that cut across various sectors in the state. Whether responding to emergencies, overseeing special projects, or facilitating high-impact initiatives, our role is central to the smooth operation of government and the achievement of state-wide development goals. Our ministry acts as a bridge between the Governor&rsquo;s special directives and the implementing agencies, ensuring that every assignment is executed with precision, urgency, and public impact.
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <Link href="/about">
                  <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer w-fit text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                    Learn More About Our Services
                  </button>
                </Link>
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Commissioner Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-32 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  A Message from the Honorable Commissioner
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. (Sir) Chika Abazu</h3>
                <p className="text-gray-600 text-sm mb-4">Commissioner, Ministry of Special Duties</p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Welcome to the Ministry of Special Duties, Imo State. As a highly accomplished Public Health Physician with over 22 years of distinguished service in the Federal Civil Service, I am committed to coordinating special assignments and handling strategic government interventions that cut across various sectors in our state.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Whether responding to emergencies, overseeing special projects, or facilitating high-impact initiatives, our role is central to the smooth operation of government and the achievement of state-wide development goals. Our ministry acts as a bridge between the Governor&rsquo;s special directives and the implementing agencies.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  As a God-fearing, honest, hardworking, and focused leader who does not make empty promises, I am dedicated to ensuring that every assignment is executed with precision, urgency, and public impact. Together, we are strengthening governance, promoting resilience, and enhancing the wellbeing of all citizens across Imo State.
                </p>
              </AnimatedEntrance>
              {/* <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                  Read Full Bio
                </button>
              </AnimatedEntrance> */}
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP}>
                  <Image
                    src="/photos/Dr. Sir Chika Abazu – Commissioner for Special Duties.jpg"
                    alt="Dr. (Sir) Chika Abazu – Commissioner for Special Duties"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Our Core Programs
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
              Empowering youth and developing sporting excellence through comprehensive programs, talent identification, infrastructure development, and strategic partnerships across Imo State
            </p>
          </AnimatedEntrance>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Talent Identification & Development */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaLightbulb size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Talent Identification & Development</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Identifying young talents in sports and supporting them with training, exposure, and mentorship for local and international careers
                </p>
                <Link href="/services" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* Youth Empowerment Programs */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaHandsHolding size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Youth Empowerment Programs</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Engaging youth in empowerment programs, entrepreneurship, and leadership training while coordinating NYSC affairs
                </p>
                <Link href="/services" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* Sports Infrastructure Development */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaUsers size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Sports Infrastructure Development</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Overseeing construction, renovation, and maintenance of stadiums and sports complexes across Imo State
                </p>
                <Link href="/projects" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* Capacity Building & Training */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaHandsHolding size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Capacity Building & Training</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Empowering School Games Masters and strengthening grassroots sports delivery through comprehensive training programs
                </p>
                <Link href="/services" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {/* <LatestNews /> */}

      {/* Our Partners Section */}
      <section className="py-8 sm:py-12 md:py-16 relative bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/pattern.svg"
            alt="Background Pattern"
            width={1440}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-20 relative z-10">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our Key Partners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Collaborating with government agencies, emergency response organizations, development partners, and inter-ministerial bodies to deliver strategic interventions, emergency coordination, and special government mandates across Imo State
            </p>
          </AnimatedEntrance>
          <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 sm:gap-8 items-center">
            {[{ name: 'State Emergency Management Agency (SEMA)', logo: '/photos/Photo - SEMA.jpg' },
              { name: 'National Emergency Management Agency (NEMA)', logo: '/photos/Photo - NEMA.png' },
              { name: 'Inter-Ministerial Coordination Committee', logo: '/assets/ng-logo.png' },
            ].map((partner, index) => (
              <AnimatedEntrance
                key={partner.name}
                {...ANIMATION_PRESETS.CARD_FADE_UP}
                delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                className="flex items-center justify-center"
              >
                <div className="text-center hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="bg-white p-2 rounded-lg shadow-sm aspect-[1/1] h-28">
                    <CustomImage
                      src={partner.logo}
                      alt={`Partner ${partner.name}`}
                      width={100}
                      title={`Partner ${partner.name}`}
                      height={60}
                      className="w-full h-full object-contain"
                    />
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
