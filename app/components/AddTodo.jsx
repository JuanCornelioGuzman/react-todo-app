var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;

    if(todo.length > 0){
      this.refs.todo.value = '';
      this.props.onSetTodo(todo);
    }else{
      this.refs.todo.focus();
    }
  },
  render: function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input ref="todo" type="text" placeholder="Enter todo"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
