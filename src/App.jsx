
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
import Spline from '@splinetool/react-spline';
import CTA from './CTA'

const App = () => {
  return (
    <>
      <a href="#main-content" className="sr-only">Skip to main content</a>
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <h1>Welcome to My Portfolio</h1>
            <CTA/>
          </div>
            <div className="spline-container">
              {/* 3D Spline Scene */}
              <Spline 
                scene="https://prod.spline.design/gyWVsQ9taRKBzKZO/scene.splinecode"
              />
            </div>

        </header>
      </div>
      <main id="main-content">
        <About />
        <Experience /> 
        <Portfolio />
        <Contact />
      </main>
      <Footer /> 
    </>
  );
};

export default App;