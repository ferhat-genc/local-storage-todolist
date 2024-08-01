import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Section1 from "./components/section1/section1.jsx";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar></Navbar>
			<Section1></Section1>
		</>
	);
}

export default App;
