import Footer from './components/Footer';
import Hero from './components/Hero';
import KetuaTerpilih from './components/KetuaTerpilih';
import NavBar from './components/NavBar';
import Organisasi from './components/Organisasi';
import Teaser from './components/Teaser';
import Timeline from './components/Timeline';
import './index.css';

const App = () => {
    return (
        <div className='font-montserrat'>
            <NavBar />
            <Hero />
            <Teaser />
            <KetuaTerpilih />
            <Organisasi />
            <Timeline />
            <Footer />
        </div>
    );
};

export default App;
