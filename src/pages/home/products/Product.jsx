import React from 'react';

const Product = ({product}) => {
    console.log(product);
    return (
        <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-20 object-cover"
            />

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>

                {/* Price */}
                <div className="mt-2 flex items-center justify-between">
                    <span className="text-cyan-600 font-bold text-lg">
                        ${product.price}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.round(product.rating)
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.049 9.39c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.963z"></path>
                            </svg>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {product.description}
                </p>

                {/* Button */}
                <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-500 transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;