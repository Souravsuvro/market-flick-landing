import React from 'react';

const featuresSectionOne = [
  {
    icon: 'fa-chart-line',
    iconColor: 'text-blue-500',
    title: '360-Degree Market Analysis',
    description: 'Assess your idea\'s viability with SWOT, PESTEL, and Porter\'s Five Forces evaluations, helping you prepare for challenges and seize opportunities.'
  },
  {
    icon: 'fa-lightbulb',
    iconColor: 'text-yellow-500',
    title: 'Strategic Recommendations',
    description: 'Receive AI-powered strategic recommendations and actionable insights to guide your business decisions and growth strategy.'
  },
  {
    icon: 'fa-briefcase',
    iconColor: 'text-purple-500',
    title: 'Custom Business Strategies',
    description: 'Get tailored strategies and frameworks for planning and execution, equipping you to bring your vision to life.'
  },
  {
    icon: 'fa-globe',
    iconColor: 'text-cyan-500',
    title: 'Website Analysis',
    description: 'Evaluate online presence and optimize digital strategy.'
  },
  {
    icon: 'fa-robot',
    iconColor: 'text-emerald-500',
    title: 'AI Business Consultant',
    description: 'Get AI-powered business advice and strategic guidance.'
  },
  {
    icon: 'fa-file-powerpoint',
    iconColor: 'text-rose-500',
    title: 'Pitch Deck Generator',
    description: 'Create compelling investor presentations with AI assistance.'
  },
  {
    icon: 'fa-file-export',
    iconColor: 'text-lime-600',
    title: 'Report Editing & Exporting',
    description: 'Customize and export professional market analysis reports.'
  },
  {
    icon: 'fa-check-circle',
    iconColor: 'text-green-600',
    title: 'Idea Viability Score',
    description: 'Get instant feedback on your business idea\'s potential.'
  },
  {
    icon: 'fa-chess',
    iconColor: 'text-amber-500',
    title: 'Competitive Analysis',
    description: 'Analyze competitors and identify market advantages.'
  }
];

interface FeatureCardProps {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  iconColor,
  title, 
  description 
}) => (
  <article 
    className="
      p-6 bg-white rounded-xl 
      border border-gray-200 
      hover:border-custom/30 
      hover:shadow-2xl 
      transition-all duration-300 
      group 
      relative 
      overflow-hidden
    "
  >
    <div 
      className="
        absolute inset-0 
        bg-gradient-to-r from-custom/10 to-custom/20 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-300 
        z-0
      "
    />
    <div className="relative z-10">
      <figure 
        className="
          w-12 h-12 
          bg-custom/10 
          rounded-lg 
          flex items-center 
          justify-center 
          mb-4 
          group-hover:bg-custom/20 
          transition-colors 
          duration-300
        "
      >
        <i 
          className={`
            fas ${icon} 
            text-xl 
            ${iconColor}
            group-hover:text-custom/80 
            transition-colors 
            duration-300
          `}
        ></i>
      </figure>
      <h3 
        className="
          text-xl 
          font-semibold 
          mb-3 
          text-gray-900 
          group-hover:text-custom 
          transition-colors 
          duration-300
        "
      >
        {title}
      </h3>
      <p 
        className="
          text-gray-600 
          group-hover:text-gray-800 
          transition-colors 
          duration-300
        "
      >
        {description}
      </p>
    </div>
  </article>
);

const Features = () => {
  return (
    <section aria-labelledby="features-title" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="features-title" 
            className="text-2xl font-bold mb-4"
          >
            Discover What's Possible with Market Flick AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Turn your business idea into reality with tools offering in-depth analysis, 
            strategic guidance, and actionable insights.
          </p>
        </header>

        <nav aria-label="Feature Categories">
          {/* First Row of Features */}
          <section aria-labelledby="primary-features-title" className="mb-12">
            <h3 
              id="primary-features-title" 
              className="sr-only"
            >
              Primary Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuresSectionOne.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  icon={feature.icon} 
                  iconColor={feature.iconColor}
                  title={feature.title} 
                  description={feature.description} 
                />
              ))}
            </div>
          </section>

          
        </nav>
      </div>
    </section>
  );
};

export default Features;
