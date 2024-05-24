
import Category from './components/Category'
import Food from './components/Food'
import HeadlineCards from './components/HeadlineCards'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App