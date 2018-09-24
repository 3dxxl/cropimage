import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Crop from './crop';
import registerServiceWorker from './registerServiceWorker';

//Semantic CSS importieren sonst geht semantic styles nicht
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Crop />, document.getElementById('root'));
registerServiceWorker();
