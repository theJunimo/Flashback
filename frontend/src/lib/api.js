import axios from "axios";

//모든 이모티콘 가져오기
export const getAllEmoticons = () => axios.get(`${process.env.REACT_APP_SERVER}/emoticons`);

//새로운 이모티콘 등록
export const postNewEmoticon = data => axios.post(`${process.env.REACT_APP_SERVER}/emoticons`, data);

//태그별로 이모티콘 가져오기
export const getEmoticonsByTag = tagName => axios.get(`${process.env.REACT_APP_SERVER}/tags?tag=${tagName}`);

//카피 누를때마다 해당 이모티콘의 copyCount올리기
export const increaseCopyCnt = emoticonId =>
  axios.post(`${process.env.REACT_APP_SERVER}/emoticons/${emoticonId}`);
