import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
    return (
        <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
          <tr>
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };