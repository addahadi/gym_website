
export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c21a759ab7msh1d11cb213d36bf9p10e441jsn82a9681bb8fa',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};





export const fetchData = async (url , options) =>{
    const response = await fetch(url , options)
    const Data = await response.json()
    return Data
}