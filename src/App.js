
import './App.css';
import Bestseller from './component/Bestseller';
import Elementor from './component/Elementor';
import Latestarrivals from './component/Latestarrivals';
import Messages from './component/Messages';
import Navbar from './component/Navbar';
import Newcollection from './component/Newcollection';
import Newsletter from './component/Newsletter';
import Slider from './component/Slider';

function App() {
  return (
    <div className="bg-bg_black py-10 px-10 h-auto  text-white ">
     <Navbar />
     <Slider />
     <Newcollection />
     <Elementor />
     <Bestseller />
     <Latestarrivals />
     <Newsletter />
     <Messages />
    </div>
  );
}

export default App;
