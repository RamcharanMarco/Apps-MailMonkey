import React from 'react'
import '../styles/console.css'

const camps = [
  {
    id: 'uuuidqqq',
    name: 'one'
  },
  {
    id: 'heeiei',
    name: 'two'
  },
  {
    id: 'eldldld',
    name: 'three'
  }
]

const Console = () => {
  return (
    <div className="console">
      <div className="console-nav">
        <button>create</button>
      </div>
      <div className="campaigns">
        <p>campaign1</p>
        <p>campaign2</p>
      </div>
    </div>
  )
}

export default Console