import { fetch,postData } from '../service/httpService'

/* @desc:get Index data */
export function getIndexData(){
	// separate development mode and production mode
	let req = `./static/json/appIndex/${process.env.NODE_ENV == 'development'?'dev':'prod'}.json`
	return fetch(req)
}

/* @desc:get filter-bar data */
export function getFilterData(){
	return fetch('./static/json/mockData/filterData.json')
}