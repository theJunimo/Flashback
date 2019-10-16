import React, { useCallback } from 'react';
import styles from './Block.scss';
import classNames from 'classnames/bind';
import TagList from 'components/block/TagList';
import NoticeMark from 'components/block/NoticeMark';
import { useDispatch } from 'react-redux';
import { increaseCopyCnt } from 'modules/copy';

const cx = classNames.bind(styles);

const Block = ({ handleModalVisibility, notice, data }) => {
  const dispatch = useDispatch();

  const onCopy = useCallback(() => {
    const el = document.createElement('textarea');
    el.value = data.emoticon;
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    // handle iOS as a special case
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      const range = document.createRange();

      el.contentEditable = true;
      el.readOnly = false;
      range.selectNodeContents(el);

      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(range);

      el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.
    } else {
      el.select();
    }

    document.execCommand('copy');
    document.body.removeChild(el);

    //copy modal보이기
    handleModalVisibility();
    //copyCount올리는 API
    dispatch(increaseCopyCnt(data.id));
  }, [dispatch, data, handleModalVisibility]);

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
