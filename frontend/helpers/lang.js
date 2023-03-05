// helpers.js

import messages from './messages.json';
import {LANG_LOCALE} from '../config/config'

function getMessage(key) {
  return messages[LANG_LOCALE][key];
}

export { getMessage };
