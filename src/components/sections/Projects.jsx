import React, { useState } from "react";
import {projects, categories} from '../../data/projects';
import {Briefcase, Target, Globe, Zap, Smartphone} from 'lucide-react';
import ProjectCard from '../ui/projectCard';
import Fadein from '../animations/Fadein';
import ScrollReveal from '../animations/ScrollReveal';


const Projects = () => {

    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

        //Reset when category changes
        const handleCategoryChange = (category) => {
            setActiveCategory(category);
        };

        //category icons mapping
        const categoryIcons = {
            'All': Target,
            'Web Development': Globe,
            'Full Stack': Zap,
            'Mobile Development': Smartphone,
        };
        return (
           <section id="projects" className="relative py-20 bg-black overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl"/>
                    <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl"/>
                    <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl"/>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Fadein delay={0}>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <span className="text-sm text-primary font-medium">My Work </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-lg text-white/60 max-w-2xl mx-auto">
                                Showcasing a my best work and achievements.
                            </p>
                        </div>
                    </Fadein>

                    {/* Category Filters */}
                    <Fadein delay={100}>
                        <div className="flex items-wrap justify-center gap-3 mb-16">
                            {categories.map((category) => (
                                <button 
                                    key={category}
                                    onClick={() => handleCategoryChange(category)}
                                    className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category 
                                        ? 'text-white' 
                                        : 'text-white/60 hover:text-white'
                                    }`}
                                >
                                    <div className= {`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category 
                                        ? 'bg-primary/10 opacity-100' 
                                        : 'bg-white/5 border-white/10 group-hover:bg-white/10'
                                        }`} />
                                        
                                    <div className="relative flex items-center gap-2">
                                        {React.createElement(categoryIcons[category], { className: "w-4 h-4" })}
                                        <span className="text-sm">{category}</span>
                                    </div>

                                    {activeCategory === category && (
                                        <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-50 -z-10" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </Fadein>
                    
                    {/* Projects Grid */}
                    <Fadein delay={200}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project, index) => (
                                <ScrollReveal 
                                    key={project.id}
                                    Animation="fadeUp"
                                    delay={index * 100}
                                    duration={700}
                                >
                                    <ProjectCard project={project} />
                                </ScrollReveal>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-white/60 text-lg">No projects found in this category.</p>
                            </div>
                        )}
                    </Fadein>
                </div>
            </section>
        );
}

export default Projects;
