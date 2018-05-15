console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One', 'Two']
}


const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
    
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const getOptions = () => {
    return app.options.map((option) => <li key={option}>{option}</li>);
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log('Your option is', app.options[randomNum]);
};

const appRoot = document.getElementById('app');

const render = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {getOptions()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

};

render();