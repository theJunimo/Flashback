import React, { useEffect, useCallback } from 'react';
import styles from './BlockListWrapper.scss';
import LoadingBar from 'components/LoadingBar';
import classNames from 'classnames/bind';
import Block from 'components/block/Block';
import NoSearchResult from 'components/NoSearchResult';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmoticons } from 'modules/base';
import { showCopyModal, closeCopyModal } from 'modules/copy';
const cx = classNames.bind(styles);

const BlockListWrapper = () => {
  const dispatch = useDispatch();
  const status = useSelector(({ base }) => base.status);
  const list = useSelector(({ base }) => {
    return base.list;
  });
  const copyModalVisible = useSelector(({ copy }) => copy.copyModalVisible);
  const loading = useSelector(({ loading }) => {
    if (loading.GET_EMOTICONS_ASYNC || loading.POST_NEW_EMOTICON_ASYNC)
      return true;
    if (loading.GET_EMOTICONS_BY_TAG_ASYNC) return true;
  });

  const dispatchShowModal = useCallback(() => {
    //이미 모달이 띄워져 있는 상태라면 모달을 다시 띄울 필요가 없음.
    //모달이 화면에 안보이는 경우에만 모달을 띄워주는 action dispatch
    if (!copyModalVisible) {
      //모달 보여주기
      dispatch(showCopyModal('복사 완료! ٩( ᐛ )و'));
      //모달 5초 후 사라지도록 setTimeout설정
      const closeModal = () => dispatch(closeCopyModal());
      setTimeout(closeModal, 3000);
    }
  }, [dispatch, copyModalVisible]);

  useEffect(() => {
    dispatch(getAllEmoticons());
  }, [dispatch]);

  const blocks = list.map((el, idx) => (
    <Block
      key={idx}
      data={el}
      notice={
        status === 'main' && idx <= 2
          ? '❤︎BEST❤︎'
          : status === 'new'
          ? '등록완료!'
          : status === 'already exist'
          ? '이미 있어요!'
          : false
      }
      handleModalVisibility={dispatchShowModal}
    />
  ));

  return (
    <ul className={cx('BlockListWrapper')}>
      {loading ? (
        <LoadingBar />
      ) : list.length === 0 ? (
        <NoSearchResult />
      ) : (
        blocks
      )}
    </ul>
  );
};

export default React.memo(BlockListWrapper);
