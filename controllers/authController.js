const User=require('../models/User');

const singup_get=(req,res)=>{
    res.render('signup');
}

const login_get=(req,res)=>{
    res.render('login');
}

const singup_post=async (req,res)=>{

    const { email, password } = req.body;

    try {
       const user = await User.create({ email, password });
       res.status(201).json(user);
     
    
    }
    catch(err) {
      console.log(err);
      res.status(400).send('error, user not created');
    }

    
}


const login_post=async (req,res)=>{
    const {email,password}=req.body;
    console.log(email,password)

    res.send(" user login");
}


module.exports={
    singup_get,
    login_get,
    singup_post,
    login_post
}


