import React from 'react'

export default function page() {
  return (
    <div className='max-w-6xl mx-auto p-3 space-y-4'>
        <h1 className='text-2xl font-medium text-amber-600'>About</h1>
        <p>
            This website was made by coding along with <a href ='https://www.youtube.com/watch?v=69vpmZgDeN8'
            style={{textDecoration: 'underline', color: '#f59e0b', transition: 'color 0.3s'}}>this
            </a> youtube video
        </p>
    </div>
  )
}
