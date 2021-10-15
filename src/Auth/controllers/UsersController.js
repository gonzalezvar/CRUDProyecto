import users from "../models/UsersModel.js";
import { emailTest,passwordTest,namesTest } from "./Validation/Validation.js";

const login = async({email, password}) => {
    const user = await users.find();
    
    if(!email == '' && !password == ''){
        for(let i=0; i<user.length; i++){
            const bEmail = user[i].email; console.log(bEmail);
            const bPassword = user[i].password;
            if(bEmail === email && bPassword === password){
                return {name: user[i].name,
                        lastName:user[i].lastName,
                        role:user[i].role}
            }
            else{
                return {error: "error al ingresar"}
            }
        }    
    }else{
        return {error:"Datos Vacios"}
    }
}

const register = async({email,password,name,lastName,role,shop}) => {
    const data = await users.findOne({email});

    if(data == null){
        if(emailTest(email)==true){
            if(passwordTest(password)==true){
                if(namesTest(name)==true){
                    if(namesTest(lastName)){
                        return{ 
                            email,
                            password,
                            name,
                            lastName,
                            role,
                            shop
                        }
                    }else{
                        return{error:"El apellido no puede contener numeros"}
                    }
                }else{
                    return{error:"El nombre no puede contener numeros"};
                }
            }else{
                return{error:"La contraseña debe contener 1 Mayuscula/Simbolo/Numero"}
            }
        }else{
            return{error:"Error en el email"}
        }

    }else{
        return {
            error:"El correo ya está en uso"
        }
    }
}



export {login,register} ;