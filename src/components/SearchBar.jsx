function SearchBar({ search, setSearch }) {
  return (
    <div style={{ maxWidth: "600px", margin: "30px auto" }}>
      <input
        type="text"
        placeholder="🔍 Search Subject, Notes, PYQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "2px solid #BFDDF0",
          background: "#FFEBCC",
          color: "#222222",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default SearchBar;