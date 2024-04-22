function createSuccessResult(data){
      return { status: 'success',
               data   
    }
}

function createErrorResult(error){
    return{
        status: 'error'
        ,error
    }
}


module.exports={
    createErrorResult,
    createSuccessResult
}