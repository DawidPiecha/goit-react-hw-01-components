import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const colorPalette = ['red', 'navy', 'green', 'black', 'purple'];

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css['stat-list']}>
      {stats.map((stat, index) => (
        <li
          key={stat.id}
          className={css.item}
          style={{ backgroundColor: colorPalette[index % colorPalette.length] }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export { Statistics };
