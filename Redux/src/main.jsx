import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { kalviumStore } from './utils/redux/Store.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter><Provider store={kalviumStore}>
  <App />
</Provider></BrowserRouter>,
)
