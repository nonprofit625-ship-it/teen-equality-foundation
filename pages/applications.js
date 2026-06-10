import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ApplicationForm from '../components/ApplicationForm'

export default function Applications() {
  const [selectedApp, setSelectedApp] = useState(null)

  const applications = [
    {
      id: 'volunteer',
      title: 'Volunteer Application',
      description: 'Join our team and make a difference in teen lives',
      icon: '🤝'
    },
    {
      id: 'ambassador',
      title: 'Youth Ambassador Application',
      description: 'Lead initiatives and represent our foundation',
      icon: '🌟'
    },
    {
      id: 'board',
      title: 'Board Member Application',
      description: 'Help guide our organization\'s strategic direction',
      icon: '🏛️'
    },
    {
      id: 'partnership',
      title: 'Partnership Application',
      description: 'Collaborate with us on community projects',
      icon: '🤲'
    },
    {
      id: 'organization',
      title: 'Community Organization Application',
      description: 'Connect your organization with our network',
      icon: '🏢'
    },
    {
      id: 'speaker',
      title: 'Guest Speaker Application',
      description: 'Share your expertise with our community',
      icon: '🎤'
    },
    {
      id: 'media',
      title: 'Media Request Application',
      description: 'Request coverage or interviews',
      icon: '📸'
    }
  ]

  return (
    <>
      <Head>
        <title>Get Involved - Applications - Teen Equality Foundation</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          {!selectedApp ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Get Involved</h1>
              <p className="text-gray-600 mb-12">Choose how you want to make an impact</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedApp(app.id)}
                    className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition transform hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{app.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{app.title}</h3>
                    <p className="text-gray-600 mb-4">{app.description}</p>
                    <button className="text-primary font-semibold hover:text-secondary transition">Apply Now →</button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button
                onClick={() => setSelectedApp(null)}
                className="mb-6 text-primary font-semibold hover:text-secondary transition"
              >
                ← Back to Applications
              </button>
              <ApplicationForm type={selectedApp} />
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
}