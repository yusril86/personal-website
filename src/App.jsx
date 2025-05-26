 /*Componensts*/
 import Header from "./components/Header";
 import Hero from "./components/Hero";
 import About from "./components/About";
 import Skill from "./components/Skill";
 import Work from "./components/Work";
 import Contact from "./components/Contact";

const App = () => {
  return (
    <>
    
      <Header/>
      <main>
        <Hero/>
       <About/>
        <Contact/>
       <Skill/>
        <Work/>
      </main>
    </>
    
  );
}

export default App;