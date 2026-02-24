import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import FadeIn from '../animations/Fadein';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev - testimonialsPerPage < 0 
        ? Math.max(0, testimonials.length - testimonialsPerPage)
        : prev - testimonialsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  return (
    <section id="testimonials" className="relative py-20 bg-black overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium tracking-wider uppercase">Testimonials</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              What People Say
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Feedback from clients and colleagues I've had the pleasure to work with.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={100 + index * 100}>
              <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/70 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 border border-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name);
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Navigation Buttons */}
        {testimonials.length > testimonialsPerPage && (
          <FadeIn delay={400}>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                disabled={currentIndex === 0}
                className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {Array.from({ 
                  length: Math.ceil(testimonials.length / testimonialsPerPage) 
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * testimonialsPerPage)}
                    className={`transition-all duration-300 rounded-full ${
                      Math.floor(currentIndex / testimonialsPerPage) === index
                        ? 'w-8 h-2 bg-primary'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                disabled={currentIndex + testimonialsPerPage >= testimonials.length}
                className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" />
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
