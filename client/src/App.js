import CallToAction from "./components/App/CallToAction/CallToAction";
// import Demonstration from "./components/Demonstration/Demonstration";
// import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/SharedComponents/Footer/Footer";
import NavBar from './components/SharedComponents/nav/NavBar'
import WorkFlow from "./components/App/WorkFlow/WorkFlow";
import '../src/index.css'
import HomeFooter from "./components/SharedComponents/Footer/Home/HomeFooter";


function App() {
  return (
    <>
      <NavBar/>
      <CallToAction />
      <WorkFlow/>
      <Footer element={<HomeFooter/>}/>
    </>
  );
}

export default App;
