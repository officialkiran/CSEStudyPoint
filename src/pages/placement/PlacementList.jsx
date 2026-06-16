import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

function PlacementList() {
  const { category } = useParams();

  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, [category]);

  const fetchResources = async () => {
    try {
      const res = await API.get(
        `/placement/category/${decodeURIComponent(
          category
        )}`
      );

      setResources(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>{category}</h1>

      {resources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {resources.map((item) => (
            <div
              key={item._id}
              style={{
                background: "#FFEBCC",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #ddd",
              }}
            >
              <h3>{item.title}</h3>

              <a
                href={`http://localhost:5000${item.pdf}`}
                target="_blank"
                rel="noreferrer"
              >
                Open PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlacementList;