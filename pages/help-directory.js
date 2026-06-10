import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function HelpDirectory() {
  const [location, setLocation] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Homeless Shelters')
  const [resources, setResources] = useState([])

  const categories = [
    'Homeless Shelters',
    'Youth Shelters',
    'Food Pantries',
    'Domestic Violence Services',
    'Mental Health Clinics',
    'LGBTQ+ Resources',
    'Crisis Centers',
    'Community Programs'
  ]

  const mockResources = {
    'Homeless Shelters': [
      { name: 'Safe Haven Shelter', address: '123 Main St', phone: '606-123-4567', distance: '0.5 mi' },
      { name: 'Hope House', address: '456 Oak Ave', phone: '606-234-5678', distance: '1.2 mi' },
    ],
    'Youth Shelters': [
      { name: 'Youth Safe Space', address: '789 Elm St', phone: '606-345-6789', distance: '0.8 mi' },
      { name: 'Teen Haven', address: '321 Pine Rd', phone: '606-456-7890', distance: '1.5 mi' },
    ],
    'Mental Health Clinics': [
      { name: 'Teen Mental Health Center', address: '654 Maple Dr', phone: '606-567-8901', distance: '0.3 mi' },
      { name: 'Community Wellness', address: '987 Cedar Ln', phone: '606-678-9012', distance: '1.1 mi' },
    ],
    'Food Pantries': [
      { name: 'Community Food Bank', address: '111 Grove St', phone: '606-789-0123', distance: '0.6 mi' },
      { name: 'Helping Hands Pantry', address: '222 Birch Ave', phone: '606-890-1234', distance: '1.3 mi' },
    ],
    'Domestic Violence Services': [
      { name: 'Safe Harbor', address: '333 Spruce Rd', phone: '606-901-2345', distance: '0.9 mi' },
      { name: 'Women Support Center', address: '444 Willow Dr', phone: '606-012-3456', distance: '1.4 mi' },
    ],
    'LGBTQ+ Resources': [
      { name: 'Pride Center', address: '555 Rainbow Blvd', phone: '606-123-7890', distance: '0.7 mi' },
      { name: 'Equality Hub', address: '666 Liberty Ave', phone: '606-234-8901', distance: '1.0 mi' },
    ],
    'Crisis Centers': [
      { name: '24/7 Crisis Hotline', phone: '988', distance: 'Available 24/7' },
      { name: 'Emergency Response Team', phone: '606-345-7890', distance: '0.4 mi' },
    ],
    'Community Programs': [
      { name: 'Youth Leadership Academy', address: '777 Success St', phone: '606-456-8901', distance: '1.1 mi' },
      { name: 'After School Programs', address: '888 Future Ave', phone: '606-567-9012', distance: '0.5 mi' },
    ]
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      })
    }
    setResources(mockResources[selectedCategory] || [])
  }, [selectedCategory])

  return (
    <>
      <Head>
        <title>Find Help Near You - Teen Equality Foundation</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Find Help Near You</h1>
            <p className="text-gray-600 mb-8">Locate resources based on your location</p>
            {location && <p className="text-sm text-green-600 mb-8">✓ Location detected</p>}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`p-3 rounded-lg font-semibold transition ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-800 hover:shadow-md'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{selectedCategory}</h2>
              
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-primary p-4 bg-gray-50 rounded-r-lg hover:shadow-md transition"
                  >
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{resource.name}</h3>
                    {resource.address && <p className="text-gray-600">📍 {resource.address}</p>}
                    {resource.phone && <p className="text-gray-600">📞 {resource.phone}</p>}
                    <p className="text-sm text-primary font-semibold mt-2">{resource.distance}</p>
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