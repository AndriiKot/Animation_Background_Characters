'use strict';

import config from './config.js';
import loadLetters from './fetchLoadLetters.js';

const letters = await loadLetters(config.letters);

