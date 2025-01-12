import React, { useState } from 'react';

interface PlanFeature {
  text: string;
  included: boolean;
  icon: string;
  iconColor: string;
}

interface PricingPlan {
  name: string;
  price: string;
  features: PlanFeature[];
  buttonText: string;
  highlight?: boolean;
  description: string;
}

const Pricing = () => {
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individuals and small projects',
      buttonText: 'Get Started',
      features: [
        { 
          text: '1000-character ideas', 
          included: true,
          icon: 'fa-pencil-alt',
          iconColor: 'text-blue-500'
        },
        { 
          text: 'Language selection', 
          included: true,
          icon: 'fa-globe',
          iconColor: 'text-green-500'
        },
        { 
          text: 'Public/private reports', 
          included: true,
          icon: 'fa-file-alt',
          iconColor: 'text-purple-500'
        }
      ]
    },
    {
      name: 'Lite',
      price: '$10',
      description: 'Ideal for entrepreneurs and startups',
      buttonText: 'Choose Lite',
      features: [
        { 
          text: '3000-character ideas', 
          included: true,
          icon: 'fa-lightbulb',
          iconColor: 'text-yellow-500'
        },
        { 
          text: 'PDF without watermark', 
          included: true,
          icon: 'fa-file-pdf',
          iconColor: 'text-red-500'
        },
        { 
          text: 'AI chat support', 
          included: true,
          icon: 'fa-robot',
          iconColor: 'text-cyan-500'
        },
        { 
          text: 'Dashboard access', 
          included: true,
          icon: 'fa-chart-bar',
          iconColor: 'text-indigo-500'
        },
        { 
          text: '2 advanced reports/month', 
          included: true,
          icon: 'fa-chart-line',
          iconColor: 'text-teal-500'
        }
      ]
    },
    {
      name: 'Pro',
      price: '$16.67',
      description: 'Comprehensive solution for growing businesses',
      buttonText: 'Choose Pro',
      highlight: true,
      features: [
        { 
          text: '4000-character ideas', 
          included: true,
          icon: 'fa-brain',
          iconColor: 'text-emerald-500'
        },
        { 
          text: 'All Lite features', 
          included: true,
          icon: 'fa-check-circle',
          iconColor: 'text-green-600'
        },
        { 
          text: 'Priority support', 
          included: true,
          icon: 'fa-headset',
          iconColor: 'text-orange-500'
        },
        { 
          text: 'Advanced analytics', 
          included: true,
          icon: 'fa-chart-pie',
          iconColor: 'text-pink-500'
        },
        { 
          text: 'Unlimited reports', 
          included: true,
          icon: 'fa-infinity',
          iconColor: 'text-purple-600'
        },
        { 
          text: 'Team collaboration', 
          included: true,
          icon: 'fa-users',
          iconColor: 'text-blue-600'
        }
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      buttonText: 'Contact Sales',
      features: [
        { 
          text: 'Unlimited characters', 
          included: true,
          icon: 'fa-expand-arrows-alt',
          iconColor: 'text-sky-500'
        },
        { 
          text: 'Custom integration', 
          included: true,
          icon: 'fa-puzzle-piece',
          iconColor: 'text-rose-500'
        },
        { 
          text: 'Dedicated support', 
          included: true,
          icon: 'fa-life-ring',
          iconColor: 'text-amber-500'
        },
        { 
          text: 'Custom features', 
          included: true,
          icon: 'fa-magic',
          iconColor: 'text-fuchsia-500'
        }
      ]
    }
  ];

  const renderPlanFeatures = (features: PlanFeature[]) => {
    return (
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className={`flex items-center gap-4 ${
              feature.included 
                ? 'text-gray-700' 
                : 'text-gray-400 line-through'
            }`}
          >
            <div 
              className={`
                w-10 h-10 rounded-full 
                flex items-center justify-center 
                bg-opacity-10 ${feature.iconColor} 
                ${feature.included ? '' : 'opacity-50'}
              `}
            >
              <i 
                className={`
                  fas ${feature.icon} 
                  ${feature.iconColor} 
                  ${feature.included ? '' : 'opacity-50'}
                `}
              />
            </div>
            {feature.text}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section 
      aria-labelledby="pricing-title" 
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h2 
            id="pricing-title" 
            className="text-4xl font-bold mb-6 text-gray-900"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible plans designed to scale with your business. 
            Unlock powerful AI-driven market insights at every stage.
          </p>
        </header>

        <nav aria-label="Billing Cycle Selection" className="flex justify-center mb-16">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 shadow-inner">
            <button
              aria-pressed={!isYearlyBilling}
              onClick={() => setIsYearlyBilling(false)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !isYearlyBilling 
                  ? 'bg-custom text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              aria-pressed={isYearlyBilling}
              onClick={() => setIsYearlyBilling(true)}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                isYearlyBilling 
                  ? 'bg-custom text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </nav>

        <article 
          aria-label="Pricing Plans" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {plans.map((plan, index) => (
            <section 
              key={index} 
              aria-labelledby={`plan-${plan.name}-title`}
              className={`
                bg-white border rounded-2xl p-6 
                shadow-lg transition-all duration-300
                hover:shadow-2xl hover:border-custom/30
                ${plan.highlight 
                  ? 'border-custom/50 scale-105' 
                  : 'border-gray-200'
                }
              `}
            >
              <header className="mb-6">
                <h3 
                  id={`plan-${plan.name}-title`} 
                  className="text-xl font-semibold mb-2 text-gray-900"
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {plan.description}
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {plan.price}
                  <span className="text-sm text-gray-500 ml-2">
                    {isYearlyBilling ? '/year' : '/month'}
                  </span>
                </p>
              </header>

              {renderPlanFeatures(plan.features)}

              <footer>
                <button 
                  aria-label={`Select ${plan.name} Plan`}
                  className={`
                    w-full py-3 rounded-full font-medium transition-all duration-300
                    ${plan.highlight 
                      ? 'bg-custom text-white hover:bg-custom/90 shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {plan.buttonText}
                </button>
              </footer>
            </section>
          ))}
        </article>

        <footer className="text-center mt-12">
          <p className="text-sm text-gray-600 italic">
            * All plans include a 14-day free trial. No credit card required.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Pricing;
