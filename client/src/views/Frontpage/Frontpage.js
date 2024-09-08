import Navbar from "../../components/Navbar/Navbar"
import "./Frontpage.css"
import "./../../index.css"
import { Link } from "react-router-dom"
import ImgWallet from "./wallet.png"
import Footer from "../../components/Footer/Footer"

function Frontpage() {
  return (<>
    <div >
        <Navbar/>
        <div className="home-container ">
                    <img src={ImgWallet} className=" wallet-img h-96 "
                        style={{ filter: "drop-shadow(5px 5px 4px #a2d9fb)" }}
                    />
                <div className="home-info">
                    <h1 className='heading'>Welcome to the <span style={{color: "red"}}>Expense</span> <span style={{color: "blue"}}>Tracker !</span></h1>
                    <div className="home-text text-justify m-3 fs-5 ">
                        <p>A Expense tracker is a tool or application designed to help individuals manage and keep track of their financial transactions, expenses, and overall budget. </p>

                        <p>These trackers are typically digital platforms, either in the form of mobile apps or web applications, that provide users with a convenient way to monitor their spending, income, and savings.</p>

                        <p>A Expense tracker serves as a valuable tool for personal finance management, empowering individuals to make informed decisions about their money and work towards achieving their financial goals.</p>     
                    </div>

                    <Link to= '/login' className='start-btn'>Start Here ➡️ </Link> 
                </div>

            </div>
    </div>
    <Footer/>
  </>)
}

export default Frontpage