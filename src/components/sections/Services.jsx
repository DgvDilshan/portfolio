import React from 'react'
import {services} from '../../data/services';
import * as Icons from 'lucide-react';
import {Wrench} from 'lucide-react';
import FadeIn from '../animations/Fadein';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
        <RadialGradientBackground variant="services" />
            
                <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <FadeIn delay={0}>
                        <div className='text-center mb-16'>
                            <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                                <Wrench className='w-4 h-4 text-primary' />
                                <span className='text-primary font-medium tracking-wider uppercase'>what I Offer</span>
                            </div>
                            <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto'>
                                Built for innovation. Designed for results.
                            </h2>
                            <p className='text-lg text-white/60 max-w-3xl mx-auto'>
                                comprehensive solutions to transform your ideas into exceptional digital experiences.
                            </p>
                        </div>
                    </FadeIn>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                        {services.slice(0, 2).map((service, index) => {
                            const IconComponent = Icons[service.icon] || Icons.Code2;
                            return (
                                <FadeIn key={service.id} delay={100 + index * 1}>
                                    <div className='group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-[280px] flex flex-col'>
                                        <div className='mb-6'>
                                            <div className='w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30  flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                                <IconComponent className='w-8 h-8 text-primary' />
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300'>
                                                {service.title}
                                            </h3>
                                            <p className='text-white/60 leading-relaxed'>
                                                {service.description}
                                            </p>
                                    </div>

                                    <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none'/>
                                </div>
                                </FadeIn>
                            );
                        })}
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {services.slice(2).map((service, index) => {
                            const IconComponent = Icons[service.icon] || Icons.Code2;
                            return (
                                <FadeIn key={service.id} delay={300 + index * 1}>
                                    <div className='group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-[280px] flex flex-col'>
                                        <div className='mb-6'>
                                            <div className='w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30  flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                                <IconComponent className='w-8 h-8 text-primary' />
                                            </div>
                                        </div>

                                        <div className='flex-grow'>
                                            <h3 className='text-2xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300   '>
                                                {service.title}
                                            </h3>
                                            <p className='text-white/60 leading-relaxed'>
                                                {service.description}
                                            </p>
                                        </div>
                                        
                                        <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none'/>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
};

export default Services;
