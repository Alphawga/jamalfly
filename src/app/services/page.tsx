'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'cargo',
    title: 'Cargo Transportation',
    description:
      'Efficient shipping solutions for goods of all sizes. From containers to small packages, we ensure safe and on-time delivery.',
    features: [
      'Door-to-door delivery',
      'Real-time tracking',
      'Temperature-controlled transport',
      'Custom clearance assistance',
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070',
    icon: '🚛',
  },
  {
    id: 'agriculture',
    title: 'Agriculture Logistics',
    description:
      'Seamlessly moving agricultural products and equipment to their destinations. Supporting farmers with reliable logistics.',
    features: [
      'Farm equipment transport',
      'Produce delivery',
      'Storage solutions',
      'Cold chain logistics',
    ],
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2069',
    icon: '🌾',
  },
  {
    id: 'construction',
    title: 'Construction Material Transport',
    description:
      'We handle the transportation of heavy construction materials, ensuring projects stay on schedule.',
    features: [
      'Heavy equipment transport',
      'Building materials delivery',
      'Project scheduling',
      'Safety compliance',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070',
    icon: '🏗️',
  },
  {
    id: 'dealership',
    title: 'Car Dealerships - Sales & Swaps',
    description:
      'Buy, sell, or swap cars effortlessly with our specialized car dealership logistics service.',
    features: [
      'Vehicle transport',
      'Dealership logistics',
      'Car swap facilitation',
      'Documentation handling',
    ],
    image: 'https://images.unsplash.com/photo-1506671753197-8d137cc5d53c?q=80&w=2070',
    icon: '🚗',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            Comprehensive Logistics Services
          </h1>
          <p className="text-xl text-secondary">
            From cargo to cars, we've got you covered
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors duration-200 ${
                  activeService === service.id
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service) => (
        <section
          key={service.id}
          className={`py-20 ${
            activeService === service.id ? 'block' : 'hidden'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 mb-8">{service.description}</p>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="w-6 h-6 text-primary mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link
                    href="/contact"
                    className="inline-block bg-secondary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary hover:text-secondary transition-colors duration-200"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description:
                  'Our experienced professionals ensure smooth logistics operations.',
                icon: '👥',
              },
              {
                title: 'Modern Fleet',
                description:
                  'Well-maintained vehicles equipped with latest tracking technology.',
                icon: '🚚',
              },
              {
                title: '24/7 Support',
                description:
                  'Round-the-clock customer service for your peace of mind.',
                icon: '🔧',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Contact us today for a customized logistics solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-secondary transition-colors duration-200"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  )
} 