import axios from "axios";
import "./AddTransaction.css";
import "./../../index.css"
import { useState, useEffect } from "react";
import toast,{Toaster} from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AddTransaction({}) {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState(0);
  const [type, setType] = useState("Credit");
  const [description, setDescription] = useState("Education");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser(currentUser);
    }

    if (!currentUser) {
      window.location.href = "/login";
    }
  }, []);

  const addTransaction = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/transaction`,
      {
        title,
        ammount,
        type,
        description,
        user: user._id,
      }
    );

    toast.success(response.data.message);

    setTitle("");
    setAmmount(0);
    setType("Credit");
    setDescription("Education");

    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  return (<>
  <Navbar/>
    <div className="background-image">
      <h1 className="auth-heading">Transaction for {user.fullName}</h1>

      <form className="auth-form">
        <input
          type="text"
          placeholder="Title"
          className="auth-input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="number"
          placeholder="Ammount"
          className="auth-input"
          value={ammount}
          onChange={(e) => {
            setAmmount(e.target.value);
          }}
        />

        <select
          className="auth-input date-category" 
          type="text"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>

        <select
          className="auth-input date-category"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        >
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
          <option value="transportation">Transportation</option>
          <option value="education">Education</option>
          <option value="gift">Gift</option>
          <option value="gadgets">Gadgets</option>
          <option value="rent">Rent</option>
          <option value="salary">Salary</option>
        </select>

        <button type="button" className="auth-btn" onClick={addTransaction}>
          Transaction
        </button>
      </form>

      <Toaster/>
    </div>
    <Footer/>
    </>);
}

export default AddTransaction;