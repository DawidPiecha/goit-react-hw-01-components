import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr className={css.tbodyRow}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export { TransactionHistoryItem };
