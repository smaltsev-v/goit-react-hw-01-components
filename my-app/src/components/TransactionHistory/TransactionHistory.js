import React from "react";
import PropTypes from "prop-types";
import Transaction from './Transaction'
import s from './Transaction.module.css'


const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr className={s.item}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <Transaction
                                type={type}
                                amount={amount}
                                currency={currency} />
                        </tr>
                    )
     
                })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
};


export default TransactionHistory;
