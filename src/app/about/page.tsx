'use client'

import { useState } from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974',
    bio: 'With over 15 years of experience in logistics, John leads our team with vision and expertise.',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976',
    bio: 'Jane ensures smooth operations across all our service areas.',
  },
  {
    name: 'Mike Johnson',
    role: 'Fleet Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974',
    bio: 'Mike oversees our vehicle fleet and ensures timely deliveries.',
  },
  {
    name: 'Sarah Wilson',
    role: 'Customer Relations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
    bio: 'Sarah is dedicated to providing exceptional customer service.',
  },
]

const timeline = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Jamfly was established with a vision to revolutionize logistics.',
  },
  {
    year: '2017',
    title: 'Expansion of Services',
    description: 'Added agricultural and construction logistics to our portfolio.',
  },
  {
    year: '2019',
    title: 'Regional Growth',
    description: 'Expanded operations to cover the entire region.',
  },
  {
    year: '2021',
    title: 'Technology Integration',
    description: 'Implemented state-of-the-art tracking and management systems.',
  },
  {
    year: '2023',
    title: 'Sustainability Initiative',
    description: 'Launched eco-friendly logistics solutions.',
  },
]

export default function About() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            Our Dedicated Team
          </h1>
          <p className="text-xl text-secondary">
            Meet the people powering your logistics solutions
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-sm text-center">{member.bio}</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-primary font-bold text-xl">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description:
                  'We strive for excellence in every aspect of our service.',
                icon: '⭐',
              },
              {
                title: 'Reliability',
                description:
                  'Count on us to deliver on time, every time.',
                icon: '🎯',
              },
              {
                title: 'Innovation',
                description:
                  'Constantly improving our services with the latest technology.',
                icon: '💡',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 