import React,{Component} from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Customer from './components/Customer'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import Categories from './components/Categories'
import Products from './components/Products'
import Product from './components/product'
import Admin from './components/Admin'
import AddProduct from './components/product/AddProduct'
import UpdateProduct from './components/product/Update'

import './App.scss';

class App extends Component {
  componentDidMount() {
    // const element = document.getElementById('startingLoader')
    // window.onload = () => {
    //   if(element) {
    //     element.remove()
    //   }
    // }
  }
  render() {
    const { user } = this.props
    return (
      <BrowserRouter>
      {
         user.login ?
        <Switch>
           <Route exact path="/" component={Home} />
           <Route  path="/login" component={Login} />
           <Route  path="/dashboard" component={Dashboard} />
           <Route  path="/orders" component={Orders} />
           <Route  path="/products" component={Products} />
           <Route  path="/customers" component={Customer} />
           <Route  path="/categories" component={Categories} />
           <Route path="/addproduct" component={AddProduct} />
           <Route path="/product/:id" component={Product} />
           <Route path="/updateproduct/:id" component={UpdateProduct} />
           <Route path="/admin" component={Admin} />
           <Route path="/*" component={Home} />
        </Switch>
        :
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/*" component={Home} />
        </Switch>
      }
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => {
  return({
      user: state.userReducer
  })
}
export default connect(mapStateToProps)(App);
