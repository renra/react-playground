var React = require('react');
var ReactDOM = require('react-dom');

var messages = [
  { id: 1, author: 'Honza', message: 'JezisMarjaaa' },
  { id: 2, author: 'Peeta', message: 'Nerouhej se. Pohane!' }
]

var Message = React.createClass({
  render: function(){
    return <div>Message from {this.props.author}: {this.props.children}</div>;
  }
});

var ChatLog = React.createClass({
  getInitialState: function(props){
    console.log('getInitialState');
    return { state: 'Initial' };
  },

  render: function(){
    var messages = this.props.messages.map(function(message) {
      return <Message key={message.id} author={message.author}>{message.message}</Message>;
    });

    return(
      <div>
        <div>State: {this.state.state}</div>
        <input type="text" ref="state" />
        <button onClick={this.handleButtonClick}>Change state</button>
        {messages}
      </div>
    )
  },

  handleButtonClick: function(){
    this.setState({ state: this.refs.state.value });
  },

  componentWillMount: function(){
    console.log('Component will mount');
  },

  componentDidMount: function(){
    console.log('Component did mount');
  },

  componentWillUnmount: function(){
    console.log('Component will unmount');
  },

  componentWillReceiveProps: function(newProps){
    console.log('Component will receive props: ', newProps);
  },

  shouldComponentUpdate: function(newProps, newState){
    console.log('Should component update: ', newProps, newState);
    return newState.state !== this.state.state;
  },

  componentWillUpdate: function(newProps, newState){
    console.log('Component will update: ', newProps, newState);
  },

  componentDidUpdate: function(newProps, newState){
    console.log('Component did update: ', newProps, newState);
  }
});

ReactDOM.render(
  <ChatLog messages={messages}/>,
  document.getElementById('example')
);
