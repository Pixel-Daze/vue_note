import { fetch,postData } from '../service/httpService'

/* get Index data */
export function getIndexData(){
	return fetch('./static/json/appIndex/appIndexBase.json')
}