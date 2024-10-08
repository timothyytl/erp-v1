import React, { useState } from "react"
import { Bell, Home, Package, ShoppingCart, Users } from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("customers")

  // Mock data
  const customers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "Active",
    },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      status: "Active",
    },
  ]

  const inventory = [
    { id: 1, name: "Widget A", stock: 150, price: 9.99 },
    { id: 2, name: "Gadget B", stock: 75, price: 24.99 },
    { id: 3, name: "Tool C", stock: 200, price: 14.99 },
  ]

  const sales = [
    { id: 1, product: "Widget A", quantity: 50, total: 499.5 },
    { id: 2, product: "Gadget B", quantity: 25, total: 624.75 },
    { id: 3, product: "Tool C", quantity: 100, total: 1499.0 },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <div className="flex items-center mb-8">
          <Package className="h-8 w-8 mr-2 text-blue-500" />
          <span className="text-2xl font-bold">CRM-ERP</span>
        </div>
        <nav>
          <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-200 mb-2">
            <Home className="inline-block mr-2 h-4 w-4" /> Dashboard
          </button>
          <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-200 mb-2">
            <Users className="inline-block mr-2 h-4 w-4" /> Customers
          </button>
          <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-200 mb-2">
            <Package className="inline-block mr-2 h-4 w-4" /> Inventory
          </button>
          <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-200 mb-2">
            <ShoppingCart className="inline-block mr-2 h-4 w-4" /> Sales
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Bell className="h-5 w-5" />
            </button>
            <div className="ml-4 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              U
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-sm font-medium text-gray-500 mb-2">
              Total Customers
            </h2>
            <div className="text-2xl font-bold">{customers.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-sm font-medium text-gray-500 mb-2">
              Inventory Items
            </h2>
            <div className="text-2xl font-bold">{inventory.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-sm font-medium text-gray-500 mb-2">
              Total Sales
            </h2>
            <div className="text-2xl font-bold">
              ${sales.reduce((sum, sale) => sum + sale.total, 0).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="flex border-b">
            <button
              className={`py-4 px-6 ${
                activeTab === "customers" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("customers")}
            >
              Customers
            </button>
            <button
              className={`py-4 px-6 ${
                activeTab === "inventory" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("inventory")}
            >
              Inventory
            </button>
            <button
              className={`py-4 px-6 ${
                activeTab === "sales" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("sales")}
            >
              Sales
            </button>
          </div>
          <div className="p-6">
            {activeTab === "customers" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Customer List</h2>
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="w-full p-2 mb-4 border rounded"
                />
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Email</th>
                      <th className="text-left p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b">
                        <td className="p-2">{customer.name}</td>
                        <td className="p-2">{customer.email}</td>
                        <td className="p-2">{customer.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "inventory" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Inventory Overview</h2>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-2">Product</th>
                      <th className="text-left p-2">Stock</th>
                      <th className="text-left p-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventory.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">{item.stock}</td>
                        <td className="p-2">${item.price.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "sales" && (
              <div>
                <h2 className="text-xl font-bold mb-4">Sales Summary</h2>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-2">Product</th>
                      <th className="text-left p-2">Quantity</th>
                      <th className="text-left p-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sales.map((sale) => (
                      <tr key={sale.id} className="border-b">
                        <td className="p-2">{sale.product}</td>
                        <td className="p-2">{sale.quantity}</td>
                        <td className="p-2">${sale.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
