import './App.css'
import React from 'react';
import { Button } from "@/components/ui/button"


const App: React.FC = () => {

  return (
    <>
      <h1 className='text-red-500'>Hello React!!</h1>
      <div>
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App;

