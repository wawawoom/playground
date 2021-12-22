import PageContext from "./pages/Context/Page.js";
import PageContext2 from "./pages/Context2/Page.js";
import PageHello from "./pages/Hello/Hello.js";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              useContext
              <ul>
                <li>
                  <Link to="/context">Context</Link>
                </li>
                <li>
                  <Link to="/context2">Context2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div class="content">
        <Routes>
          <Route path="/" element={<PageHello />} />
          <Route path="/context" element={<PageContext />} />
          <Route path="/context2" element={<PageContext2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
