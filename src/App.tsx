import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Authenticated, Unauthenticated, useQuery } from 'convex/react' 
import { api } from '../convex/_generated/api'
function App() {

  return (
    <main>
      <h1>MenUI</h1>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </main>
  )
} 

export default App;
