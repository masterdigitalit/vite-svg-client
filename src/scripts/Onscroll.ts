import style from "../styles/components/pages/home.module.scss";

export interface IOnscroll {
	ClassName: HTMLDivElement | null;
}

export const Onscroll = ({ ClassName }: IOnscroll) => {
	if (ClassName != null) {
		// Все позиции элемента
		const targetPosition = {
				top: window.pageYOffset + ClassName.getBoundingClientRect().top,
				left: window.pageXOffset + ClassName.getBoundingClientRect().left,
				right: window.pageXOffset + ClassName.getBoundingClientRect().right,
				bottom: window.pageYOffset + ClassName.getBoundingClientRect().bottom,
			},
			// Получаем позиции окна
			windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight,
			};

		if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
			if (!ClassName.classList.contains("active")) {
				ClassName.classList.add(style["show"]);
			}
		}
	}
};
