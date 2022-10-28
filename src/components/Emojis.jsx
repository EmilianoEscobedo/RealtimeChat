import { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EmojiPicker from 'emoji-picker-react'
import { useChatContext } from '../contexts/ChatContext';
import '../assets/css/Emojis.css'

export default function Emojis() {
    const {formValue, setFormValue, actualChat} =
    useChatContext();
    const [showPicker, setShowPicker] = useState(false);
    const onEmojiClick = (emojiObject) => {
        setFormValue(formValue+emojiObject.emoji)
        setShowPicker(false);
    };
    return (
    <div type="button" className="picker-btn">
      <EmojiEmotionsIcon onClick={() =>{setShowPicker( val => !val)}} />
      <div className='picker-spawn'>
        {showPicker && <EmojiPicker height={400} width={300}
        onEmojiClick={onEmojiClick}/>}
      </div>
    </div>
  )
}
