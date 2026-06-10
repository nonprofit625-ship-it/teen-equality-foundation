import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('Mental Health')

  const categories = [
    {
      name: 'Mental Health',
      items: [
        'Teen Mental Health Crisis Resources',
        'Anxiety Management Workbooks',
        'Depression Support Groups',
        'Therapy and Counseling Directory',
        'Mindfulness and Meditation Guides'
      ]
    },
    {
      name: 'Bullying',
      items: [
        'Cyberbullying Prevention Guide',
        'School Anti-Bullying Programs',
        'Reporting and Support Resources',
        'Building Resilience Training',
        'Peer Support Networks'
      ]
    },
    {
      name: 'Self-Esteem',
      items: [
        'Body Positivity Resources',
        'Confidence Building Workshops',
        'Social Media Literacy Guide',
        'Self-Care Tools and Tips',
        'Positive Affirmations Library'
      ]
    },
    {
      name: 'Anxiety',
      items: [
        'Anxiety Identification Guide',
        'Breathing and Relaxation Techniques',
        'Cognitive Behavioral Therapy Resources',
        'Anxiety Support Hotlines',
        'Coping Strategy Workbook'
      ]
    },
    {
      name: 'Depression',
      items: [
        'Depression Screening Tools',
        'Treatment Options Overview',
        'Recovery Resources',
        'Support Group Finder',
        'Emergency Support Numbers'
      ]
    },
    {
      name: 'School Stress',
      items: [
        'Academic Pressure Management',
        'Study Technique Guides',
        'Time Management Tools',
        'College Preparation Resources',
        'School Safety Resources'
      ]
    },
    {
      name: 'Career Planning',
      items: [
        'Career Exploration Tools',
        'Resume Building Guide',
        'Interview Preparation',
        'Internship Opportunities',
        'Job Search Resources'
      ]
    },
    {
      name: 'College Planning',
      items: [
        'College Search Database',
        'Scholarship Finder',
        'Application Timeline',
        'Financial Aid Guide',
        'Campus Visit Planning'
      ]
    },
    {
      name: 'LGBTQ+ Support',
      items: [
        'Pride Resource Center',
        'Coming Out Guides',
        'Safe Space Directory',
        'Legal Rights Information',
        'Community Organizations'
      ]
    },
    {
      name: 'Crisis Help',
      items: [
        'National Suicide Prevention Lifeline',
        'Crisis Text Line',
        '988 Suicide & Crisis Lifeline',
        'Emergency Services',
        'After-Crisis Support'
      ]
    }
  ]

  const currentCategory = categories.find(cat => cat.name === selectedCategory)

  return (
    <>
      <Head>
        <title>Resource Library - Teen Equality Foundation</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Resource Library</h1>
            <p className="text-gray-600 mb-12">Comprehensive resources organized by topic</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat.name}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`p-3 rounded-lg font-semibold transition text-center ${
                    selectedCategory === cat.name
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-800 hover:shadow-md'
                  }`}
                >
                  {cat.name}
                </motion.button>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{selectedCategory}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCategory && currentCategory.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary hover:bg-opacity-10 transition"
                  >
                    <span className="text-primary text-xl mr-3">📌</span>
                    <a href="#" className="text-gray-800 hover:text-primary transition font-semibold">
                      {item}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}