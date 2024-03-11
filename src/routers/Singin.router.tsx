import React, { FC, PropsWithChildren } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Singin from "../components/pages/Authentication/Singin/Singin";

const SinginRouter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			

			<Routes>
				{/* <Route path="/camera" element={ <><Camera /></> } /> */}

				<Route
					path="/sing-in"
					element={
						<>
						{children}
							<Singin />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default SinginRouter;