import {ArrowDown} from "lucide-react";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-24 md:pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Karina</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          A passionate developer creating amazing web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href= "#contact" className="cosmic-button">
            Contact Me
          </a>
          <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
