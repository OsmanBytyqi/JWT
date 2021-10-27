const {Router}=require('express');

const authController= require("../controllers/authController");

const router =Router();

router.get('/singup',authController.singup_get);
router.post('/singup',authController.singup_post);
router.get('/login',authController.login_get);
router.post('/login',authController.login_post);


module.exports=router;