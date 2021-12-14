import PropTypes from "prop-types";
import s from'./Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          const getRandom = (min, max) => {
            return Math.ceil(Math.random() * (max - min) + min);
          };
          return (
            <li
              key={id}
              className={s.item}
              style={{
                backgroundColor: `rgb(${getRandom(0, 255)}, ${getRandom(
                  0,
                  255
                )}, ${getRandom(0, 255)})`,
              }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
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