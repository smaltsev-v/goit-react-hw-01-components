import React from 'react'
import PropTypes from 'prop-types';


const Transaction = ({type,amount,currency }) => {
    (<>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
    </>
    );
}

export default Transaction;