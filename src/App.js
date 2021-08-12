import './App.css';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Intro />
			<Pricing />
		</div>
	);
}

export default App;
