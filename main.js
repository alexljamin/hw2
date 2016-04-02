define(["react", "react-dom"],
  (React, ReactDOM) => {

    var RandomWords = React.createClass({
        render:function() {
            return (
                <input className="form-control" id="disabledInput" type="text" value="apple, banana, truck" disabled/>
            );
        }
    });
  

    var UserInput = React.createClass({
        render:function() {
            return (
                <input className="form-control" type="text" placeholder="Insert your words here" autoFocus/>
            );
        }
    });
  
    var Statistics = React.createClass({
        render:function() {
            return (
                <input className="form-control" id="disabledInput" type="text" value="20 word/min" disabled/>
            );
        }
    });

    var App = React.createClass({
        render:function() {
            return(
                <form>
                    <h3>Random Words</h3>
                    <RandomWords />
                    <h3>User input</h3>
                    <UserInput />
                    <h3>Statistics</h3>
                    <Statistics />
                </form> 
            );
        }
    });
  
    ReactDOM.render(
        // <CommentBox />,
        <App />,
        document.getElementById('container')
    );
});