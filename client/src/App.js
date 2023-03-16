import CallToAction from "./components/CallToAction/CallToAction";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/nav/NavBar";
import WorkFlow from "./components/WorkFlow/WorkFlow";

function App() {
  return (
    <>
      <NavBar/>
      <CallToAction />
      <WorkFlow/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
