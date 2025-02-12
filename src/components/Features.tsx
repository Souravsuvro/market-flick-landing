import React from 'react';

/**
 * DetailedFeaturesSection showcases key product capabilities and unique selling points.
 * 
 * Key Features:
 * - Grid layout of feature cards
 * - Responsive design using Tailwind CSS
 * - Icons representing different market research capabilities
 */
const DetailedFeaturesSection: React.FC = () => {
  // Detailed feature list with comprehensive descriptions
  const marketResearchCapabilities: {
    icon: string;
    title: string;
    description: string;
    color: string;
  }[] = [
    {
      icon: 'fa-chart-line', 
      title: 'Comprehensive Market Analysis',
      description: 'Assess your idea\'s viability with SWOT, PESTEL, and Porter\'s Five Forces evaluations, helping you prepare for challenges and seize opportunities.',
      color: 'text-blue-500'
    },
    {
      icon: 'fa-lightbulb', 
      title: 'Strategic Business Recommendations',
      description: 'Receive AI-powered strategic recommendations and actionable insights to guide your business decisions and growth strategy.',
      color: 'text-yellow-500'
    },
    {
      icon: 'fa-briefcase', 
      title: 'Customized Business Strategies',
      description: 'Get tailored strategies and frameworks for planning and execution, equipping you to bring your vision to life.',
      color: 'text-purple-500'
    },
    {
      icon: 'fa-globe', 
      title: 'Website Analysis and Optimization',
      description: 'Evaluate online presence and optimize digital strategy.',
      color: 'text-cyan-500'
    },
    {
      icon: 'fa-robot', 
      title: 'AI-Powered Business Consulting',
      description: 'Get AI-powered business advice and strategic guidance.',
      color: 'text-emerald-500'
    },
    {
      icon: 'fa-file-powerpoint', 
      title: 'Pitch Deck Creation and Editing',
      description: 'Create compelling investor presentations with AI assistance.',
      color: 'text-rose-500'
    },
    {
      icon: 'fa-file-export', 
      title: 'Report Editing and Exporting',
      description: 'Customize and export professional market analysis reports.',
      color: 'text-lime-600'
    },
    {
      icon: 'fa-check-circle', 
      title: 'Idea Viability Assessment',
      description: 'Get instant feedback on your business idea\'s potential.',
      color: 'text-green-600'
    },
    {
      icon: 'fa-chess', 
      title: 'Competitive Market Analysis',
      description: 'Analyze competitors and identify market advantages.',
      color: 'text-amber-500'
    }
  ];

  /**
   * FeatureCard component represents a single feature card.
   * 
   * Props:
   * - icon: Font Awesome icon class
   * - iconColor: Tailwind color class for icon
   * - title: Feature title
   * - description: Feature description
   */
  interface FeatureCardProps {
    icon: string;
    iconColor: string;
    title: string;
    description: string;
  }

  /**
   * FeatureCard component implementation.
   */
  const FeatureCard: React.FC<FeatureCardProps> = ({ 
    icon, 
    iconColor,
    title, 
    description 
  }) => (
    <article 
      className="
        p-4 sm:p-5 md:p-6 bg-white rounded-lg sm:rounded-xl 
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
        <div className="flex items-center mb-4">
          <i className={`fas ${icon} ${iconColor} text-2xl sm:text-3xl`}></i>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );

  return (
    <section className="features-section py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Market Research Capabilities
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock the power of AI-driven market research with our comprehensive suite of tools and features
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {marketResearchCapabilities.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconColor={feature.color}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeaturesSection;
