import users from "../models/UsersModel.js";
import { emailTest, passwordTest, namesTest } from "./Validation/Validation.js";

const login = async ({ email, password }) => {
    const user = await users.findOne({ email });

        if (user != null) {
            if (user.email === email) {
                if (user.password === password) {
                    return{
                        id:user._id,
                        email:user.email,
                        name:user.name,
                        lastName:user.lastName,
                        role:user.role,
                    }
                }else{
                    return {fail: "contraseña incorrecta"}
                }
            }else{
                return {fail: "Correo incorrecto"}
            }
        } else {
            return {fail: "Datos incorrectos"}
        }

}

const register = async ({ email, password, name, lastName, role, shop }) => {
    const data = await users.findOne({ email });

    if (data == null) {
        if (emailTest(email) == true) {
            if (passwordTest(password) == true) {
                if (namesTest(name) == true) {
                    if (namesTest(lastName)) {
                        return {
                            email,
                            password,
                            name,
                            lastName,
                            role,
                            shop
                        }
                    } else {
                        return { error: "El apellido no puede contener numeros" }
                    }
                } else {
                    return { error: "El nombre no puede contener numeros" };
                }
            } else {
                return { error: "La contraseña debe contener 1 Mayuscula/Simbolo/Numero" }
            }
        } else {
            return { error: "Error en el email" }
        }

    } else {
        return {
            error: "El correo ya está en uso"
        }
    }
}



export { login, register };