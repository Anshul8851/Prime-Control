import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {lazy, Suspense} from 'react'
import Loader from "./Components/Loader";
const Dashboard = lazy(()=> import("./Pages/Dashboard"));
const Customers = lazy(()=> import("./Pages/Customers"));
const Products = lazy(()=> import("./Pages/Products"));
const Transaction = lazy(()=> import("./Pages/Transaction"));

function App() {
  return (
    <>
      <Router>
          <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/admin/dashboard" element={<Dashboard/>} />
                <Route path="/admin/product" element={<Products/>} />
                <Route path="/admin/customer" element={<Customers/>} />
                <Route path="/admin/transaction" element={<Transaction/>} />

                

            </Routes>
          </Suspense>
      </Router>
    </>
  )
}

export default App