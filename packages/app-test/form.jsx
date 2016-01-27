import React from 'react';

App = {};

App.TestForm = React.createClass({
  handleSubmit() {
    alert(this.refs.name.value.trim());
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="name" id="name" type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}); 
