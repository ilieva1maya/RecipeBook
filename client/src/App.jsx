import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header />
      <div id="main-content">
        <section style={{ padding: '3em', minWidth: '700px' }}>
          <h2>Welcome to the RecipeBook!</h2>
          <p>This is where your main, scrollable content goes. The fixed Header and Footer sidebars will not overlap this area because the #main-content CSS rule pushes it inward.</p>
          <p>Try resizing the window now—this block will trigger a horizontal scrollbar if the viewport is too narrow.</p>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
