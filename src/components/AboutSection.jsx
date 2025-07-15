export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">AI/Software Developer</h3>
            <p className="text-muted-foreground">
              As an AI & Software Developer, I specialize in crafting
              intelligent, scalable applications using modern technologies like
              Python, JavaScript, and AI frameworks. I enjoy turning ideas into
              real-world products through clean, efficient code.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about solving real problems with tech — from
              building AI agents to deploying full-stack solutions. Always
              learning, I explore cutting-edge tools to stay ahead in the
              fast-moving world of AI and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
