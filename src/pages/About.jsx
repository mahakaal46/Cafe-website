import React from 'react'

export default function About() {
  return (
    <section>
  <h2 className="font-heading text-3xl dark:font-papyrus mb-4">About Us</h2>
      <p className="text-roast-700 dark:text-roast-200 mb-4">Founded with a love for coffee, Cafe sources beans from ethical farms and roasts small batches in house. We focus on quality, community, and a warm atmosphere.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-roast-800 p-4 rounded-lg card-shadow">
          <h4 className="font-semibold">Our Philosophy</h4>
          <p className="text-sm text-roast-600 dark:text-roast-200">Sustainability, quality, and hospitality. We strive to make every cup meaningful.</p>
        </div>

        <div className="bg-white dark:bg-roast-800 p-4 rounded-lg card-shadow">
          <h4 className="font-semibold">Community</h4>
          <p className="text-sm text-roast-600 dark:text-roast-200">Events, local artist nights, and a friendly place to meet.</p>
        </div>
      </div>
    </section>
  )
}
