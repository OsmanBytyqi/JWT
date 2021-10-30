const User=require('../models/User');


//handle Errors
// const handleErrors=(err)=>{
//     console.log(err.message,err.code)

//     let errors={email:'', password:''};

//     // if(err.message.includes('user validation failed')){
//     //     Object.values(err.errors).forEach(({properties})=>{
//     //         errors[properties.path]=properties.message;
//     //     });
//     // }
//   }
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
   // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      // console.log(err);
      Object.values(err.errors).forEach(({ properties }) => {
        // console.log(val);
        // console.log(properties);
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }


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
        const errors = handleErrors(err);
        res.status(400).json({ errors });
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


