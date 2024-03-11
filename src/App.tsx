import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/widgets/Header/Header";
import Home from "./components/pages/Home/Home";
import "./App.css";
import Search from "./components/elements/Search/Search";
import CollectionRouter from "./routers/Collection.router";
import AuthorRouter from "./routers/Author.router";
import IconRouter from "./routers/Icon.router";
import LoginRouter from "./routers/Login.router";
import SinginRouter from "./routers/Singin.router";


function App() {
	return (
		<div className="App">
			<LoginRouter>
			<Header />
				{/* <Search /> */}
			</LoginRouter>
			<SinginRouter>
			<Header />
				{/* <Search /> */}
			</SinginRouter>
			<CollectionRouter>
				<Header />
				<Search />
			</CollectionRouter>
			<AuthorRouter>
				<Header />
				<Search />
			</AuthorRouter>
			<IconRouter>
				<Header />
				<Search />
			</IconRouter>
		
							
			
			<Routes>
				{/* <Route path="/camera" element={ <><Camera /></> } /> */}

				<Route
					path="/"
					element={
						<>
							<Header />
							<Home>
								<Search />
							</Home>
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
