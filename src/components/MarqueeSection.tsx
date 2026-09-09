import React, { useRef, useState, useEffect } from 'react';

const ROW1_IMAGES = [
  '/img/FTC quoc te/3T3A1477.jpg',
  '/img/buồng lái/1K1MLI9RV_5836GL.jpg',
  '/img/Conrad/IMG_6991.JPG',
  '/img/Gart/IMG_6980.JPG',
  '/img/Wico/GYS/IMG_6940.JPG',
  '/img/FTC trong nuoc/1K1V2S7KO_5836GL.JPG',
  '/img/Stembridge/Trường Xã Đàn/IMG_7172.JPG',
  '/img/Gart expo 2025/1JQ6RU3Q4_5FNL7B.JPG',
  '/img/Ảnh thực tập/Tri Nam/1JSJ402NC_5836GL.JPG',
  '/img/Hoithao_HCM/IMG_5638.JPG',
  '/img/ảnh hồi bé/IMG_3622.jpg',
];

const ROW2_IMAGES = [
  '/img/Conrad/IMG_6995.JPG',
  '/img/FTC quoc te/1.jpg',
  '/img/buồng lái/1K1MLI9TI_5836GL.jpg',
  '/img/Gart Camp 2025/IMG_6974.JPG',
  '/img/Wico/GYS/IMG_6948.JPG',
  '/img/FTC Thanh Hoa/IMG_6820.JPG',
  '/img/Stembridge/20260203_154406_1.jpg',
  '/img/Gart/IMG_6982.JPG',
  '/img/Gart expo 2025/IMG_6986.JPG',
  '/img/Ảnh thực tập/Tri Nam/1JSJ402PH_5836GL.JPG',
  '/img/Hoithao_HCM/IMG_5640.JPG',
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Row 1: first 11 images tripled
  const row1Tripled = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
  // Row 2: remaining 10 images tripled
  const row2Tripled = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((url, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#18191c] border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={url}
                alt={`Project highlight 1-${(idx % ROW1_IMAGES.length) + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((url, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#18191c] border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={url}
                alt={`Project highlight 2-${(idx % ROW2_IMAGES.length) + 1}`}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
