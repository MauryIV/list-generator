// It's done when I have created a testing suite for the TaskListItem class that verifies that the list item renders correctly.
// It's done when the TaskListItem class testing suite also verifies that a priority task renders correctly.

const TaskListItem = require('../lib/taskListItem')

describe('TaskListItem', () => {
  it('should return the appropriate html list item without priority', () => {
    const taskListItem = new TaskListItem(['Task one']);
    expect(taskListItem.render()).toEqual(`<li class="tasks-item">${taskListItem.renderInnerHTML()}</li>`);
  });

  it('should return the appropriate html list item with priority', () => {
    const taskListItem = new TaskListItem(['Task two'], true);
    expect(taskListItem.render()).toEqual(`<li class="tasks-item tasks-item-priority">${taskListItem.renderInnerHTML()}</li>`);
  });
})