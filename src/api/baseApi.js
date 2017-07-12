import { fetch } from '../service/httpService'

/* get Index data */
export function getIndexData(){
	fetch('static/json/appIndex/appIndexBase.json',{})
}