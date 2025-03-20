import { useState } from 'react'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div>
        find countries{' '}
        <input value={searchQuery} onChange={handleSearchChange} />
      </div>
      {/* Results will go here */}
    </div>
  )
}

export default App
