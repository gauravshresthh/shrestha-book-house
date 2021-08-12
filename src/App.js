import './App.css';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Topics from './components/Topics';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Intro />
			<Pricing />
			<Topics />
		</div>
	);
}

export default App;
