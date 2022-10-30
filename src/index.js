import './css/skeleton.css';
import './styles.scss';

import {TaskHolder} from './js/classes';


export const taskHoldersArray = []; taskHoldersArray.length = 3;
for (let i = 0; i < taskHoldersArray.length; i++) {
    taskHoldersArray[i] = new TaskHolder();
}
