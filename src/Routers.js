const express = require('express')
const router = new express.Router();
const {addDetails,getDetails,deleteDetails,getUsersDetails,deleteAllDetails,updateDetails,updateUsersDetails} = require('./Controllers/UserController')
router.get('/',(req,res)=>{
    res.send('This is from response side')
})

router.post('/adduser',addDetails);
router.get('/getuser/:id',getDetails);
router.get('/getusers/',getUsersDetails);
router.get('/deleteuser/:id',deleteDetails);
router.get('/deleteusers/',deleteAllDetails);
router.patch('/updateuser/:id',updateDetails);
router.patch('/updateusers/:city',updateUsersDetails);



module.exports = router;