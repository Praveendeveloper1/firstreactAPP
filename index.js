import React from 'react';
import ReactDom from 'react-dom/client';
import Home from './component/Home';


// ReactDom.render(<App/>, document.getElementById('root'));

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<Home/>)