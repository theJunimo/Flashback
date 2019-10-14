import React,{ useState, useRef, useCallback } from 'react';
import styles from './AddEmtiModal.scss';
import classNames from 'classnames/bind';
import { colors } from 'lib/colorPick';
import { useDispatch} from 'react-redux';
import { closeAddModal } from 'modules/base';
const cx = classNames.bind(styles);

const AddEmtiModal = () => {
  const [emoticon, setEmoticon] = useState('');
  const [tags, setTags] = useState([]);
  const emoticonEl = useRef(null);
  const tagEl = useRef(null);
  const dispatch = useDispatch();

  const handleCloseAddModal = useCallback(() => {
    dispatch(closeAddModal());
  }, []);

  const handleEmoticon = useCallback(() => {
    const str = emoticonEl.current.value;
    if(str.length > 15) {
      emoticonEl.current.value = str.slice(0, 15);
    }
  }, []);

  const handleTags = useCallback(() => {
    const str = tagEl.current.value;
    if(str.length > 10) {
      tagEl.current.value = str.slice(0, 10);
    }
  }, []);

  const handleAddTag = useCallback(() => {
    if(tags.length === 6) return false;
    const tag = tagEl.current.value;
    if(tag) {
      return tags.indexOf(tag) === -1? setTags(tags.concat(tag)) : false;
    };
  }, [tags]);

  const handleDeleteTag = useCallback((targetIdx) => {
    const filteredTags = tags.filter((el, idx) => idx !== targetIdx);
    setTags(filteredTags);
  });

  const handleSubmit= useCallback(() => {
    const str = emoticonEl.current.value;
    if(str){
      setEmoticon(str);
      const data = {
        emoticon: emoticon,
        tag: tags
      };

    }
  }, []);

  const tagList = tags.map((tagName, idx) => {
      return (
        <li
          key={idx}
          style={{backgroundColor: colors[idx]}}
        >
          <span className = {cx('tagName')}># {tagName}</span>
          <span className = {cx('deleteIcon')} onClick = {() => handleDeleteTag(idx)}>&times;</span>
        </li>
      );
    });

  return (
    <div className={cx('AddEmtiModal')}>
      <div className = {cx('contentWrapper')}>
        <h2>I'mticon 추가하기</h2>
        <input
          className={cx('emtiInput')}
          type="text"
          placeholder="이모티콘을 입력해주세요!"
          ref={emoticonEl}
          onChange = {handleEmoticon}
        />
        <div className={cx('tagInput')}>
          <span className={cx('hashTag')}>#</span>
          <input type="text" placeholder="태그입력" ref={tagEl} onChange = {handleTags}/>
          <div className={cx('tagAddBtn')} onClick = {handleAddTag}>태그 추가</div>
        </div>
        <ul className={cx('tagList')}>
          {tagList}
        </ul>
        <ul className={cx('li-wrapper')}>
          <li>이모티콘은 16글자, 태그는 10글자 제한이 있습니다.</li>
          <li>가능한 태그 개수는 최대 6개입니다. </li>
          <li>이미 존재하는 이모티콘은 추가되지 않습니다.</li>
          <li>적절하지 못한 이모티콘은 추후 삭제될 수 있습니다.</li>
        </ul>
        <div className={cx('options')}>
          <div className={cx('btn confirm')}>확인</div>
          <div className={cx('btn cancel')} onClick = { handleCloseAddModal }>취소</div>
        </div>
      </div>
    </div>
  );
};

export default AddEmtiModal;
