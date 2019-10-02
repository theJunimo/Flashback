const express = require('express');
const router = express.Router();
const { User } = require('../models');

const wrap = asyncFn => {
  return (async(req, res, next) => {
    try {
      return await asyncFn(req, res, next)
    } catch (error) {
      return next(error)
    }
  })  
}


//로그인
router.post('/auth', wrap(async(req,res,next)=> {
  const { id, password } = req.body;
  try{
    const exUser = await User.findOne({where: {id}});
    if(exUser) {
      if(exUser.password === password) {
        res.cookie('id', exUser.id);
        return res.status(200).send(
          {
            id: exUser.id, 
            profile: exUser.profile,
            nick: exUser.nick,
            rate: exUser.rate,
          });
      }
      return res.status(401).send();
    } else {
      return res.status(401).send();
    }
  } catch (e) {
    console.log(e);
  }
}));

module.exports = router;
