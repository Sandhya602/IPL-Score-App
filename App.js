import "./styles.css";
import Header from "./components/Header";
import HomePage from "./page/HomePage";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
function App() {
  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">IPL Score Tracker 🏏</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Stadium />

          <div className="scoreboard">
            <h2>Live Score</h2>
            <div className="team-names">RCB vs CSK</div>
            <div className="scores">RCB - 175/6 (20 overs)</div>
            <div className="scores">CSK - 168/5 (18.3 overs)</div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
export default App;
