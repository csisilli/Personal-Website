
import './App.css';
// import Header from './components/header/Header';
// import Nav from './components/nav/Nav';
import About from './components/about/About';
// import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
// import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/contact';
// import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Portfolio</h1>
          <p>
            This site is currently under construction. Check back soon!
          </p>
        </header>
      </div>
      {/* <Header />
      <Nav /> */}
      <About />
      {/* <Experience />
      <Services />
      <Portfolio />
      <Testimonials />*/}
      <Contact />
      {/* <Footer />  */}
    </>
  );
};

export default App;