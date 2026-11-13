import { describe, expect, it } from 'vitest';
import { fakeBrowser } from 'wxt/testing/fake-browser';
import { savedTasks } from './storage';
import { addTask, toggleTask } from './tasks';

describe('savedTasks', () => {
  it('starts with examples and remembers changes', async () => {
    fakeBrowser.reset();
    const first = await savedTasks.getValue();
    expect(first.length).toBeGreaterThan(0);
    const next = toggleTask(addTask(first, 'Try the popup'), first[0]!.id);
    await savedTasks.setValue(next);
    expect(await savedTasks.getValue()).toEqual(next);
  });
});
