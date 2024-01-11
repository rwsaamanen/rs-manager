import PricingCard from '@/components/shared/PricingCard';
import Link from 'next/link';
import React from 'react'

const pricing = [
  {
    name: "Personal",
    price: "Free",
    popular: false,
    features: [
      "Lifetime free",
      "Limited chat",
      "Unlimited Pages",
      "Astro Sub domain",
      "Basic Integrations",
      "Community Support",
    ],
    button: {
      text: "Get Started",
      link: "/",
    },
  },
  {
    name: "Plus",
    price: {
      monthly: "$4,99",
    },
    popular: true,
    features: [
      "All Free Features",
      "Up to 4 users",
      "Centralized Data",
      "Unlimited Collaborators",
      "Advanced Integrations",
      "Priority Support",
    ],
    button: {
      text: "Get Started",
      link: "#",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    popular: false,
    features: [
      "All Pro Features",
      "Unlimited users",
      "Up to",
      "SAML & SSO Integration",
      "Account Manager",
      "Phone Support",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
];

const page = () => {
  return (
    <section className='wrapper'>
      <div className="py-10 sm:py-16 lg:pb-16 pointer-events-none">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Simple & Predictable pricing.
          </h1>
          <p className="mt-10 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Introducing{" "}
            <span className="text-gray-600 underline dark:text-gray-400">
              AI-translation
            </span>
            {" "}for groups with multilingual users.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
        {pricing.map((item) => (
          <div key={item.name} className="flex flex-col">
            <PricingCard plan={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default page