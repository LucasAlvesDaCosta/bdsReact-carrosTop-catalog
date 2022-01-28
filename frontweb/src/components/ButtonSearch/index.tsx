import './styles.css';
const ButtonSearch = () => {
  return (
    <div className="input-group btn-search-container">
      <input type="search"
        className="form-control rounded"
        placeholder="Digite sua busca"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button className="btn-search">
        <h6>Buscar</h6>
      </button>
    </div>
  );
};
export default ButtonSearch;
