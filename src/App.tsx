import { Switch, Route } from 'wouter'
import AgeGate from './components/AgeGate'
import Home from './pages/Home'
import Apply from './pages/Apply'
import Guide from './pages/Guide'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import AntiTrafficking from './pages/AntiTrafficking'
import USC2257 from './pages/USC2257'
import Success from './pages/Success'

export default function App() {
  return (
    <>
      <AgeGate />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/register" component={Apply} />
        <Route path="/guide" component={Guide} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/anti-trafficking" component={AntiTrafficking} />
        <Route path="/18usc2257" component={USC2257} />
        <Route path="/success" component={Success} />
      </Switch>
    </>
  )
}
