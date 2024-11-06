import css from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div>
            <p className={css.paragraph}>Find contact by name</p>
            <input
                type="text"
                value={filter}
                onChange={(e) => onFilterChange(e.target.value)}
                placeholder="Search contacts"
                className={css.input}
            />
        </div>
    );
};

export default SearchBox;