import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionHistoryItem } from './TransactionHistoryItem';

const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.thead}>
      <tr className={css.theadRow}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={css.tbody}>
      {items.map(item => (
        <TransactionHistoryItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { TransactionHistory };
