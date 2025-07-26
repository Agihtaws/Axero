import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ExpensePage.css';

const ExpensePage = () => {
  const location = useLocation();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [newExpense, setNewExpense] = useState({
    date: '',
    amount: '',
    category: 'travel',
    description: '',
    receipt: null
  });
  
  // Sample expenses data
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: '2025-07-15',
      amount: 125.75,
      category: 'travel',
      description: 'Taxi fare to client meeting',
      status: 'approved',
      approvedBy: 'Jennifer Clark',
      submittedOn: '2025-07-16'
    },
    {
      id: 2,
      date: '2025-07-10',
      amount: 45.50,
      category: 'meals',
      description: 'Lunch with client',
      status: 'approved',
      approvedBy: 'Jennifer Clark',
      submittedOn: '2025-07-11'
    },
    {
      id: 3,
      date: '2025-07-20',
      amount: 299.99,
      category: 'equipment',
      description: 'External monitor for home office',
      status: 'pending',
      submittedOn: '2025-07-21'
    }
  ]);
  
  // Check if we should open the submit modal based on navigation state
  useEffect(() => {
    if (location.state && location.state.openExpenseModal) {
      setIsSubmitModalOpen(true);
    }
  }, [location]);
  
  const handleSubmitExpense = () => {
    setIsSubmitModalOpen(true);
  };
  
  const closeSubmitModal = () => {
    setIsSubmitModalOpen(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({
      ...newExpense,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewExpense({
        ...newExpense,
        receipt: file
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = expenses.length > 0 ? Math.max(...expenses.map(exp => exp.id)) + 1 : 1;
    
    const expenseToAdd = {
      id,
      date: newExpense.date,
      amount: parseFloat(newExpense.amount),
      category: newExpense.category,
      description: newExpense.description,
      status: 'pending',
      submittedOn: new Date().toISOString().split('T')[0]
    };
    
    setExpenses([...expenses, expenseToAdd]);
    setNewExpense({
      date: '',
      amount: '',
      category: 'travel',
      description: '',
      receipt: null
    });
    setIsSubmitModalOpen(false);
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };
  
  // Get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'approved':
        return 'status-badge approved';
      case 'rejected':
        return 'status-badge rejected';
      case 'pending':
        return 'status-badge pending';
      default:
        return 'status-badge';
    }
  };
  
  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'travel':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a4 4 0 0 0-4 4v2H1.866a1 1 0 1 0 0 2h2.668A6.517 6.517 0 0 0 8 9.5a6.517 6.517 0 0 0 3.466-1.5h2.668a1 1 0 0 0 0-2H12V4a4 4 0 0 0-4-4zm0 7.5a4.5 4.5 0 0 1-4.5-4.5V4a4.5 4.5 0 0 1 9 0v3a4.5 4.5 0 0 1-4.5 4.5z"/>
            <path d="M8 10a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6zm-6 6a5.978 5.978 0 0 1 1.797-4.282A5.98 5.98 0 0 1 8 10a5.98 5.98 0 0 1 4.203 1.718A5.978 5.978 0 0 1 14 16H2z"/>
          </svg>
        );
      case 'meals':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 12.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v9zm-4.5-1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z"/>
            <path d="M2.354 2.354a.5.5 0 1 0-.708.708L3 4.414l-1.354 1.354a.5.5 0 1 0 .708.708L3.707 5.12l1.354 1.354a.5.5 0 0 0 .708-.708L4.414 4.414l1.354-1.354a.5.5 0 0 0-.708-.708L3.707 3.707 2.354 2.354z"/>
          </svg>
        );
      case 'equipment':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
          </svg>
        );
      case 'office':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
          </svg>
        );
    }
  };
  
  // Calculate total expenses
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };
  
  // Calculate pending expenses
  const calculatePendingExpenses = () => {
    return expenses
      .filter(expense => expense.status === 'pending')
      .reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div className="expense-page">
      <div className="page-header">
        <h1>Expenses</h1>
        <button className="submit-expense-button" onClick={handleSubmitExpense}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Submit Expense
        </button>
      </div>
      
      <div className="expense-summary">
        <div className="summary-card">
          <div className="summary-icon total">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
            </svg>
          </div>
          <div className="summary-details">
            <h3>Total Expenses</h3>
            <div className="summary-value">{formatCurrency(calculateTotalExpenses())}</div>
            <div className="summary-subtext">Year to date</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon pending">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </div>
          <div className="summary-details">
            <h3>Pending Approval</h3>
            <div className="summary-value">{formatCurrency(calculatePendingExpenses())}</div>
            <div className="summary-subtext">Awaiting review</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon reimbursement">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
            </svg>
          </div>
          <div className="summary-details">
            <h3>Last Reimbursement</h3>
            <div className="summary-value">{formatCurrency(171.25)}</div>
            <div className="summary-subtext">Processed on {formatDate('2025-07-18')}</div>
          </div>
        </div>
      </div>
      
      <div className="expenses-container">
        <h2>Your Expenses</h2>
        
        <div className="expenses-list">
          {expenses.map(expense => (
            <div key={expense.id} className="expense-card">
              <div className="expense-category-icon">
                {getCategoryIcon(expense.category)}
              </div>
              
              <div className="expense-details">
                <div className="expense-header">
                  <div className="expense-title-wrapper">
                    <h3 className="expense-category">{expense.category.charAt(0).toUpperCase() + expense.category.slice(1)}</h3>
                    <span className="expense-date">{formatDate(expense.date)}</span>
                  </div>
                  <span className={getStatusBadgeClass(expense.status)}>
                    {expense.status.charAt(0).toUpperCase() + expense.status.slice(1)}
                  </span>
                </div>
                
                <div className="expense-amount">
                  {formatCurrency(expense.amount)}
                </div>
                
                {expense.description && (
                  <div className="expense-description">
                    <p>{expense.description}</p>
                  </div>
                )}
                
                <div className="expense-meta">
                  <span className="submission-date">Submitted on {formatDate(expense.submittedOn)}</span>
                  {expense.status === 'approved' && (
                    <span className="approver">Approved by {expense.approvedBy}</span>
                  )}
                </div>
                
                <div className="expense-actions">
                  <button className="view-receipt-btn">View Receipt</button>
                  {expense.status === 'pending' && (
                    <button className="cancel-expense-btn">Cancel</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isSubmitModalOpen && (
        <div className="modal-backdrop">
          <div className="submit-expense-modal">
            <div className="modal-header">
              <h2>Submit Expense</h2>
              <button className="close-btn" onClick={closeSubmitModal}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date of Expense</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={newExpense.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <div className="amount-input-wrapper">
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={newExpense.amount}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0.01"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={newExpense.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="travel">Travel</option>
                  <option value="meals">Meals & Entertainment</option>
                  <option value="equipment">Equipment</option>
                  <option value="office">Office Supplies</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newExpense.description}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Provide details about this expense"
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="receipt">Receipt</label>
                <div className="file-upload-container">
                  <input
                    type="file"
                    id="receipt"
                    name="receipt"
                    onChange={handleFileChange}
                    className="file-input"
                    accept="image/*,.pdf"
                    required
                  />
                  <label htmlFor="receipt" className="file-upload-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                    {newExpense.receipt ? newExpense.receipt.name : 'Upload receipt image or PDF'}
                  </label>
                </div>
                <small className="form-help-text">Max file size: 10MB. Supported formats: JPG, PNG, PDF</small>
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeSubmitModal}>Cancel</button>
                <button type="submit" className="submit-btn">Submit Expense</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpensePage;
