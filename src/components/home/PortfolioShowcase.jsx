import React, { useState } from 'react';

const PortfolioShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Fitpreps',
      tagline: 'Healthy food for winners',
      description: 'A comprehensive meal prep delivery platform with custom nutrition planning and e-commerce functionality.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
      tags: ['Development', 'Design', 'SEO'],
      year: '2024',
      color: 'bg-orange-500'
    },
    {
      id: 2,
      name: 'Moise',
      tagline: 'Premium baby care essentials',
      description: 'E-commerce platform for organic baby products with subscription management and parenting resources.',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
      tags: ['Development', 'Design'],
      year: '2024',
      color: 'bg-slate-400'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Hero Stats Section */}
      <section className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-6">Discover How</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-16 max-w-3xl leading-tight">
            Our tailored strategies<br />have driven growth
          </h1>
          
          <div className="flex flex-wrap gap-16">
            <div>
              <div className="text-7xl font-bold mb-2">40+</div>
              <div className="text-xl text-zinc-400">projects</div>
            </div>
            <div>
              <div className="text-7xl font-bold mb-2">60+</div>
              <div className="text-xl text-zinc-400">happy clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`relative ${project.color} min-h-[500px] flex items-end p-8 md:p-12`}>
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    {/* Left Side - Project Info */}
                    <div className="flex-1">
                      <h2 className="text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight">
                        {project.name.toUpperCase()}
                      </h2>
                      <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                        {project.tagline}
                      </p>
                      
                      {/* Description - Shows on hover */}
                      <p className={`text-white/80 text-base md:text-lg max-w-2xl transition-all duration-500 ${
                        hoveredProject === project.id 
                          ? 'opacity-100 translate-y-0 max-h-20' 
                          : 'opacity-0 translate-y-4 max-h-0'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Right Side - Tags and Year */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                        {project.year}
                      </div>
                      <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-5 py-2 bg-white/90 hover:bg-white text-zinc-900 rounded-full text-sm font-semibold transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Let's create something amazing together
          </p>
          <button className="px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioShowcase;