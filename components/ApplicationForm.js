import { useState } from 'react'
import { motion } from 'framer-motion'

const ApplicationForm = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    whyInterested: '',
    resume: null,
    references: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const getFormTitle = () => {
    const titles = {
      volunteer: 'Volunteer Application',
      ambassador: 'Youth Ambassador Application',
      board: 'Board Member Application',
      partnership: 'Partnership Application',
      organization: 'Community Organization Application',
      speaker: 'Guest Speaker Application',
      media: 'Media Request Application'
    }
    return titles[type] || 'Application'
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Application submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      experience: '',
      whyInterested: '',
      resume: null,
      references: ''
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{getFormTitle()}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <textarea
          name="experience"
          placeholder="Tell us about your relevant experience"
          value={formData.experience}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <textarea
          name="whyInterested"
          placeholder="Why are you interested in this role?"
          value={formData.whyInterested}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div>
          <label className="block text-gray-800 font-semibold mb-2">Resume/CV (Optional)</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <textarea
          name="references"
          placeholder="References (name and contact info)"
          value={formData.references}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          type="submit"
          className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition"
        >
          Submit Application
        </motion.button>

        {submitted && (
          <p className="text-green-600 font-semibold text-center">✓ Application submitted successfully!</p>
        )}
      </form>
    </motion.div>
  )
}

export default ApplicationForm