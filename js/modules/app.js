import { addValues } from './functions.js';
import { addOperations } from './functions.js';
import { keyBoardEvents } from './functions.js';

export function runApp() {
    addValues();
    addOperations();
    keyBoardEvents();
}
