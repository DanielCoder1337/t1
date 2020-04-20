import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from '../pages/Products'
import Product from '../pages/Products/getProduct'
import People from '../pages/People/index'
import Home from '../pages/Home'
import Person from '../pages/People/getPerson'
import Blogs from '../pages/Blog'
import Blog from '../pages/Blog/getBlog'

export default function Routes(){
    return (<Switch>
        <Route path="/products" exact component={Products}/>
        <Route path="/products/:id" component={Product}/>
        <Route path="/people" exact component={People}/>
        <Route path="/people/:id" component={Person}/>
        <Route path="/blog" exact component={Blogs}/>
        <Route path="/blog/:id" component={Blog}/>

        <Route component={Home} />
    </Switch>
    )
}