import React from 'react'

export default function Contact() {
  return (
    <section>
  <h2 className="font-heading text-3xl dark:font-papyrus mb-4">Contact</h2>
      <p className="text-roast-700 dark:text-roast-200 mb-4">Have a question or want to book a small event? Send us a message.</p>

      <form className="grid grid-cols-1 gap-4 max-w-full sm:max-w-md">
        <input className="p-3 border rounded bg-white dark:bg-roast-800 w-full" placeholder="Your name" />
        <input className="p-3 border rounded bg-white dark:bg-roast-800 w-full" placeholder="Email" />
        <textarea className="p-3 border rounded bg-white dark:bg-roast-800 w-full" rows="4" placeholder="Message" />
        <button type="button" className="py-2 px-4 rounded bg-cafe-500 text-white w-full sm:w-auto">Send</button>
      </form>
    </section>
  )
}
