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
          <button className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            View My Work
          </button>
          <button className="px-6 sm:px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );

  {
    /* About Section */
  }
  <section id="about" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About Me
      </h2>
      <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto">
        Welcome to my portfolio! I'm a developer passionate about creating
        innovative solutions and beautiful user experiences.
      </p>
    </div>
  </section>;
};
