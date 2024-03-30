interface UrlParams {
	title: string | URL;
}

export default function GetUrlParams({ title }: UrlParams) {
	const urls = new URL(title);
	return urls.pathname.split("/").splice(1);
}
