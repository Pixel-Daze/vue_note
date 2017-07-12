export const alloyDebug = (to,next) =>{
	if(process.env.NODE_ENV == 'development'){
		require('alloylever')
		if(!to.query.vconsole){
	        to.query.vconsole = 'show'
	        next({
	            path:to.path,
	            query:to.query
	        })
	    }else{
	        next()
	    }
	}else if(process.env.NODE_ENV == 'production'){
		next()
	}
}
