import './css/skeleton.css';
import './styles.scss';

import './js/classes';
import { TaskHolder } from './js/classes';

export const taskHolders = []; taskHolders.length = 3;
taskHolders.fill(new TaskHolder);
