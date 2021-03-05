import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Home, CountryDetail } from './containers'
import { Header, Footer } from './components'

const Routes: React.FC = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/country/:slug/detail" component={CountryDetail} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
    <Footer />
  </React.Fragment>
)

export default withRouter(Routes);