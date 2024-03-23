import  { FC, PropsWithChildren } from "react";
import { Routes, Route } from "react-router-dom";
import Icon from "../components/pages/Icon/Icon";

const IconRouter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			

			<Routes>
				{/* <Route path="/camera" element={ <><Camera /></> } /> */}

				<Route
					path="/icon/:url"
					element={
						<>
						{children}
							<Icon />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default IconRouter;