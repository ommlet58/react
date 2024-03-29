function SignUpValidation(values){
    let error= {};
    const email_pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(values.name === ""){
        error.name= "Name should not be empty"
    }
    else{
        error.name = ""
    }
    if(values.email === ""){
        error.email= "Email should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email Didn't match"
    }else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password Should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password="Password didn't match"
    }else{
        error.password=""
    }
    return error;

}


export default SignUpValidation