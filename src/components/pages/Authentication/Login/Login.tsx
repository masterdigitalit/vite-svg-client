import  { FC } from "react";
import { Link } from "react-router-dom";
import style from "../../../../styles/components/pages/login.module.scss";
const Login: FC = () => {
	return (
		<div className={style.login}>

			<div className={style.main}>
				<div className={style.form}>
				<div className={style.title}>Войти в личный кабинет</div>
					<div className={style.group}>
						<input required={true} type="text" className={style.input} />
						<span className={style.highlight}></span>
						<span className={style.bar}></span>
						<label>Name</label>
					</div>
					<div className={style.group}>
						<input required={true} type="text" className={style.input} />
						<span className={style.highlight}></span>
						<span className={style.bar}></span>
						<label>Password</label>
					</div>

					<button>войти</button>

					<div className={style["create-account"]}>
						нет аккаунта ? <Link to={'/sing-in'}>зарегистрироваться</Link> 
						
					</div>
					<div className={style['continue-with']}>
						{/* <div className={style.title}>или можно продолжить с</div> */}
						<div className={style['sing-in-container']}><div className=""><img src={'/static/svg/icons/google.svg'} alt="" /> <div className={style.title}>google</div> </div><div className=""><img src={'/static/svg/icons/yandex.svg'} alt="" /> <div className={style.title}>yandex</div> </div></div>
						</div>
				</div>
				<div className={style.icon}>
					<img
						src={"/static/svg/pages/login.svg"}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
export default Login;
