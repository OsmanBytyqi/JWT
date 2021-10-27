const singup_get=(req,res)=>{
    res.render('signup');
}

const login_get=(req,res)=>{
    res.render('login');
}

const singup_post=(req,res)=>{

    res.send(" new sign up");
}


const login_post=(req,res)=>{
    res.send(" user login");
}


module.exports={
    singup_get,
    login_get,
    singup_post,
    login_post
}


