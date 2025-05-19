import { useParams } from "react-router-dom";


export default function ProductDetails({ data }) {
  const { prodId } = useParams();

  const product =
    data.find((p) => p.id === prodId) ||
    data.flatMap((p) => p.subItems || []).find((si) => si.id === prodId);

  if (!product) {
    return <h2 className="notFound">Product not found</h2>;
  }

  return (
    <div className="wrapper">
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          className="img"
          loading="lazy"
        />
      )}

      <h1 className="title">{product.title}</h1>
      <p className="description">{product.description}</p>

      {product.specs && (
        <>
          <div className="sectionTitle">Product Specifications</div>

          {product.specs.productName && (
            <p className="paragraph">
              <strong>Product Name:</strong> {product.specs.productName}
            </p>
          )}

          {product.specs.panel && (
            <>
              <h3 className="subsectionTitle">Panel</h3>
              <ul className="list">
                {Object.entries(product.specs.panel).map(([key, val]) => (
                  <li key={key}>
                    <strong>{capitalize(key)}:</strong> {val}
                  </li>
                ))}
              </ul>
            </>
          )}

          {product.specs.power && (
            <>
              <h3 className="subsectionTitle">Power</h3>
              <ul className="list">
                {Object.entries(product.specs.power).map(([key, val]) => (
                  <li key={key}>
                    <strong>{capitalize(key)}:</strong> {val}
                  </li>
                ))}
              </ul>
            </>
          )}

          {product.specs.construction && (
            <>
              <h3 className="subsectionTitle">Construction</h3>
              <ul className="list">
                {Object.entries(product.specs.construction).map(([key, val]) => (
                  <li key={key}>
                    <strong>{capitalize(key)}:</strong>{" "}
                    {Array.isArray(val) ? val.join(", ") : val}
                  </li>
                ))}
              </ul>
            </>
          )}

          {product.specs.software && (
            <>
              <h3 className="subsectionTitle">Software</h3>
              <ul className="list">
                {Object.entries(product.specs.software).map(([key, val]) => (
                  <li key={key}>
                    <strong>{capitalize(key)}:</strong> {val}
                  </li>
                ))}
              </ul>
            </>
          )}

          {product.specs.brands && (
            <>
              <h3 className="subsectionTitle">Brands</h3>
              <p className="paragraph">{product.specs.brands.join(", ")}</p>
            </>
          )}
        </>
      )}
    </div>
  );
}

function capitalize(str) {
  return (
    str.charAt(0).toUpperCase() +
    str.slice(1).replace(/([A-Z])/g, " $1")
  );
}
