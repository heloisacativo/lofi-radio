import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Library from './Library/Library';
import Play from './Play/Play';
import Playlist from './Playlist/Playlist';
import ArtistSearch from './Search/Search';

function App() {
  return (
    <>
    <Header />
    <ArtistSearch />
    <Playlist />
    <Footer />
    <Play />
    <Library />
    </>
        
  );
}

export default App;
