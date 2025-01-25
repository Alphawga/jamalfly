'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
    alt: 'Cargo Transport',
    title: 'Efficient Cargo Solutions',
  },
  {
    src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070',
    alt: 'Agricultural Logistics',
    title: 'Agricultural Excellence',
  },
  {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    alt: 'Construction Materials',
    title: 'Construction Support',
  },
  {
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070',
    alt: 'Car Dealership Services',
    title: 'Automotive Solutions',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-primary">
        <div className="absolute inset-0">
          <div className="relative h-full">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Effortless Logistics for Your Every Need
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 animate-slide-in">
              We bring solutions to life for cargo, agriculture, construction, and car dealership needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary hover:text-secondary transition-colors duration-200 animate-bounce-slow"
            >
              Get Quote Now!
            </Link>

            {/* Carousel Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-primary' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Cargo Transportation',
                description: 'Efficient shipping solutions for goods of all sizes.',
                icon: '🚛',
              },
              {
                title: 'Agriculture Logistics',
                description: 'Supporting farmers with reliable logistics.',
                icon: '🌾',
              },
              {
                title: 'Construction Material',
                description: 'Handling heavy construction materials.',
                icon: '🏗️',
              },
              {
                title: 'Car Dealerships',
                description: 'Specialized car dealership logistics service.',
                icon: '🚗',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-secondary hover:text-primary transition-colors duration-200"
                >
                  Learn More →
                </Link>
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
