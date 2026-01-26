import React, { useEffect, useState } from "react";
import Product from "../../home/products/Product";
import Pagination from "../../home/products/Pagination";
import { paginate } from "../../../untils/paginate";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Load data from public folder
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/Products.json");
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);

  // Current page products
  const paginatedProducts = paginate(products, currentPage, pageSize);

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">Products Pagination</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalItems={products.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default Products;
