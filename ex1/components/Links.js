import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/example02">Example02</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/counter')}>Counter - button</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
