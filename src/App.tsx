import { Authenticated, Unauthenticated } from 'convex/react' 
import { MenuBar } from './components/MenuBar.tsx'

function App() {
  return (
    <main>
      <MenuBar />
      <Unauthenticated>
        <p>Please sign in to continue</p>
      </Unauthenticated>
      <Authenticated>
        <p>Welcome to MenUI</p>
      </Authenticated>
    </main>
  )
} 

export default App;