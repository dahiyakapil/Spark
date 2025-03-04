// import logo from "../../assets/LinktreeUsername/logo.png"
// import "./LinktreeUsername.css"

// const LinktreeUser = () => {
//     return (
//         <>
//             <div className="Linktree-container">
//                 <div className="linktree-left">
//                     <div >
//                         <img src={logo} alt="logo" />
//                     </div>
//                     <div >
//                         <h2 className="linktree-text">SPARK</h2>
//                     </div>
//                 </div>
//                 <div className="linktree-middle">
//                     <div>
//                         <h2 className="title">Tell us about yourself</h2>
//                     </div>
//                     <div className="desc">
//                         <p>For a personalized Spark experience</p>
//                     </div>

//                     <div className="username">
//                         <input type="text" placeholder="Tell us your username" />
//                     </div>

//                     <div>
//                         <div>
//                             <p>Select one category that best describes your Linktree:</p>
//                         </div>
//                         <div>
//                             <button></button>
//                         </div>
//                     </div>


//                 </div>
//                 <div className="linktree-right"></div>
//             </div>
//         </>
//     )
// }

// export default LinktreeUser;





// import React, { useState, useEffect } from 'react';
// import "./LinktreeUsername.css"

// const STORAGE_KEY = 'spark_user_data';

// const categories = [
//   { id: 'business', label: 'Business', icon: '💼' },
//   { id: 'creative', label: 'Creative', icon: '🎨' },
//   { id: 'education', label: 'Education', icon: '📚' },
//   { id: 'entertainment', label: 'Entertainment', icon: '🎭' },
//   { id: 'fashion', label: 'Fashion & Beauty', icon: '👗' },
//   { id: 'food', label: 'Food & Beverage', icon: '🍽️' },
//   { id: 'government', label: 'Government & Politics', icon: '🏛️' },
//   { id: 'health', label: 'Health & Wellness', icon: '❤️' },
//   { id: 'nonprofit', label: 'Non-Profit', icon: '🤝' },
//   { id: 'other', label: 'Other', icon: '✨' },
//   { id: 'tech', label: 'Tech', icon: '💻' },
//   { id: 'travel', label: 'Travel & Tourism', icon: '✈️' },
// ];

// const saveToLocalStorage = (data) => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// };

// const getFromLocalStorage = () => {
//   const data = localStorage.getItem(STORAGE_KEY);
//   return data ? JSON.parse(data) : null;
// };

// const saveToDatabase = async (userData) => {
//   try {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to save to database');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error saving to database:', error);
//     throw error;
//   }
// };

// const LinktreeUsername = () => {
//   const [username, setUsername] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Load saved data from localStorage on component mount
//   useEffect(() => {
//     const savedData = getFromLocalStorage();
//     if (savedData) {
//       setUsername(savedData.username || '');
//       setSelectedCategory(savedData.category || '');
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     const userData = {
//       username,
//       category: selectedCategory,
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       // Save to localStorage
//       saveToLocalStorage(userData);

//       // Save to database
//       await saveToDatabase(userData);

//       // Handle successful submission
//       console.log('Data saved successfully');
//       // You can add navigation or success message here

//     } catch (error) {
//       setError('Failed to save data. Please try again.');
//       console.error('Submission error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="onboarding-container">
//       <div>
//         <img src="/spark-logo.png" alt="Spark" className="logo" />

//       </div>
//       <div className="form-section">
//         <h1>Tell us about yourself</h1>
//         <p>For a personalized Spark experience</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Tell us your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="username-input"
//           />

//           <div className="category-section">
//             <p>Select one category that best describes your Linktree:</p>
//             <div className="category-grid">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   type="button"
//                   className={`category-button ${selectedCategory === category.id ? 'selected' : ''}`}
//                   onClick={() => setSelectedCategory(category.id)}
//                 >
//                   <span className="category-icon">{category.icon}</span>
//                   <span className="category-label">{category.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {error && <div className="error-message">{error}</div>}

//           <button
//             type="submit"
//             className={`continue-button ${isLoading ? 'loading' : ''}`}
//             disabled={!username || !selectedCategory || isLoading}
//           >
//             {isLoading ? 'Saving...' : 'Continue'}
//           </button>
//         </form>
//       </div>
//       <div className="image-section">

//       </div>
//     </div>
//   );
// };

// export default LinktreeUsername;










import React, { useState, useEffect } from 'react';
import "./LinktreeUsername.css"
import logo from "../../assets/LinktreeUsername/logo.png"

const STORAGE_KEY = 'spark_user_data';

const categories = [
  { id: 'business', label: 'Business', icon: '🏢' },
  { id: 'creative', label: 'Creative', icon: '🎨' },
  { id: 'education', label: 'Education', icon: '📚' },
  { id: 'entertainment', label: 'Entertainment', icon: '🎶' },
  { id: 'fashion', label: 'Fashion & Beauty', icon: '👗' },
  { id: 'food', label: 'Food & Beverage', icon: '🍕' },
  { id: 'government', label: 'Government & Politics', icon: '⚖️' },
  { id: 'health', label: 'Health & Wellness', icon: '🍎' },
  { id: 'nonprofit', label: 'Non-Profit', icon: '💗' },
  { id: 'other', label: 'Other', icon: '💗' },
  { id: 'tech', label: 'Tech', icon: '🖥' },
  { id: 'travel', label: 'Travel & Tourism', icon: '✈️' },
];

const saveToLocalStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const getFromLocalStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

const saveToDatabase = async (userData) => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to save to database');
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving to database:', error);
    throw error;
  }
};

const LinktreeUsername = () => {
  const [username, setUsername] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = getFromLocalStorage();
    if (savedData) {
      setUsername(savedData.username || '');
      setSelectedCategory(savedData.category || '');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const userData = {
      username,
      category: selectedCategory,
      timestamp: new Date().toISOString(),
    };

    try {
      // Save to localStorage
      saveToLocalStorage(userData);

      // Save to database
      await saveToDatabase(userData);

      // Handle successful submission
      console.log('Data saved successfully');
      // You can add navigation or success message here

    } catch (error) {
      setError('Failed to save data. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="linktree-main-container">
        <div className='linktree-one'>
          <div>
            <img src={logo} alt="Spark" className="logo" />
          </div>
          <div className='spark-super'>
            <div><h2>SPARK</h2></div>
            <div><sup className='super'>TM</sup></div>
          </div>
        </div>

        <div className="linktree-two">
          <h1>Tell us about yourself</h1>
          <p className='personalized'>For a personalized Spark experience</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Tell us your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="username-input"
            />

            <div className="category-section">
              <p className='describes'>Select one category that best describes your Linktree:</p>
              <div className="category-grid">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`category-button ${selectedCategory === category.id ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-label">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              className={`continue-button ${isLoading ? 'loading' : ''}`}
              disabled={!username || !selectedCategory || isLoading}
            >
              {isLoading ? 'Saving...' : 'Continue'}
            </button>
          </form>
        </div>
        <div className="image-section">

        </div>
      </div>
    </>
  )
}

export default LinktreeUsername;