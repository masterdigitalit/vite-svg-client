import { FC, PropsWithChildren } from "react";
import { Routes, Route } from "react-router-dom";
import Singin from "../components/pages/Authentication/Singin/Singin";

const SinginRouter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Routes>
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
