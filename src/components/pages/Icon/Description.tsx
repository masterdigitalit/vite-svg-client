import { FC } from "react";
import { Link } from "react-router-dom";
import style from "../../../styles/components/pages/icon.module.scss";

type IIconParams = {
	title: string | undefined;
	href: string | undefined;
	author: string | undefined;
	description: string | undefined;
	collection: string | undefined;
};
type IIcon = {
	Icon: IIconParams | undefined;
}

const Description: FC<IIcon> = ({Icon}) => {
	return (
		<>

				<div className={style.item}>
					<div className={style.title}>{Icon?.title}</div>
					<Link to={`/author/${Icon?.author}`}>
					<div className={style.author}>
						<div className={style.key}>Author :</div>
						<div className={style.value}>{Icon?.author}</div>
				
					</div>
					</Link>
					<div className={style.collection}>
						<div className={style.key}>Collection :</div>
						<div className={style.value}>{Icon?.collection}</div>
					</div>

					<div className={style.description}>{Icon?.description}</div>
					<div className={style.keywords}>
						{["fdfd", "bftb", "Xs", "tgwt", "CXvyn"].map((el) => (
						<Link to={`/tags/${el}`} key={el}><div className={style.item}>#{el}</div></Link>	
						))}
	
				</div>
			</div>
		</>
	);
};

export default Description;
