import { FC, PropsWithChildren } from "react";
import { Routes, Route } from "react-router-dom";
import Test from "../components/pages/Test/Test";

const TestRouter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Routes>
				<Route
					path="/test"
					element={
						<>
							{children}
							<Test />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default TestRouter;
