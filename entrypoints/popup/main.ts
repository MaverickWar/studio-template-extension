import { applyTheme, projectName } from '../../design/adapters/web/studio-theme';
import { savedTasks } from '../../utils/storage';
import { addTask, removeTask, toggleTask, type Task } from '../../utils/tasks';
import './style.css';

// Colours, fonts and corners come from design/tokens.json (Universal App Studio writes it).
applyTheme();
document.title = projectName;
document.getElementById('name')!.textContent = projectName;
document.getElementById('mark')!.textContent = projectName.charAt(0);

const list = document.getElementById('list')!;
const input = document.querySelector<HTMLInputElement>('#new-task')!;
let tasks: Task[] = [];

async function update(next: Task[]) {
  tasks = next;
  render();
  await savedTasks.setValue(next);
}

function render() {
  const open = tasks.filter((t) => !t.done).length;
  document.getElementById('summary')!.textContent = open ? `${open} to do` : 'All done';
  document.getElementById('empty')!.hidden = tasks.length > 0;
  list.replaceChildren(
    ...tasks.map((t) => {
      const li = document.createElement('li');
      li.className = `task${t.done ? ' done' : ''}`;
      li.innerHTML = `<label><input type="checkbox"><span></span></label>
        <button class="btn btn-quiet" type="button"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m1 0-1 14H8L7 6"/></svg></button>`;
      li.querySelector('span')!.textContent = t.title;
      const box = li.querySelector('input')!;
      box.checked = t.done;
      box.addEventListener('change', () => update(toggleTask(tasks, t.id)));
      const del = li.querySelector('button')!;
      del.setAttribute('aria-label', `Delete "${t.title}"`);
      del.addEventListener('click', () => update(removeTask(tasks, t.id)));
      return li;
    }),
  );
}

document.getElementById('add')!.addEventListener('submit', (e) => {
  e.preventDefault();
  update(addTask(tasks, input.value));
  input.value = '';
});

// Keep in step if another window changes the list.
savedTasks.watch((next) => {
  tasks = next;
  render();
});
savedTasks.getValue().then((t) => {
  tasks = t;
  render();
  input.focus();
});
