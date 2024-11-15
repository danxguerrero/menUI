import { SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import { Authenticated, Unauthenticated } from 'convex/react' 
function App() {

  return (
    <main>
      <h1>MenUI</h1>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <SignOutButton />
      </Authenticated>
    </main>
  )
} 

export default App;
