import "./App.css";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home/>}></Route>
				<Route path="/:id" element={<PostDetail/>}></Route>
			</Routes>
		</Router>
	);
}

export default App;
