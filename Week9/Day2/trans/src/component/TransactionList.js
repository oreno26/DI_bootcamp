import TransactionFrom from "./TransactionFom";
// import { connect } from "react-redux";
import { update_index,delete_trx } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";


const TransactionList = (props) => {
const list = useSelector(state => state.list)
// const currentIndex = useSelector(state => state.currentIndex)

const dispatch =  useDispatch();

  return (
    <div>
      <TransactionFrom />
      <div style={{ textAlign: "center" }}>
        <table style={{ border: "5px red double", margin: "0 auto" }}>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ border: "5px red double"}}>{item.accountNumber}</td>
                  <td style={{ border: "5px red double"}}>{item.FSC}</td>
                  <td style={{ border: "5px red double"}}>{item.name}</td>
                  <td style={{ border: "5px red double"}}>{item.amount}</td>
                  <td style={{ border: "5px red double"}}>
                    <button onClick={()=>dispatch(update_index(index))}>edit</button>
                  </td>
                  <td style={{ border: "5px red double"}}>
                    <button onClick={()=>dispatch(delete_trx(index))}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     list: state.list,
//     currentIndex: state.currentIndex,
//   };
// };

// const mapDispatchToProps= (dispatch) =>{
//     return{
//         handleEdit: (index) => dispatch(update_index(index)),
//         handleDelete: (index) => dispatch(delete_trx(index))
//     }
// }
export default TransactionList
// export default connect(mapStateToProps,mapDispatchToProps)(TransactionList);
