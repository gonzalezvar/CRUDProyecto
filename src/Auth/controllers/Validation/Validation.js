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

export const isNameProduct = (nameProduct) => {
if (nameProduct.length > 5 && nameProduct !== '') {
    return true;
} else {
    return false;
}
};

export const isDescription = (description) => {
    if (description.length > 10 && description !== '') {
    return true;
    } else {
    return false;
    }
};

export const isPrice = (price) => {
    if (price > 0) {
    return true;
    } else {
    return false;
    }
};

export const isImage = (image) => {
    if (image !== '') {
    return true;
    } else {
    return false;
    }
};

export const isStock = (stock) => {
    if (stock !== '' && stock >= 1) {
    return true;
    } else {
    return false;
    }
};