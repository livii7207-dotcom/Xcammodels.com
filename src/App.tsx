import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Apply from './pages/Apply'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/apply" component={Apply} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}
