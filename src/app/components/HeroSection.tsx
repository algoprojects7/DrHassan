import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-28 pb-12 bg-background">
      <div className="max-w-4xl mx-auto w-full px-6 flex flex-col items-center text-center relative z-10 flex-grow justify-center">
        <div
          className="animate-fadeInUp w-full max-w-4xl mx-auto"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-[#3BA5FF] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-8 block text-center">
            Academic &amp; Industry Profile
          </span>
          <h1 className="font-display text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem] font-bold leading-[0.95] tracking-tight mb-10 text-center">
            <span className="flex justify-center items-center gap-3 md:gap-5 flex-wrap">
              <span className="text-black dark:text-white">Dr.</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E88E5] to-[#8C7BFF] pb-1">
                Mostaque
              </span>
            </span>
            <span className="text-black dark:text-white mt-1 block">Hassan</span>
          </h1>
          <div className="text-[1.1rem] md:text-[1.25rem] text-black dark:text-white flex flex-col gap-5 max-w-4xl mx-auto mb-14 text-center tracking-wide">
            <p className="font-extrabold text-[1.2rem] md:text-[1.35rem]">
              Director cum Founder, Algoguido Technologies Pvt. Ltd.
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              Pursuing Post-Doctoral Fellowship, Eudoxia Research University, USA
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              Principal Data Scientist Instructor, upGrad Education
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              PhD in Computer Science, Gauhati University.
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              Dedicated Researcher in AI, Deep Learning &amp; Network Security
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold hover:bg-accent transition-all duration-300 rounded-lg shadow-sm hover:shadow-md"
            >
              Collaborate Now
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-2 bg-white text-foreground border border-border px-8 py-3.5 text-sm font-semibold hover:bg-muted transition-all duration-300 rounded-lg shadow-sm hover:shadow-md"
            >
              View Research
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 bg-white border border-border rounded-full text-xs font-semibold text-muted-foreground shadow-sm">
              Data Science
            </span>
            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary shadow-sm">
              AI Research
            </span>
            <span className="px-4 py-1.5 bg-white border border-border rounded-full text-xs font-semibold text-muted-foreground shadow-sm">
              Network Security
            </span>
            <span className="px-4 py-1.5 bg-white border border-border rounded-full text-xs font-semibold text-muted-foreground shadow-sm">
              GANs &amp; Deep Learning
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="w-full max-w-5xl px-6 relative z-20 mt-12 md:mt-16">
        <div className="bg-white border border-border rounded-2xl shadow-sm p-4 md:p-6 flex justify-center items-center">
          <div className="grid grid-cols-2 md:flex gap-6 md:gap-16 w-full md:w-auto">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="font-display text-2xl font-bold text-foreground">18+ Yrs</span>
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase text-center">
                Experience
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="font-display text-2xl font-bold text-foreground">20+</span>
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase text-center">
                Publications
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="font-display text-2xl font-bold text-foreground">5</span>
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase text-center">
                Patents
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="font-display text-2xl font-bold text-primary">500+</span>
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase text-center">
                Projects Guided
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
