import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './About'
import Search from './Search'
import User from './User'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'
 
const App = () => {

   const Name = () => {
      return <h1>This is Name page</h1>
   }

   return (
      <>
         <Menu />

      <Switch>
         <Route exact path='/' component={About}/>
         <Route  path='/search' component={Search} />
         <Route  path='/user/:fname' component={User} />
         <Route exact path='/contact' component={Contact} />
         <Route path='/contact/name' component={Name} />
         {/* <Route component={Error} /> */}
         <Redirect to="/" />
      </Switch>

      </>
   )
}

export default App;