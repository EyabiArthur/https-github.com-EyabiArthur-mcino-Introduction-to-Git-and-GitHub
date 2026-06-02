import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/CartSlice';

// ===== PLANT DATA =====
const plantCategories = [
  {
    id: 'tropical',
    name: '🌴 Tropical Plants',
    plants: [
      {
        id: 'tp-01',
        name: 'Monstera Deliciosa',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
      },
      {
        id: 'tp-02',
        name: 'Bird of Paradise',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1596974558762-92a939b0c7c2?w=400&q=80',
      },
      {
        id: 'tp-03',
        name: 'Philodendron Brasil',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1620127807580-990c3eceClub?w=400&q=80',
      },
      {
        id: 'tp-04',
        name: 'Pothos Golden',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1572882488469-6f14e012cae4?w=400&q=80',
      },
      {
        id: 'tp-05',
        name: 'Anthurium Red',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=400&q=80',
      },
      {
        id: 'tp-06',
        name: 'Calathea Orbifolia',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1604520285427-2f6b4b5f9e2f?w=400&q=80',
      },
      {
        id: 'tp-07',
        name: 'Rubber Plant',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1513836279014-a89f7d3b1be8?w=400&q=80',
      },
    ],
  },
  {
    id: 'succulents',
    name: '🌵 Succulents & Cacti',
    plants: [
      {
        id: 'sc-01',
        name: 'Aloe Vera',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
      },
      {
        id: 'sc-02',
        name: 'Echeveria Purple',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80',
      },
      {
        id: 'sc-03',
        name: 'Jade Plant',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&q=80',
      },
      {
        id: 'sc-04',
        name: 'Barrel Cactus',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=400&q=80',
      },
      {
        id: 'sc-05',
        name: 'Haworthia Zebra',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1551436087-d9f5b2c4d5f2?w=400&q=80',
      },
      {
        id: 'sc-06',
        name: 'Prickly Pear',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1491048007861-6bb3a2f71e17?w=400&q=80',
      },
      {
        id: 'sc-07',
        name: 'Sedum Burrito',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80',
      },
    ],
  },
  {
    id: 'air-purifying',
    name: '💨 Air-Purifying Plants',
    plants: [
      {
        id: 'ap-01',
        name: "Peace Lily",
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
      },
      {
        id: 'ap-02',
        name: 'Spider Plant',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1572033839003-1d09f2a2f0a5?w=400&q=80',
      },
      {
        id: 'ap-03',
        name: "Snake Plant",
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1598880940371-c756e015f5cc?w=400&q=80',
      },
      {
        id: 'ap-04',
        name: 'Boston Fern',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400&q=80',
      },
      {
        id: 'ap-05',
        name: "Dracaena Marginata",
        price: 21.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      },
      {
        id: 'ap-06',
        name: 'English Ivy',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
      },
      {
        id: 'ap-07',
        name: 'Bamboo Palm',
        price: 27.99,
        image: 'https://images.unsplash.com/photo-1593691512429-bVBXTEfB54A?w=400&q=80',
      },
    ],
  },
];

// ===== PRODUCT LIST COMPONENT =====
function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Track which plant IDs have been added to cart
  const addedIds = cartItems.map((item) => item.id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-page">
      <h2>Our Plant Collection</h2>

      {plantCategories.map((category) => (
        <div key={category.id} className="category-section">
          <h3>{category.name}</h3>
          <div className="plants-grid">
            {category.plants.map((plant) => {
              const isAdded = addedIds.includes(plant.id);
              return (
                <div key={plant.id} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-card-body">
                    <h4>{plant.name}</h4>
                    <p className="price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded}
                    >
                      {isAdded ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
