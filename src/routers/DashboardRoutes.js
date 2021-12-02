import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'
// import { useLocation } from 'react-router-dom'

export const DashboardRoutes = () => {

  // Solo usar esto con ConditionRoute
  // const { pathname, search } = useLocation();
  // localStorage.setItem('lastPath', pathname + search);

  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/search" component={ SearchScreen } />
          <Route exact path="/hero/:heroId" component={ HeroScreen } />
          
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
