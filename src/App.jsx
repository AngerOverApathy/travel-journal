import Header from './components/Header'
import Cards from './components/Cards'
import './index.css'
import data from '../data.jsx'

function App() {
    const cards = data.map(item => {
      return (
          <Cards
              key={item.id}
              {...item}
          />
      )
  })  

  return (
    <>
    <Header />
    <div>
      {cards}
    </div>
    </>
  )
}

export default App
