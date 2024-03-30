import { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "../../../styles/components/pages/icon.module.scss";
import axios from "../../../api/axios";
import SkeletonComponent from "./Skeleton";
import Description from "./Description";
import getImageURL from "../../../utils/image-util";
type IIcons = {
	title: string;
	href: string;
	svg: string;
	author: string;
	description: string;
	collection: string;
};

const Icon: FC = () => {
	const [Loading, setLoading] = useState<boolean>(true);
	const [showDownload, setshowDownload] = useState<boolean>(false);

	const [Icon, setIcon] = useState<IIcons>();
	const { url } = useParams();
	const navigate = useNavigate();

	const [edit, SetEdit] = useState<boolean>();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		SetEdit(urlParams.get("edit") ? true : false);
	}, [new URLSearchParams(window.location.search)]);

	useEffect(() => {
		(url);
		// try {
		// 👇️ const data: GetUsersResponse
		axios
			.post("img/get-icon", {
				headers: {
					Accept: "application/json",
				},
				body: {
					title: url,
				},
			})
			.then((response) => {
				const intervalId = setInterval(myFunction, 2000);
				function myFunction() {
					setLoading(false);
					setIcon(response.data);
					clearInterval(intervalId);
					(response.data);
				}
			});
	}, []);

	return (
		<>
			{edit ? (
				<>
					<p id="text"></p>
					<input type="color" name="" id="" />
				</>
			) : (
				<>
					{Loading ? (
						<SkeletonComponent />
					) : (
						<div className={style.icon}>
							<div className={style.item}>
								<Description Icon={Icon} />
								<div className={style["add-to-like"]}>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round">
										<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
									</svg>{" "}
									сохранить
								</div>
								<div className={style["download"]}>
									<div className={style.button}>
										<div className={style.title}>
											{" "}
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
												<path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
											</svg>{" "}
											скачать
										</div>
										<hr></hr>
										<div className={style.open}>
											<svg
												onClick={() => {
													setshowDownload(!showDownload);
												}}
												height="18"
												width="18"
												viewBox="0 0 24 24"
												stroke="#fff"
												fill="none"
												transform="rotate(90)"
												strokeWidth="2"
												strokeLinecap="round"
											>
												<path d="M9 18l6-6-6-6"></path>
											</svg>
										</div>
									</div>
									{showDownload && (
										<>
											<div className={style["download-params"]}></div>
										</>
									)}
								</div>
							</div>

							<div className={style.image}>
								<img src={getImageURL(Icon?.title)} loading="eager" alt="" />
								<div className={style["edit-image"]}>
									<div
										className={style.button}
										onClick={() => {
											navigate({
												search: "?edit=true",
											});
										}}
									>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
											<circle cx="13.5" cy="6.5" r=".5"></circle>
											<circle cx="17.5" cy="10.5" r=".5"></circle>
											<circle cx="8.5" cy="7.5" r=".5"></circle>
											<circle cx="6.5" cy="12.5" r=".5"></circle>
											<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
										</svg>
										edit-image
									</div>
								</div>
							</div>

							<div className={style.alike}></div>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Icon;
