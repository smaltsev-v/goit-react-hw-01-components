import PropTypes from "prop-types";
import styles from'./Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          const getRandom = (min, max) => {
            return Math.ceil(Math.random() * (max - min) + min);
          };
          return (
            <li
              key={id}
              className={styles.item}
              style={{
                backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                  0,
                  255
                )}, ${getRandom(0, 255)})`,
              }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;