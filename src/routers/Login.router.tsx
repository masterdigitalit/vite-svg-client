import  { FC, PropsWithChildren } from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../components/pages/Authentication/Login/Login'

const LoginRouter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			

			<Routes>
				{/* <Route path="/camera" element={ <><Camera /></> } /> */}

				<Route
					path="/login"
					element={
						<>
						{children}
							<Login />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default LoginRouter;