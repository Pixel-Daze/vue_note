import { fetch,postData } from '../service/httpService'

/* @desc:get Index data */
export function getIndexData(){
	return fetch('./static/json/appIndex/appIndexBase.json')
}

/* @desc:get filter-bar data */
export function getFilterData(){
	return fetch('./static/json/mockData/filterData.json')
}