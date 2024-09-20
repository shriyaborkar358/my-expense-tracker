import axios from "axios";
import "./TransactionCard.css";
import toast, {Toaster} from "react-hot-toast";

function TransactionCard({ _id, title, ammount, category, type, createdAt, loadTransactions }) {

  const deleteTrnsaction = async () =>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/transaction/${_id}`)

    toast.success(response.data.message)

    loadTransactions()
  }

  return (
    <div className="transaction-card">
      <h1 className="transaction-title">{title}</h1>

      <div className="transaction-card-date">
        {new Date(createdAt).toLocaleString()}
      </div>
        
        <div className="transaction-card-ammount" style={{
          color: type === "Credit" ? "green" : "red"
        }}>
        {type === "Credit" ? "+" : "-"}
        <span>{ammount}</span>
        </div>
       
        <span className="transaction-card-category">{category}</span>

        <button type="button" className="delete-transaction-btn" onClick={deleteTrnsaction}>
          Delete
        </button>
       
       <Toaster/>
    </div>
  );
}

export default TransactionCard;
