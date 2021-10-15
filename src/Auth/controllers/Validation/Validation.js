export const emailTest = (value) =>{
	let re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(value)){
		return false;
	}
	else return true;
}

export const passwordTest = (value) => {
   let re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if(!re.exec(value)){
            return false;
    }
    else return true;
}

export const namesTest = (value) => {
    let bool = true;
    let numbers = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < value.length; i++) {
        numbers.forEach((number)=>{
            if(value[i].includes(number)){
                bool =  false;   
            }
        })
    }
    return bool;  
}