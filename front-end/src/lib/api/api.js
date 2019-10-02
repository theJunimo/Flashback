import client from './client';

//로그인
export const loginAPI = (data) => client.post('/user/auth', data);

//새 앨범 만들기
export const createAlbumAPI = (data) => client.post('/album/new', data);

//앨범 수정하기
export const changeAlbumAPI = (data) => client.post('/album', data);

//앨범 사진 불러오기
export const getPhotoAPI = (albumId) => client.get(`/album/${albumId}`);

// 사진 올리기
export const uploadPhotoAPI = (data) => client.post(`/album/photo`, data);
