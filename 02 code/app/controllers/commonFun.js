module.exports={
	createResult:function(data,success=true,message=""){
		return {
			success:success,
			data:data,
			message:message
		}
	}
}