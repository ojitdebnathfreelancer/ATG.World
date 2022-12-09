import './App.css';
import Banner from './Componets/Banner/Banner';
import MainPostSection from './Componets/MainPostSection/MainPostSection';
import Navebar from './Componets/Navebar/Navebar';

function App() {

  return (
    <div className="max-width mx-auto main-font position-relative">
      <Navebar ></Navebar>
      <Banner></Banner>
      <MainPostSection></MainPostSection>
    </div>
  );
}

export default App;
