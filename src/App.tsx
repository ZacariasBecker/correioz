import styles from './App.module.css';

import Navbar from '../src/components/navbar/Navbar';
import Footer from '../src/components/footer/Footer';


import { Routes } from './routes';

function App() {
  return (
    <div className="App">
      <header>
        <div className={styles.container}>
          <div className="footerSpacing">
            <Navbar />
            <Routes/>
          </div>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
