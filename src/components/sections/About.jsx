import React, {useState} from 'react';
import { Download,Code2, Sparkles } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import Fadein from '../animations/Fadein';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {

    //skills

    const skills = [
        { name: 'React.js', icon: SiReact, color: "#61DAFB" },
        { name: 'Next.js', icon: SiNextdotjs, color: "#000000" },
        { name: 'TypeScript', icon: SiTypescript, color: "#3178C6" },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: "#06B6D4" },
        { name: 'Node.js', icon: SiNodedotjs, color: "#339933" },
        { name: 'MongoDB', icon: SiMongodb, color: "#47A248" },
    ];
  return (
    <section id='about' className='relative py-20 bg-black overflow-hidden'>
        <RadialGradientBackground variant="about" />

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/*Main Grid*/}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
                {/*Left Column - content*/}
                <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-8'>
                        <Fadein delay={60}>
                            <div className='inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit'>
                                <Code2 className='w-4 h-4 text-primary'/>
                                <span className='text-sm text-primary font-medium'>
                                    Full-Stack Developer
                                </span>
                                <Sparkles className='w-4 h-4 text-primary'/>
                            </div>
                        </Fadein>
                        
                        <Fadein delay={100}>
                            <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
                                Crafting Digital Experiences with React.js
                            </h2>
                        </Fadein>

                        <Fadein delay={200}>
                            <div className='flex flex-col gap-4'>
                                {PERSONAL_INFO.bio.map((paragraph, index) => (
                                    <p key={index} className='text-base text-white/70 leading-relaxed'>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </Fadein>
                    </div>

                    <Fadein delay={300}>
                        <div className='grid grid-cols-3 gap-8'>
                            {ABOUT_STATS.map((stat, index) => (
                                <div key={index} className='relative'>
                                    <div className='absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full'></div>
                                    <div className='text-3xl font-normal text-white mb-2 font-mono'>
                                        {stat.value}
                                    </div>
                                    <p className='text-sm text-white/60 leading-snug'>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Fadein>

                    <Fadein delay={460}>
                        <button
                            onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                            className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                        >
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300"/>
                            <span>
                                Download Resume
                            </span>
                        </button>
                    </Fadein>
                </div>
            </div>

        </div>

    </section>
)
}

export default About
