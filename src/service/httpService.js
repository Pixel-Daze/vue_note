import { baseUrl } from '../config/env'
import axios from 'axios'

/* 抽象公共方法 */
export const fetch = (url,data) =>{
	return new Promise((resolve,reject) => {
		axios({
			methods:'get',
			url:baseUrl+url,
			params:data
		}).then(resp=>{
			resolve(resp)
		},reject)
	})
}