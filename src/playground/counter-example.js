console.log('App.js is running');


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }
    handleAddOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        // this.setState((previousState) => {
        //     return {
        //         count: previousState.count + 1
        //     };
        // });
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter count={4} />, document.getElementById('app'));







// const app = {
//     title: 'Indecision App',
//     subtitle: 'This is some info',
//     options: ['One', 'Two']
// }
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//     </div>
// );

// const user = {
//     name: 'Burak Gavas',
//     age: 24,
//     location: 'Turkey'
// };

// function getLocation(location) {
//     if (location) return <p>Location: {location}</p>;
// }

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }



// const appRoot = document.getElementById('app');




// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button className="button" onClick={addOne}>+1</button>
//             <button className="button" onClick={minusOne}>-1</button>
//             <button className="button" onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);

// };

// renderCounterApp();