function getImageURL(name:string | undefined){
	if(import.meta.env.VITE_MODE === 'development'){
	return  `http://192.168.1.3:3000/static/svg/${name}.svg`
}
if(import.meta.env.VITE_MODE === 'production'){
	return  `/static/svg${name}`
}
}
export default getImageURL