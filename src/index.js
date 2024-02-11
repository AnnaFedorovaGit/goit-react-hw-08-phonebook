import ReactDOM from 'react-dom/client';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';


const root = document.getElementById("root")
ReactDOM.createRoot(root).render(
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider >
    </BrowserRouter>
);
