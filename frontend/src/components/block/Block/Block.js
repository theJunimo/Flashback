import React, { useCallback } from 'react';
import styles from './Block.scss';
import classNames from 'classnames/bind';
import TagList from 'components/block/TagList';
import NoticeMark from 'components/block/NoticeMark';
import { useDispatch } from 'react-redux';
import { increaseCopyCnt, showCopyModal } from 'modules/copy';

const cx = classNames.bind(styles);

const Block = ({ handleModalVisibility, notice, data }) => {
  const dispatch = useDispatch();

  const handleCopy = useCallback((e) => {
    const el = document.createElement('textarea');
    el.value = data.emoticon;
    el.style.opacity = '0';
    e.target.appendChild(el);

    // handle iOS as a special case
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      const range = document.createRange();
      range.selectNodeContents(el);

      el.contentEditable = true;
      el.readOnly = false;

      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(range);

      el.setSelectionRange(0, data.emoticon.length);
    } else {
      el.select();
    }
    
    document.execCommand('copy');
    e.target.removeChild(el);

    //copy modal보이기
    dispatch(showCopyModal());
    //copyCount올리는 API
    dispatch(increaseCopyCnt(data.id));
  }, [dispatch, data, showCopyModal]);

  return (
    <li className={cx('Block')} onClick={(e) => handleCopy(e)}>
      {notice && <NoticeMark>{notice}</NoticeMark>}
      <header className={cx('emoticon')}>
        <span>{data.emoticon}</span>
      </header>
      <TagList tagList={data.tag} />
    </li>
  );
};

export default React.memo(Block);
