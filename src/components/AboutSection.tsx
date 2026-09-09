import React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import { Compass, Sparkles, Wrench, Plane, Music, Bot } from "lucide-react";

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenJourney: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
  onOpenJourney,
}) => {
  // Funny & charismatic self-intro matching content.txt "(Phải gthieu funny)"
  const animatedStoryText =
    "Hi, welcome to my website! I'm Minh — a 3D creator and hardware addict who turns coffee and CAD models into championship robots, deep-diving microplastic drones, and full-scale flight cockpits. When I'm not haggling for aluminum in Hanoi's tool markets, you'll find me donating STEM labs or jamming 70s rock on an electric guitar. Let's build something unforgettable together!";

  const funnyHighlights = [
    {
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      title: "Market Scraps to Worlds",
      text: "Started out haggling for scrap gears in Hanoi tool markets; ended up 2nd globally at FTC Worlds in Houston, Texas.",
    },
    {
      icon: <Plane className="w-5 h-5 text-sky-400" />,
      title: "Bedroom Aviator & Landlord",
      text: "Built a 1:1 scale DIY Airbus A320 cockpit in my room using wood and 3D prints, and rent it out by the hour to fund my hardware habit.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      title: "Undersea Space Pitcher",
      text: "Co-built an autonomous underwater drone mapping microplastics and pitched it to scientists at NASA Johnson Space Center.",
    },
    {
      icon: <Music className="w-5 h-5 text-amber-400" />,
      title: "Van Mieu Rock Enthusiast",
      text: "Plays vintage 70s rock on an electric guitar near Van Mieu coffee, inspired by MIT electrical engineers who build amplifiers.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* 4 decorative 3D images positioned absolutely in corners */}
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Decorative 3D moon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="Decorative 3D object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          loading="lazy"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Decorative 3D lego"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          loading="lazy"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="Decorative 3D shape group"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          loading="lazy"
        />
      </FadeIn>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center z-10 max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-8 sm:h-12 md:h-14" />

        {/* Animated paragraph: character-by-character scroll opacity */}
        <div className="max-w-[620px] mx-auto px-4">
          <AnimatedText
            text={animatedStoryText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-base sm:text-lg md:text-xl"
          />
        </div>

        {/* Funny & Authentic Profile Highlights */}
        <FadeIn
          delay={0.25}
          y={30}
          className="w-full mt-12 mb-10 max-w-4xl px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {funnyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/70 leading-relaxed pl-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Action buttons: Contact Button + Journey Story Trigger */}
        <FadeIn
          delay={0.3}
          y={20}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <ContactButton onClick={onOpenContact} label="Contact Me" />
          <button
            onClick={onOpenJourney}
            type="button"
            className="px-6 py-3 rounded-full border border-white/20 text-[#D7E2EA] hover:border-white/50 hover:bg-white/5 transition-all text-xs sm:text-sm font-medium tracking-wider uppercase flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-purple-400" />
            <span>Explore My Full Journey & Story</span>
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
