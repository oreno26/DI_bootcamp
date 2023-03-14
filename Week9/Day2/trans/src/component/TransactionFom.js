import React from "react";
import { connect } from "react-redux";
import { insert_trx, update_trx } from "../redux/action";

class TransactionFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountNumber: "",
      FSC: "",
      name: "",
      amount: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { accountNumber, FSC, name, amount } = this.state;
    if (this.props.currentIndex === -1) {
      this.props.handleInsert(this.state);
    } else {
      this.props.handleUpdate(this.state);
    }
    this.setState({
      accountNumber: "",
      FSC: "",
      name: "",
      amount: "",
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.currentIndex !== this.props.currentIndex &&
      this.props.currentIndex !== -1
    ) {
      const trx = this.props.list[this.props.currentIndex];
      this.setState({
        accountNumber: trx.accountNumber || "",
        FSC: trx.FSC || "",
        name: trx.name || "",
        amount: trx.amount || "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.accountNumber}
          placeholder="Account number"
          name="accountNumber"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <input
          value={this.state.FSC}
          placeholder="FSC"
          name="FSC"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <input
          value={this.state.name}
          placeholder="name"
          name="name"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <input
          value={this.state.amount}
          placeholder="Amount"
          name="amount"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <input
          type="submit"
          value={this.props.currentIndex === -1 ? "submitt" : "update"}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.currentIndex,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInsert: (trx) => dispatch(insert_trx(trx)),
    handleUpdate: (trx) => dispatch(update_trx(trx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionFrom);
