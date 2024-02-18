import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import Notfound from './pages/Notfound';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.scss'


const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))
const Companies = lazy(() => import('./pages/Companies'))
const Notfound = lazy(() => import('./pages/Notfound'))
function App() {

  return (
    <HelmetProvider>
      <Router>
        <>
          <Header />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </Suspense>

          </main>
          {/* <Contact /> */}
          <Footer />
        </>
      </Router>
    </HelmetProvider>
  )
}

export default App
