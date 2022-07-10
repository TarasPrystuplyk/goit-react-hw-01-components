import PropTypes from 'prop-types';
import { Column, Row } from './TransactionsStyled';

export default function TransactionItem({ type, amount, currency, index }) {
  return (
    <>
      <Row>
        <Column>{type}</Column>
        <Column>{amount}</Column>
        <Column>{currency}</Column>
      </Row>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};