import './App.css';
import Contact from './components/Contact';
import './css/main.min.css';

import Intro from './components/Intro';
import LatestUpdtes from './components/LatestUpdtes';
import Navbar from './components/Navbar';
import Offcanvas from './components/Offcanvas';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Topics from './components/Topics';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Intro />
			<Pricing />
			<Topics />
			<Reviews />
			<Contact />
			<LatestUpdtes />
			<Offcanvas />
		</div>
	);
}

export default App;
