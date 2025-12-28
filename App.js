const parent = React.createElement('div', {id: 'parent'},
    [
        React.createElement('div', {id: 'child'},
            [
                React.createElement('h1', {}, 'My React H1 tag'),
                React.createElement('h2', {}, 'My React H2 tag'),
            ]),
        React.createElement('div', {id: 'child'},
            [
                React.createElement('h1', {}, 'My React H1 tag'),
                React.createElement('h2', {}, 'My React H2 tag'),
            ]),
        React.createElement('div', {id: 'child'},
            [
                React.createElement('h1', {}, 'My React H1 tag'),
                React.createElement('h2', {}, 'My React H2 tag'),
            ]),
    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);