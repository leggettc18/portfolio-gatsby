import './src/css/index.css';
import "prismjs/themes/prism-tomorrow.css";
import ReactDOM from 'react-dom/client';

export const replaceHydrateFunction = () => {
    return (element: React.ReactNode, container: Element) => {
        const root = ReactDOM.createRoot(container);
        return root.render(element);
    };
}
