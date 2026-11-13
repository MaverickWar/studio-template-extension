import { storage } from '#imports';
import { sampleTasks, type Task } from './tasks';

// Saved in the browser's extension storage, so it survives restarts and is shared by the popup,
// the background script and content scripts.
export const savedTasks = storage.defineItem<Task[]>('local:tasks', { init: () => sampleTasks() });
