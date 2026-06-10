import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function News() {
  const [selectedTopic, setSelectedTopic] = useState('Mental Health')
  const [newsItems, setNewsItems] = useState([])

  const topics = [
    'Mental Health',
    'Bullying',
    'LGBTQ+ Youth',
    'Education',
    'Teen Advocacy',
    'Community Impact'
  ]

  const sources = [
    'Google News',
    'Apple News',
    'Reuters',
    'Associated Press',
    'NPR',
    'PBS',
    'Education Week',
    'Mental Health America',
    'The Trevor Project'
  ]

  const mockNews = {
    'Mental Health': [
      {
        id: 1,
        title: 'New Study Shows Importance of Teen Mental Health Support',
        source: 'Mental Health America',
        date: '2 days ago',
        excerpt: 'Research indicates that early intervention and support systems significantly improve teen mental health outcomes...',
        url: '#'
      },
      {
        id: 2,
        title: 'Schools Launch Mental Health Awareness Programs',
        source: 'Education Week',
        date: '5 days ago',
        excerpt: 'Educators across the country are implementing comprehensive mental health education in curricula...',
        url: '#'
      }
    ],
    'Bullying': [
      {
        id: 3,
        title: 'Cyberbullying Prevention Initiative Gains Traction',
        source: 'Associated Press',
        date: '1 day ago',
        excerpt: 'New digital safety programs are helping schools combat online harassment...',
        url: '#'
      },
      {
        id: 4,
        title: 'Teen Leadership in Anti-Bullying Campaigns',
        source: 'NPR',
        date: '3 days ago',
        excerpt: 'Youth-led initiatives prove most effective in creating inclusive school environments...',
        url: '#'
      }
    ],
    'LGBTQ+ Youth': [
      {
        id: 5,
        title: 'LGBTQ+ Youth Support Centers Expanding Nationwide',
        source: 'The Trevor Project',
        date: '2 days ago',
        excerpt: 'Community resources dedicated to supporting LGBTQ+ youth continue to grow...',
        url: '#'
      },
      {
        id: 6,
        title: 'Pride Month Celebrates Teen Activism',
        source: 'Reuters',
        date: '4 days ago',
        excerpt: 'Young advocates lead conversations about equality and inclusion...',
        url: '#'
      }
    ],
    'Education': [
      {
        id: 7,
        title: 'Innovative Education Programs Transform Learning',
        source: 'Education Week',
        date: '2 days ago',
        excerpt: 'Schools embrace student-centered, equity-focused teaching methods...',
        url: '#'
      }
    ],
    'Teen Advocacy': [
      {
        id: 8,
        title: 'Teen Voices Shape Policy Decisions',
        source: 'Associated Press',
        date: '1 day ago',
        excerpt: 'Youth advocates successfully influence legislation affecting their communities...',
        url: '#'
      }
    ],
    'Community Impact': [
      {
        id: 9,
        title: 'Youth-Led Community Projects Make Real Difference',
        source: 'NPR',
        date: '3 days ago',
        excerpt: 'Teen volunteers create lasting positive change in their neighborhoods...',
        url: '#'
      }
    ]
  }

  useEffect(() => {
    setNewsItems(mockNews[selectedTopic] || [])
  }, [selectedTopic])

  return (
    <>
      <Head>
        <title>News & Resources - Teen Equality Foundation</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">News & Resources</h1>
            <p className="text-gray-600 mb-12">Stay informed on topics that matter to our community</p>

            <div className="mb-12">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Browse Topics</h2>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <motion.button
                    key={topic}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-4 py-2 rounded-full font-semibold transition ${
                      selectedTopic === topic
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-gray-800 border border-gray-300 hover:border-primary'
                    }`}
                  >
                    {topic}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{selectedTopic} News</h2>
              <div className="space-y-6">
                {newsItems.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800 flex-1 pr-4">{article.title}</h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap">{article.date}</span>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-3">{article.source}</p>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <a href={article.url} className="text-primary font-semibold hover:underline">
                      Read More →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our News Sources</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sources.map((source, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg text-center font-semibold text-gray-700">
                    {source}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}