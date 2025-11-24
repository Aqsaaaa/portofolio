import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useRef } from 'react';

const Technologies = () => {
  const ref = useRef(null);

  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

  return (
    <section id="technologies" className="py-20" ref={ref}>
      <div className="">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technologies</h2>
          <div className="w-24 h-1 bg-[#47c5fb] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={60}
          gap={50}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="black"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default Technologies;
