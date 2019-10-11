import axios from 'axios';

//모든 이모티콘 가져오기
export const getAllEmoticons = axios.get('/emoticons');

//태그별로 이모티콘 가져오기
export const getEmoticonsByTag = (tagName) => axios.get(`tags?tag=${tagName}`);

//카피 누를때마다 해당 이모티콘의 copyCount올리기
export const increaseCopyCnt = (emoticonId) => axios.post(`emoticons${emoticonId}`);