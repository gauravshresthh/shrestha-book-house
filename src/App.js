import './App.css';
import Contact from './components/Contact';

import Intro from './components/Intro';
import LatestUpdtes from './components/LatestUpdtes';
import Navbar from './components/Navbar';
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
		</div>
	);
}

export default App;
