import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavBar } from './components/NavBar/NavBar';
import { Header } from './Header/Header';
import { UnderContentImg } from './UnderContentImg/UnderContentImg';
import { Cards } from './Cards/Cards';
import { ExploreCollection } from './ExploreCollection/ExploreCollection';
import { Carousel } from './Carousel/Carousel';
import { CollectionInfo } from './CollectionInfo/CollectionInfo';
import { QueAns } from './QueAns/QueAns';
import { EcoLast } from './EcoLast/EcoLast';
import Accordian from './Accordian/Accordian';
import MyAccordion from './Accordian/Accordian';
import Collapsible from 'react-collapsible';
import { Accordion } from './Accordian/Accordian';

function App() {
  return (
    <div >
      <NavBar />
      <Header />
      <UnderContentImg />
      <Cards />
      <ExploreCollection />
      <Carousel />
      <CollectionInfo />
      <QueAns />
      <Accordion />
      <EcoLast />
    </div>
  );
}

export default App;
