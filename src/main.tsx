import React from 'react'
import { Provider } from 'react-redux'
import { Router, BrowserRouter } from "react-router-dom";
import Routes from './routes'
import { store, history } from './configureStore'
import './assets/scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// Create an intersection type of the component props and our Redux props.
const Main: React.FC = () => {
  console.log({store});
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router history={history}>
          <Routes />
        </Router>
      </BrowserRouter>
    </Provider >
  )
}

export default Main;