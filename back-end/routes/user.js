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
      if(exUser.password === password) return res.status(200).send();
      return res.status(401).send({msg: '비밀번호가 틀렸습니다.'});
    } else {
      return res.status(401).send({msg: '존재하지 않는 아이디 입니다.'});
    }
  } catch (e) {
    console.log(e);
  }
}));

module.exports = router;
