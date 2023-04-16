import {
  Header,
  Blog,
  Features,
  Footer,
  Possibility,
  WhatGPT3,
} from "./containers/index";
import {
  Navbar,
  Brand,
  Article,
  CTA,
  FeatureFeatures,
} from "./Components/index";
import "./App.scss";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
