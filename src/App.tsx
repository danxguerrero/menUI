import { Authenticated, Unauthenticated } from 'convex/react' 
import { MenuBar } from './components/MenuBar.tsx'
import { Button, TextField } from '@mui/material';
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api"; 
import { useStoreUserEffect } from './useStoreUserEffect';
import { useState } from 'react';

function App() {
  const createRestaurant = useMutation(api.functions.addRestaurant.createRestaurant);
  const [isCreatingRestauraunt, setIsCreatingRestaurant] = useState(false);
  const [restaurantName, setRestaurantName] = useState("")
  useStoreUserEffect();
  return (
    <main>
      <MenuBar />
      <Unauthenticated>
        <p>Please sign in to continue</p>
      </Unauthenticated>
      <Authenticated>
        <p>Welcome to MenUI</p>
        
        {isCreatingRestauraunt ? (
          <>
            <TextField value={restaurantName} onChange={(e)=> setRestaurantName(e.target.value)}/>
            <Button onClick={() => {
              createRestaurant({ name: restaurantName })
              setIsCreatingRestaurant(false)
            }}>Create</Button>
          </>) : <Button onClick={()=> setIsCreatingRestaurant(!isCreatingRestauraunt)}>Create Restaurant</Button>
        }
      </Authenticated>
    </main>
  )
} 

export default App;