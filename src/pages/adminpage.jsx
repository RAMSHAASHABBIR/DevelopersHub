import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: '',
    stock: ''
  });
  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err.message);
    }
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/products/${editId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Product updated');
      } else {
        await axios.post('http://localhost:5000/api/products', form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Product added');
      }
      setForm({ name: '', price: '', image: '', description: '', category: '', stock: '' });
      setEditId(null);
      fetchProducts();
    } catch {
      alert('Action failed');
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Product deleted');
      fetchProducts();
    } catch {
      alert('Failed to delete product');
    }
  };

  const startEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
      stock: product.stock,
    });
    setEditId(product._id);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-dark min-vh-100 text-light">
      <div className="container py-5">
        <h2 className="text-center mb-3 text-info"> Admin Dashboard</h2>
        <p className="text-center mb-4">Hello, <strong>{user?.name || 'Admin'}</strong>!</p>

        {/* Product Form */}
        <form className="bg-secondary p-4 rounded shadow mb-5" onSubmit={handleAddOrUpdate}>
          <h4 className="mb-4">{editId ? 'Edit Product' : 'Add New Product'}</h4>
<label className="form-label text-light">Name</label>
          <input
            type="text"
            className="form-control mb-3 bg-dark text-light border-0"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

<label className="form-label text-light">Price</label>
          <input
            type="number"
            className="form-control mb-3 bg-dark text-light border-0"
            placeholder="Price"
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
<label className="form-label text-light">Image</label>
          <input
            type="text"
            className="form-control mb-3 bg-dark text-light border-0"
            placeholder="Image Path (e.g. images/img.jpg)"
            required
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
<label className="form-label text-light">Category</label>
          <input
            type="text"
            className="form-control mb-3 bg-dark text-light border-0"
            placeholder="Category"
            required
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
<label className="form-label text-light">Description</label>
          <input
            type="text"
            className="form-control mb-3 bg-dark text-light border-0"
            placeholder="Description"
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
<label className="form-label text-light">Stock</label>
          <input
            type="number"
            className="form-control mb-4 bg-dark text-light border-0"
            placeholder="Stock"
            required
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
          />

          <button type="submit" className="btn btn-info w-100">
            {editId ? 'Update Product' : 'Add Product'}
          </button>
        </form>

        {/* Product List */}
        <div className="row">
          {products.length === 0 ? (
            <p className="text-center">No products found.</p>
          ) : (
            products.map((product) => (
              <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card bg-secondary text-light h-100 shadow-sm border-0">
                  <img
                    src={`http://localhost:5000/${product.image}`}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="text-muted mb-1">{product.category}</p>
                    <p className="flex-grow-1">{product.description}</p>
                    <p className="fw-bold text-info">${product.price}</p>
                    <p className="text-muted small">Stock: {product.stock}</p>
                    <div className="mt-2 d-flex justify-content-between">
                      <button className="btn btn-sm btn-warning me-2" onClick={() => startEdit(product)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(product._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
