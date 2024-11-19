import { Authenticated, Unauthenticated } from 'convex/react' 
import { MenuBar } from './components/MenuBar.tsx'
import { Button } from '@mui/material';
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api"; 
import { useStoreUserEffect } from './useStoreUserEffect';
function App() {
  const createRestaurant = useMutation(api.functions.addRestaurant.createRestaurant);
  useStoreUserEffect();
  return (
    <main>
      <MenuBar />
      <Unauthenticated>
        <p>Please sign in to continue</p>
      </Unauthenticated>
      <Authenticated>
        <p>Welcome to MenUI</p> 
        <Button onClick={() => createRestaurant({ name: "Test Restaurant" })}>Create Restaurant</Button>
      </Authenticated>
    </main>
  )
} 

export default App;