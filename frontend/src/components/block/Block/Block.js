import React, { useCallback } from 'react';
import styles from './Block.scss';
import classNames from 'classnames/bind';
import TagList from 'components/block/TagList';
import BestMark from 'components/block/BestMark';
import { useDispatch } from 'react-redux';
import { showModal, increaseCopyCnt } from 'modules/copy';

const cx = classNames.bind(styles);

const Block = ({ best, data }) => {
  const dispatch = useDispatch();
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

    //모달 보여주기
    dispatch(showModal('복사 완료! ٩( ᐛ )و'));

    //copyCount올리는 API
    dispatch(increaseCopyCnt(data.id));

    } catch(e) {
      dispatch(showModal('복사 실패 ◟꒰◍´Д‵◍꒱◞'));
    }

  }, [dispatch, data]);

  return (
    <li className={cx('Block')} onClick={onCopy}>
      {best && <BestMark/>}
      <header className={cx('emoticon')}>
        <span>{data.emoticon}</span>
      </header>
      <TagList tagList={data.tag} />
    </li>
  );
};

export default React.memo(Block);
