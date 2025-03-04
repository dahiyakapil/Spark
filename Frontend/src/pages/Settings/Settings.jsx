import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, resetAuthState } from '../../features/auth/authSlice';
import './Settings.css';

const EditProfile = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [notification, setNotification] = useState({
    type: '',
    message: ''
  });

  useEffect(() => {
    // Initialize form data from Redux store or localStorage
    const getUserData = () => {
      // First try to get user from Redux store
      if (user) {
        return user;
      }
      
      // If not in Redux, try localStorage
      try {
        const localUser = localStorage.getItem('user');
        if (localUser) {
          return JSON.parse(localUser);
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
      }
      
      return null;
    };
    
    const userData = getUserData();
    
    if (userData) {
      setFormData({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
        password: '',
        confirmPassword: ''
      });
    }
  }, [user]);

  useEffect(() => {
    // Handle redux state changes
    if (isError) {
      setNotification({
        type: 'error',
        message: message || 'Update failed'
      });
    }

    if (isSuccess) {
      setNotification({
        type: 'success',
        message: 'Profile updated successfully'
      });
    }

    // Reset auth state after handling
    if (isSuccess || isError) {
      setTimeout(() => {
        dispatch(resetAuthState());
        setNotification({ type: '', message: '' });
      }, 3000);
    }
  }, [isError, isSuccess, message, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords match if provided
    if (formData.password && formData.password !== formData.confirmPassword) {
      setNotification({
        type: 'error',
        message: 'Passwords do not match'
      });
      return;
    }
    
    // Create update data object
    const updateData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    };
    
    // Only include password if it was provided
    if (formData.password) {
      updateData.password = formData.password;
    }
    
    dispatch(updateUser(updateData));
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>
      
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            placeholder="Leave blank to keep current password"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            placeholder="Leave blank to keep current password"
          />
        </div>
        
        <button 
          type="submit" 
          className="save-button"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;