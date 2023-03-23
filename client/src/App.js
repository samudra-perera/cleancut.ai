import CallToAction from "./components/CallToAction/CallToAction";
import Demonstration from "./components/Demonstration/Demonstration";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/nav/NavBar";
import WorkFlow from "./components/WorkFlow/WorkFlow";
import '../src/index.css'

function App() {
  return (
    <>
      <NavBar/>
      <CallToAction />
      <WorkFlow/>
      <Demonstration/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
