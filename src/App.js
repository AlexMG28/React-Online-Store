import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import HeaderBlock from './components/headerBlock'

function App() {
    return (
        <div>
            <HeaderBlock/>
        </div>
    )
}

export default App 