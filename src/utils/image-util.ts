function getImageURL(name:string){
		return new URL (`../assets/static/svg${name}`).href
}
export default getImageURL