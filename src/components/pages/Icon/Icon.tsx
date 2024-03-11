import React, { FC, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import style from "../../../styles/components/pages/icon.module.scss";
import axios from "../../../api/axios";
import { Download } from "../../../scripts/Download";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonComponent from "./Skeleton";

type IIcons = {
	title: string;
	href: string;
	svg: string;
	author: string;
	description: string;
	collection: string;
};

const Icon: FC = ({}) => {
	const [Loading, setLoading] = useState<boolean>(true);
	const [showDownload, setshowDownload] = useState<boolean>(false);

	const [Icon, setIcon] = useState<IIcons>();
	const { url } = useParams();
	const navigate = useNavigate();

	const [edit, SetEdit] = useState<string | null>();

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		SetEdit(urlParams.get("edit"));
		console.log(urlParams.get("edit"));
		console.log(edit);
	}, [new URLSearchParams(window.location.search)])
	

	useEffect(() => {


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
				let intervalId = setInterval(myFunction, 2000);
				function myFunction() {
					setLoading(false);
					setIcon(response.data);
					clearInterval(intervalId);
					console.log(response.data);
				}
			});
	}, []);

	return (
		<>
			{Loading ? (
				<SkeletonComponent />
			) : (
				<div className={style.icon}>
					<div className={style.item}>
						<div className={style.title}>{Icon?.title}</div>

						<div className={style.author}>
							<div className={style.key}>Author :</div>
							<div className={style.value}>{Icon?.author}</div>
						</div>
						<div className={style.collection}>
							<div className={style.key}>Collection :</div>
							<div className={style.value}>{Icon?.collection}</div>
						</div>

						<div className={style.description}>{Icon?.description}</div>
						<div className={style.keywords}>
							{["fdfd", "bftb", "Xs", "tgwt", "CXvyn"].map((el) => (
								<div className={style.item}>{el}</div>
							))}
						</div>
						<div className={style["add-to-like"]}>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#000"
								stroke-width="3"
								stroke-linecap="round"
							>
								<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
							</svg>{" "}
							сохранить
						</div>
						<div className={style["download"]}>
							<div className={style.button}>
								<div className={style.title}>
									{" "}
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#fff"
										stroke-width="3"
										stroke-linecap="round"
									>
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
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="arcs"
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
						<img
							src={` https://svg-blog-server.onrender.com/static/${Icon?.svg}`}
							loading="eager"
							alt=""
						/>
						<div className={style["edit-image"]}>
							{" "}
							<div
								className={style.button}
								onClick={() => {
									navigate({
										search: "?edit=true",
									});
								}}
							>
								{" "}
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#000"
									stroke-width="2"
									stroke-linecap="round"
								>
									<circle cx="13.5" cy="6.5" r=".5"></circle>
									<circle cx="17.5" cy="10.5" r=".5"></circle>
									<circle cx="8.5" cy="7.5" r=".5"></circle>
									<circle cx="6.5" cy="12.5" r=".5"></circle>
									<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
								</svg>{" "}
								edit-image
							</div>
						</div>
					</div>

					<div className={style.alike}></div>
				</div>
				
			)}<input type="color" name="" id="" />
		</>
	);
};

export default Icon;
