import './src/css/index.css';
import "prismjs/themes/prism-tomorrow.css";
import ReactDOM from 'react-dom';

export const shouldUpdateScroll = () => {
    return false;
}

export const replaceHydrateFunction = () => {
    return (element, container) => {
        return ReactDOM.render(element, container);
    };
}
