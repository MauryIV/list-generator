const TaskList = require('../lib/taskList')
const TaskListItem = require('../lib/taskListItem')

describe('TaskList', () => {
  it('should return the appropriate html task list when render() is called.', () => {
    const tasks = [
      new TaskListItem(['Task one']),
      new TaskListItem(['Task two']),
      new TaskListItem(['Task three'], true),
    ]
    const taskList = new TaskList(tasks);
    expect(taskList.render()).toEqual(`<ul class="tasks">${taskList.renderInnerHTML()}</ul>`)
  })
})