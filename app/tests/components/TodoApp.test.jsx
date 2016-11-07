var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exists', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the state on handleAddTodo', () => {
    var todoText = 'Add new task';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
    //Expect createdAt to be a number
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test me',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleOnToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

    //expect completedAt to be a number
  });

  it('should toggle todo from completed to incomplete', () => {
    var todoData = {
      id: 11,
      text: 'Test me',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleOnToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });

});
