import React, {useEffect, useState} from "react"
import "./Home.css"
import toast, {Toaster} from "react-hot-toast"
import axios from "axios"
import TransactionCard from "../../components/TransactionCard/TransactionCard"
import AddImg from "./add-icon.png"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

function Home() {
  const [user, setUser] = useState('')
  const [transactions, setTransactions] = useState([])
  const [netIncome, setNetIncome] = useState(0)
  const [netExpense, setNetExpense] = useState(0)

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(currentUser){
      setUser(currentUser)
    }

    if(!currentUser){
      window.location.href = '/login'
    }
  }, [])

  const loadTransactions = async () =>{
    if(!user._id){
      return
    }
    toast.loading('Loading trnsactions...')

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/transactions?userId=${user._id}`)

    const allTransactions = response.data.data
    toast.dismiss()

    setTransactions(allTransactions)
  }

  useEffect(()=>{
    loadTransactions()
  }, [user])

  useEffect(()=>{
    let income = 0
    let expense = 0

    transactions.forEach((transaction)=>{
      if(transaction.type=== 'Credit'){
        income += transaction.ammount
      }
      else{
        expense += transaction.ammount
      }

    })
    setNetIncome(income)
    setNetExpense(expense)

  }, [transactions])

  return (<>
    <Navbar/>
    <div className="background-image">
      <div className="heading-container">
      <span className='home-greeting'>Hello {user.fullName}</span>
      <span className='home-heading'>Welcome to the Expense Tracker</span>
      </div>

      <div className='net-transactions-values'>

        <div className='net-transactions-value-item'>
          <span className='net-transactions-value-amount'>
            + {netIncome}
          </span>
          <span className='net-transactions-value-title'>
            Net Income
          </span>
        </div>

        <div className='net-transactions-value-item'>
          <span className='net-transactions-value-amount'>
            - {netExpense}
          </span>
          <span className='net-transactions-value-title'>
           Net Expense
          </span>
        </div>

        <div className='net-transactions-value-item'>
          <span className='net-transactions-value-amount'>
            {netIncome - netExpense}
          </span>
          <span className='net-transactions-value-title'>
            Net Balance
          </span>
        </div>

      </div>

      <div className='transactions-container'>
        {
          transactions.map((transaction) => {
            const {_id, title, ammount, category, type, createdAt} = transaction

            return (<TransactionCard
              key={_id}
              _id={_id}
              title={title}
              ammount={ammount}
              category={category}
              type={type}
              createdAt={createdAt}
              loadTransactions={loadTransactions}
            />)
          })
        }
      </div>

      <Link to='/add-transaction'>
        <img src= {AddImg} className="transaction-icon" />
      </Link>

      <Toaster />
    </div>
    <Footer/>
    </>)
}

export default Home