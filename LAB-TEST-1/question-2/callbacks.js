const delayedSuccess = () =>{

    setTimeout(()=>{
        let success = {'message':'delayed success!'}
        console.log(success);

    },500)
}

const resolvedPromise = () =>{

    return new Promise((resolve, reject) => {
        let success = {'message': 'delayed success!'}
        setTimeout(resolve,console.log(success), 500);
    });

}

const delayedException = ()=>{
    setTimeout(()=>{
        
        try{
            throw new Error('error: delayed exception!');
        }catch(e){
            console.error(e);
        }
    }, 500)
}

async function rejectedPromise() {
    try {
      var z = await Promise.reject(console.log({error: 'delayed exception!'}));
    } catch(e) {
      console.error(e); //
    }
  }

// delayedSuccess()
// delayedException()
resolvedPromise()
rejectedPromise()