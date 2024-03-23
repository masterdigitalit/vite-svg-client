import  { FC, PropsWithChildren } from "react";
import { Routes, Route } from "react-router-dom";
import Collection from "../components/pages/Collection/Collection";

const CollectionRouter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			

			<Routes>
				{/* <Route path="/camera" element={ <><Camera /></> } /> */}

				<Route
					path="/collection/:url"
					element={
						<>
						{children}
							<Collection />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default CollectionRouter;
