import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Counter from "./pages/counter/Counter";
import CounterWithDouble from "./pages/counter-with-double/CounterWithDouble";
import CounterEffect from "./pages/counter-effect/CounterEffect";

const App = () => {
  return (
      <div>
        <nav style={{ "margin-bottom": "18px" }}>
          <a href="/" style={{ "margin-right": "10px" }}>Home</a>
          <a href="/counter" style={{ "margin-right": "10px" }}>Counter</a>
          <a href="/counter-double" style={{ "margin-right": "10px" }}>Counter Double</a>
          <a href="/counter-effect" style={{ "margin-right": "10px" }}>Counter Effect</a>
        </nav>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/counter-double" component={CounterWithDouble} />
          <Route path="/counter-effect" component={CounterEffect} />
        </Router>
      </div>
  );
};

export default App;