import { useEffect, useState } from 'react'
import Login from './components/Login'
import './App.css'
import Welcome from './components/Welcome'
import Logout from './components/Logout'
import Product from './components/Product'
import { getAllCustomers } from './services/services'


function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [prod,setProd]=useState("")

  useEffect(() => {
    getAllCustomers('/products').then((res)=>{
      console.log(res)
      setProd(res)
    })
  }, [])

  
  return (
    <>
      <div>
        {isLogged ? (
          <>
            <Welcome />
            <Logout setIsLogged={setIsLogged} />
            <Product />
            
          </>
        ) : <Login setIsLogged={setIsLogged} />}
      </div>

    </>
  )
}

export default App
