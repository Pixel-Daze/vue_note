import { baseUrl } from '../config/env'
import axios from 'axios'

/* ajax-get */
export const fetch = (url,data={}) =>{
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

/* ajax-post */
export const postData = (url,data={}) =>{
	return new Promise((resolve,reject)=>{
		axios({
			methods:'post',
			url:baseUrl+url,
			data:data
		}).then(resp=>{
			resolve(resp)
		},reject)
	})
}