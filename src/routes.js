import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import Clients from './pages/Clients/Clients'
import AddClient from './pages/Clients/AddClient'
import EditClient from './pages/Clients/EditClient'
import Protocols from './pages/Protocols/Protocols'
import AddProtocol from './pages/Protocols/AddProtocol'
import EditProtocol from './pages/Protocols/EditProtocol'

export default function Routes(){
    return (
        <BrowserRouter>
        <Route path="/login" exact component={Login}/>
        <Route path="/main/:id" component={Main}/>
        <Route path="/clients" exact component={Clients}/>
        <Route path="/clients/edit/:id" component={EditClient}/>
        <Route path="/clients/addclient" component={AddClient}/>
        <Route path="/protocols" exact component={Protocols}/>
        <Route path="/protocols/addprotocol" component={AddProtocol}/>
        <Route path="/protocols/edit/:id" component={EditProtocol}/>
        </BrowserRouter>
    )
}