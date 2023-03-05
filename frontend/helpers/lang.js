// helpers.js

import messages from './messages.json';
import {LANG_LOCALE} from '../config/config';

const getMessage = (key) => {
  // if (typeof window !== 'undefined') {
  //   if(!localStorage.getItem('utra_lang'))
  //     localStorage.setItem('utra_lang', 'du');
    
  //   const utra_lang = localStorage.getItem('utra_lang');
  //   // debugger
    
  //   return messages[utra_lang][key];
  // }
  // else 
  {
    return messages[LANG_LOCALE][key];
  }
}

export { getMessage };