var Counter = React.createClass({

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    getDefaultProps:function(){
    	console.log('Load data from database')
    },

    componentDidMount: function(){
    	console.log('Set Jquery Action');
    },
	
    checkConter: function () {
		if(this.state.counter <= 0 ){
			return this.state.counter + 10
		}else{
			return this.state.counter - 1
		}
    },

    decrement: function () {
    	this.setState({
    		counter: this.checkConter()
    	});
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('button', {onClick: this.increment}, '+')
        );
    }

});

var counters = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  }
];


var Counters = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var counters = this.props.items.map(function(counter) {
        return React.createElement(Counter, {item: counter, key: counter.id});
    });

    return (
      React.createElement('ul', {className: 'counters'}, counters)
    );
  }
});

var element = React.createElement(Counters, {items: counters});
ReactDOM.render(element, document.getElementById('app'));
