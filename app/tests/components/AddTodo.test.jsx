var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  it('should call onSetTodo if valid text entered', () => {
    var spy = expect.createSpy();

    var addToDo = TestUtils.renderIntoDocument(<AddTodo onSetTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todo.value = 'Do it';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Do it');
  });

  it('should not call onSetTodo if valid text entered', () => {
    var spy = expect.createSpy();

    var addToDo = TestUtils.renderIntoDocument(<AddTodo onSetTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})
