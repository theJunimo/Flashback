import React, { useCallback } from 'react';
import styles from './Block.scss';
import classNames from 'classnames/bind';
import TagList from 'components/block/TagList';
import NoticeMark from 'components/block/NoticeMark';
import { useDispatch, useSelector } from 'react-redux';
import { showCopyModal, closeCopyModal, increaseCopyCnt } from 'modules/copy';

const cx = classNames.bind(styles);

const Block = ({ notice, data }) => {
  const dispatch = useDispatch();
  const copyModalVisible = useSelector(({copy}) => copy.copyModalVisible);
  const onCopy = useCallback(() => {
    try {
      const el = document.createElement('textarea');
      el.value = data.emoticon;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      //이미 모달이 띄워져 있는 상태라면 모달을 다시 띄울 필요가 없음.
      //모달이 화면에 안보이는 경우에만 모달을 띄워주는 action dispatch
      if(!copyModalVisible) {
        //모달 보여주기
        dispatch(showCopyModal('복사 완료! ٩( ᐛ )و'));
        //모달 5초 후 사라지도록 setTimeout설정
        const closeModal = () => dispatch(closeCopyModal());
        setTimeout(closeModal, 3000);
      }
      //copyCount올리는 API
      dispatch(increaseCopyCnt(data.id));
      
    } catch (e) {
      dispatch(showCopyModal('복사 실패 ◟꒰◍´Д‵◍꒱◞'));
    }
  }, [dispatch, data, copyModalVisible]);

  return (
    <li className={cx('Block')} onClick={onCopy}>
      {notice && <NoticeMark>{notice}</NoticeMark>}
      <header className={cx('emoticon')}>
        <span>{data.emoticon}</span>
      </header>
      <TagList tagList={data.tag} />
    </li>
  );
};

export default React.memo(Block);
