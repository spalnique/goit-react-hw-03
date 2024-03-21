import css from '../SearchBox/SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchContainer}>
      <p className={css.searchTitle}>Find contacts by name:</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}></input>
    </div>
  );
}
