// import React, { useState } from 'react';
// import './Links.css';

// // Mock icons component
// const Icon = ({ name }) => {
//   const icons = {
//     pencil: '✏️',
//     copy: '📋',
//     delete: '🗑️',
//     instagram: '📸',
//     facebook: '👤',
//     youtube: '▶️',
//     twitter: 'X',
//     plus: '+'
//   };
//   return <span className="icon">{icons[name]}</span>;
// };

// const Links = () => {
//   // State for profile section
//   const [profileImage, setProfileImage] = useState(null);
//   const [profileTitle, setProfileTitle] = useState('@opopo_08');
//   const [bio, setBio] = useState('');

//   // State for links section
//   const [links, setLinks] = useState([
//     { id: 1, title: 'Latest YouTube Video', url: '#', platform: 'youtube' },
//     { id: 2, title: 'Latest Instagram reel', url: '#', platform: 'instagram' }
//   ]);
//   const [showLinkDropdown, setShowLinkDropdown] = useState(false);
//   const [newLinkTitle, setNewLinkTitle] = useState('');
//   const [newLinkUrl, setNewLinkUrl] = useState('');

//   // State for background section
//   const [backgroundColor, setBackgroundColor] = useState('#3E2723');
//   const [customColor, setCustomColor] = useState('#000000');

//   // State for mobile view
//   const [activeTab, setActiveTab] = useState('link');

//   // Handle profile image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfileImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle adding new link
//   const handleAddLink = () => {
//     if (newLinkTitle && newLinkUrl) {
//       const newLink = {
//         id: Date.now(),
//         title: newLinkTitle,
//         url: newLinkUrl,
//         platform: 'custom'
//       };
//       setLinks([...links, newLink]);
//       setNewLinkTitle('');
//       setNewLinkUrl('');
//       setShowLinkDropdown(false);
//     }
//   };

//   // Handle removing a link
//   const handleRemoveLink = (id) => {
//     setLinks(links.filter(link => link.id !== id));
//   };

//   // Handle background color selection
//   const handleColorSelect = (color) => {
//     setBackgroundColor(color);
//   };

//   return (
//     <div className="app-container">
//       <div className="mobile-preview">
//         <div className="mobile-frame">
//           <div className="mobile-header" style={{ backgroundColor }}>
//             <div className="profile-section">
//               <div className="profile-image">
//                 {profileImage ? (
//                   <img src={profileImage} alt="Profile" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-info">
//                 <h3>{profileTitle}</h3>
//               </div>
//             </div>
//           </div>
//           <div className="mobile-tabs">
//             <button 
//               className={`tab ${activeTab === 'link' ? 'active' : ''}`}
//               onClick={() => setActiveTab('link')}
//             >
//               Link
//             </button>
//             <button 
//               className={`tab ${activeTab === 'shop' ? 'active' : ''}`}
//               onClick={() => setActiveTab('shop')}
//             >
//               Shop
//             </button>
//           </div>
//           <div className="mobile-content">
//             {activeTab === 'link' && (
//               <div className="links-list">
//                 {links.map(link => (
//                   <button key={link.id} className="link-button">
//                     {link.platform === 'youtube' && <Icon name="youtube" />}
//                     {link.platform === 'instagram' && <Icon name="instagram" />}
//                     {link.title}
//                   </button>
//                 ))}
//                 <button className="get-connected-btn">Get Connected</button>
//                 <div className="spark-logo">
//                   SPARK
//                 </div>
//               </div>
//             )}
//             {activeTab === 'shop' && (
//               <div className="shop-section">
//                 <p>No shop items yet</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="editor-panel">
//         <div className="editor-section">
//           <h2>Profile</h2>
//           <div className="profile-editor">
//             <div className="profile-image-selector">
//               <div className="avatar-container">
//                 {profileImage ? (
//                   <img src={profileImage} alt="Profile" className="avatar-preview" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-image-controls">
//                 <input 
//                   type="file" 
//                   id="profile-image-input" 
//                   accept="image/*" 
//                   onChange={handleImageUpload}
//                   style={{ display: 'none' }}
//                 />
//                 <label htmlFor="profile-image-input" className="button primary">
//                   Pick an image
//                 </label>
//                 <button 
//                   className="button secondary" 
//                   onClick={() => setProfileImage(null)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Profile Title</label>
//               <input 
//                 type="text" 
//                 value={profileTitle}
//                 onChange={(e) => setProfileTitle(e.target.value)}
//                 placeholder="@handle_name"
//               />
//             </div>

//             <div className="form-group">
//               <label>Bio</label>
//               <textarea 
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value.slice(0, 60))}
//                 placeholder="Enter your bio"
//                 maxLength={60}
//               />
//               <span className="char-count">{bio.length}/60</span>
//             </div>
//           </div>
//         </div>

//         <div className="editor-section">
//           <div className="links-controls">
//             <div className="add-buttons">
//               <button className="button secondary">
//                 <Icon name="plus" /> Add Link
//               </button>
//               <button className="button secondary">
//                 <Icon name="plus" /> Add Shop
//               </button>
//             </div>
//             <button 
//               className="button primary add-button"
//               onClick={() => setShowLinkDropdown(!showLinkDropdown)}
//             >
//               <Icon name="plus" /> Add
//             </button>

//             {showLinkDropdown && (
//               <div className="link-dropdown">
//                 <h3>Enter URL</h3>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link title"
//                       value={newLinkTitle}
//                       onChange={(e) => setNewLinkTitle(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                     <div className="toggle-switch"></div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link URL"
//                       value={newLinkUrl}
//                       onChange={(e) => setNewLinkUrl(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                     <div className="button-group">
//                       <button className="icon-button">
//                         <Icon name="copy" />
//                       </button>
//                       <button className="icon-button">
//                         <Icon name="delete" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="applications">
//                   <h4>Applications</h4>
//                   <div className="app-buttons">
//                     <button className="app-button">
//                       <Icon name="instagram" />
//                       <span>Instagram</span>
//                     </button>
//                     <button className="app-button">
//                       <Icon name="facebook" />
//                       <span>Facebook</span>
//                     </button>
//                     <button className="app-button">
//                       <Icon name="youtube" />
//                       <span>YouTube</span>
//                     </button>
//                     <button className="app-button">
//                       <Icon name="twitter" />
//                       <span>Twitter</span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="dropdown-actions">
//                   <button 
//                     className="button primary"
//                     onClick={handleAddLink}
//                   >
//                     Add Link
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="editor-section">
//           <h2>Banner</h2>
//           <div className="banner-preview" style={{ backgroundColor }}>
//             <div className="profile-image">
//               {profileImage ? (
//                 <img src={profileImage} alt="Profile" />
//               ) : (
//                 <div className="avatar-placeholder">
//                   <span>👤</span>
//                 </div>
//               )}
//             </div>
//             <h3>{profileTitle}</h3>
//             <p>@{profileTitle.replace('@', '')}</p>
//           </div>

//           <div className="background-controls">
//             <h4>Custom Background Color</h4>
//             <div className="color-options">
//               <button 
//                 className={`color-option brown ${backgroundColor === '#3E2723' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#3E2723')}
//               ></button>
//               <button 
//                 className={`color-option white ${backgroundColor === '#FFFFFF' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#FFFFFF')}
//               ></button>
//               <button 
//                 className={`color-option black ${backgroundColor === '#000000' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#000000')}
//               ></button>
//               <div className="custom-color">
//                 <input 
//                   type="color"
//                   value={customColor}
//                   onChange={(e) => setCustomColor(e.target.value)}
//                 />
//                 <input 
//                   type="text"
//                   value={customColor}
//                   onChange={(e) => setCustomColor(e.target.value)}
//                   className="color-input"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="save-section">
//           <button className="button primary save-button">Save</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Links;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './Links.css';
// import { fetchLinks, createLink, deleteLink } from '../../features/links/linksSlice';
// import { fetchProfile, updateProfile } from '../../features/profile/ProfileSlice';

// // Mock icons component
// const Icon = ({ name }) => {
//   const icons = {
//     pencil: '✏️',
//     copy: '📋',
//     delete: '🗑️',
//     instagram: '📸',
//     facebook: '👤',
//     youtube: '▶️',
//     twitter: 'X',
//     plus: '+'
//   };
//   return <span className="icon">{icons[name]}</span>;
// };

// const Links = () => {
//   const dispatch = useDispatch();

//   // Get data from Redux store
//   const { links, isLoading: linksLoading } = useSelector(state => state.links);
//   const { profile, isLoading: profileLoading } = useSelector(state => state.profile);

//   // Local UI state
//   const [showLinkDropdown, setShowLinkDropdown] = useState(false);
//   const [newLinkTitle, setNewLinkTitle] = useState('');
//   const [newLinkUrl, setNewLinkUrl] = useState('');
//   const [activeTab, setActiveTab] = useState('link');
//   const [customColor, setCustomColor] = useState('#000000');

//   // Local form state for profile (to avoid too many dispatches while typing)
//   const [profileForm, setProfileForm] = useState({
//     title: '',
//     bio: '',
//     image: null,
//     backgroundColor: '#3E2723'
//   });

//   // Fetch data on component mount
//   useEffect(() => {
//     dispatch(fetchLinks());
//     dispatch(fetchProfile());
//   }, [dispatch]);

//   // Update local form when Redux profile data is loaded
//   useEffect(() => {
//     if (profile) {
//       setProfileForm({
//         title: profile.title || '@opopo_08',
//         bio: profile.bio || '',
//         image: profile.image || null,
//         backgroundColor: profile.backgroundColor || '#3E2723'
//       });
//     }
//   }, [profile]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfileForm({
//           ...profileForm,
//           image: e.target.result
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle adding new link
//   const handleAddLink = () => {
//     if (newLinkTitle && newLinkUrl) {
//       const newLink = {
//         title: newLinkTitle,
//         url: newLinkUrl,
//         platform: 'custom'
//       };
//       dispatch(createLink(newLink));
//       setNewLinkTitle('');
//       setNewLinkUrl('');
//       setShowLinkDropdown(false);
//     }
//   };

//   // Handle removing a link
//   const handleRemoveLink = (id) => {
//     dispatch(deleteLink(id));
//   };

//   // Handle background color selection
//   const handleColorSelect = (color) => {
//     setProfileForm({
//       ...profileForm,
//       backgroundColor: color
//     });
//   };

//   // Handle profile form changes
//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfileForm({
//       ...profileForm,
//       [name]: value
//     });
//   };

//   // Save profile changes
//   const handleSaveProfile = () => {
//     dispatch(updateProfile(profileForm));
//   };

//   // Handle copying link URL
//   const handleCopyLink = (url) => {
//     navigator.clipboard.writeText(url);
//   };

//   // Loading state
//   if (profileLoading && !profile) {
//     return <div className="loading">Loading profile...</div>;
//   }

//   return (
//     <div className="app-container">
//       <div className="mobile-preview">
//         <div className="mobile-frame">
//           <div className="mobile-header" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-section">
//               <div className="profile-image">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-info">
//                 <h3>{profileForm.title}</h3>
//               </div>
//             </div>
//           </div>
//           <div className="mobile-tabs">
//             <button 
//               className={`tab ${activeTab === 'link' ? 'active' : ''}`}
//               onClick={() => setActiveTab('link')}
//             >
//               Link
//             </button>
//             <button 
//               className={`tab ${activeTab === 'shop' ? 'active' : ''}`}
//               onClick={() => setActiveTab('shop')}
//             >
//               Shop
//             </button>
//           </div>
//           <div className="mobile-content">
//             {activeTab === 'link' && (
//               <div className="links-list">
//                 {linksLoading ? (
//                   <div className="loading">Loading links...</div>
//                 ) : (
//                   <>
//                     {links.map(link => (
//                       <button key={link.id} className="link-button">
//                         {link.platform === 'youtube' && <Icon name="youtube" />}
//                         {link.platform === 'instagram' && <Icon name="instagram" />}
//                         {link.platform === 'facebook' && <Icon name="facebook" />}
//                         {link.platform === 'twitter' && <Icon name="twitter" />}
//                         {link.title}
//                       </button>
//                     ))}
//                   </>
//                 )}
//                 <button className="get-connected-btn">Get Connected</button>
//                 <div className="spark-logo">
//                   SPARK
//                 </div>
//               </div>
//             )}
//             {activeTab === 'shop' && (
//               <div className="shop-section">
//                 <p>No shop items yet</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="editor-panel">
//         <div className="editor-section">
//           <h2>Profile</h2>
//           <div className="profile-editor">
//             <div className="profile-image-selector">
//               <div className="avatar-container">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" className="avatar-preview" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-image-controls">
//                 <input 
//                   type="file" 
//                   id="profile-image-input" 
//                   accept="image/*" 
//                   onChange={handleImageUpload}
//                   style={{ display: 'none' }}
//                 />
//                 <label htmlFor="profile-image-input" className="button primary">
//                   Pick an image
//                 </label>
//                 <button 
//                   className="button secondary" 
//                   onClick={() => setProfileForm({...profileForm, image: null})}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Profile Title</label>
//               <input 
//                 type="text" 
//                 name="title"
//                 value={profileForm.title}
//                 onChange={handleProfileChange}
//                 placeholder="@handle_name"
//               />
//             </div>

//             <div className="form-group">
//               <label>Bio</label>
//               <textarea 
//                 name="bio"
//                 value={profileForm.bio}
//                 onChange={(e) => {
//                   if (e.target.value.length <= 60) {
//                     handleProfileChange(e);
//                   }
//                 }}
//                 placeholder="Enter your bio"
//                 maxLength={60}
//               />
//               <span className="char-count">{profileForm.bio.length}/60</span>
//             </div>
//           </div>
//         </div>

//         <div className="editor-section">
//           <div className="links-controls">
//             <div className="add-buttons">
//               <button className="button secondary">
//                 <Icon name="plus" /> Add Link
//               </button>
//               <button className="button secondary">
//                 <Icon name="plus" /> Add Shop
//               </button>
//             </div>
//             <button 
//               className="button primary add-button"
//               onClick={() => setShowLinkDropdown(!showLinkDropdown)}
//             >
//               <Icon name="plus" /> Add
//             </button>

//             {showLinkDropdown && (
//               <div className="link-dropdown">
//                 <h3>Enter URL</h3>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link title"
//                       value={newLinkTitle}
//                       onChange={(e) => setNewLinkTitle(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                     <div className="toggle-switch"></div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link URL"
//                       value={newLinkUrl}
//                       onChange={(e) => setNewLinkUrl(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                     <div className="button-group">
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleCopyLink(newLinkUrl)}
//                       >
//                         <Icon name="copy" />
//                       </button>
//                       <button className="icon-button">
//                         <Icon name="delete" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="applications">
//                   <h4>Applications</h4>
//                   <div className="app-buttons">
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Instagram Profile');
//                         setNewLinkUrl('https://instagram.com/');
//                       }}
//                     >
//                       <Icon name="instagram" />
//                       <span>Instagram</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Facebook Profile');
//                         setNewLinkUrl('https://facebook.com/');
//                       }}
//                     >
//                       <Icon name="facebook" />
//                       <span>Facebook</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('YouTube Channel');
//                         setNewLinkUrl('https://youtube.com/');
//                       }}
//                     >
//                       <Icon name="youtube" />
//                       <span>YouTube</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Twitter Profile');
//                         setNewLinkUrl('https://twitter.com/');
//                       }}
//                     >
//                       <Icon name="twitter" />
//                       <span>Twitter</span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="dropdown-actions">
//                   <button 
//                     className="button primary"
//                     onClick={handleAddLink}
//                     disabled={!newLinkTitle || !newLinkUrl || linksLoading}
//                   >
//                     {linksLoading ? 'Adding...' : 'Add Link'}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {links.length > 0 && (
//             <div className="existing-links">
//               <h3>Your Links</h3>
//               <div className="links-list-editor">
//                 {links.map(link => (
//                   <div key={link.id} className="link-item">
//                     <div className="link-info">
//                       <span className="link-title">{link.title}</span>
//                       <span className="link-url">{link.url}</span>
//                     </div>
//                     <div className="link-actions">
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleCopyLink(link.url)}
//                       >
//                         <Icon name="copy" />
//                       </button>
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleRemoveLink(link.id)}
//                         disabled={linksLoading}
//                       >
//                         <Icon name="delete" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="editor-section">
//           <h2>Banner</h2>
//           <div className="banner-preview" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-image">
//               {profileForm.image ? (
//                 <img src={profileForm.image} alt="Profile" />
//               ) : (
//                 <div className="avatar-placeholder">
//                   <span>👤</span>
//                 </div>
//               )}
//             </div>
//             <h3>{profileForm.title}</h3>
//             <p>@{profileForm.title.replace('@', '')}</p>
//           </div>

//           <div className="background-controls">
//             <h4>Custom Background Color</h4>
//             <div className="color-options">
//               <button 
//                 className={`color-option brown ${profileForm.backgroundColor === '#3E2723' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#3E2723')}
//               ></button>
//               <button 
//                 className={`color-option white ${profileForm.backgroundColor === '#FFFFFF' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#FFFFFF')}
//               ></button>
//               <button 
//                 className={`color-option black ${profileForm.backgroundColor === '#000000' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#000000')}
//               ></button>
//               <div className="custom-color">
//                 <input 
//                   type="color"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     handleColorSelect(e.target.value);
//                   }}
//                 />
//                 <input 
//                   type="text"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     if (e.target.value.match(/^#([A-Fa-f0-9]{6})$/)) {
//                       handleColorSelect(e.target.value);
//                     }
//                   }}
//                   className="color-input"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="save-section">
//           <button 
//             className="button primary save-button"
//             onClick={handleSaveProfile}
//             disabled={profileLoading}
//           >
//             {profileLoading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Links;




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './Links.css';
// import { fetchLinks, createLink, deleteLink } from '../../features/links/linksSlice';
// import { fetchProfile, updateProfile } from '../../features/profile/ProfileSlice';

// // Mock icons component
// const Icon = ({ name }) => {
//   const icons = {
//     pencil: '✏️',
//     copy: '📋',
//     delete: '🗑️',
//     instagram: '📸',
//     facebook: '👤',
//     youtube: '▶️',
//     twitter: 'X',
//     plus: '+'
//   };
//   return <span className="icon">{icons[name]}</span>;
// };

// const Links = () => {
//   const dispatch = useDispatch();

//   // Get data from Redux store
//   const { links, isLoading: linksLoading } = useSelector(state => state.links) || { links: [], isLoading: false };
//   const { profile, isLoading: profileLoading } = useSelector(state => state.profile) || { profile: null, isLoading: false };

//   // Local UI state
//   const [showLinkDropdown, setShowLinkDropdown] = useState(false);
//   const [newLinkTitle, setNewLinkTitle] = useState('');
//   const [newLinkUrl, setNewLinkUrl] = useState('');
//   const [activeTab, setActiveTab] = useState('link');
//   const [customColor, setCustomColor] = useState('#000000');

//   // Local form state for profile (to avoid too many dispatches while typing)
//   const [profileForm, setProfileForm] = useState({
//     title: '',
//     bio: '',
//     image: null,
//     backgroundColor: '#3E2723'
//   });

//   // Fetch data on component mount
//   useEffect(() => {
//     dispatch(fetchLinks());
//     dispatch(fetchProfile());
//   }, [dispatch]);

//   // Update local form when Redux profile data is loaded
//   useEffect(() => {
//     if (profile) {
//       setProfileForm({
//         title: profile.title || '@opopo_08',
//         bio: profile.bio || '',
//         image: profile.image || null,
//         backgroundColor: profile.backgroundColor || '#3E2723'
//       });

//       // Also update the customColor state if a custom color is being used
//       if (profile.backgroundColor && 
//           profile.backgroundColor !== '#3E2723' && 
//           profile.backgroundColor !== '#FFFFFF' && 
//           profile.backgroundColor !== '#000000') {
//         setCustomColor(profile.backgroundColor);
//       }
//     }
//   }, [profile]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfileForm({
//           ...profileForm,
//           image: e.target.result
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle adding new link
//   const handleAddLink = () => {
//     if (newLinkTitle && newLinkUrl) {
//       // Determine platform based on URL
//       let platform = 'custom';
//       if (newLinkUrl.includes('instagram.com')) platform = 'instagram';
//       else if (newLinkUrl.includes('facebook.com')) platform = 'facebook';
//       else if (newLinkUrl.includes('youtube.com')) platform = 'youtube';
//       else if (newLinkUrl.includes('twitter.com')) platform = 'twitter';

//       const newLink = {
//         title: newLinkTitle,
//         url: newLinkUrl,
//         platform
//       };
//       dispatch(createLink(newLink));
//       setNewLinkTitle('');
//       setNewLinkUrl('');
//       setShowLinkDropdown(false);
//     }
//   };

//   // Handle removing a link
//   const handleRemoveLink = (id) => {
//     dispatch(deleteLink(id));
//   };

//   // Handle background color selection
//   const handleColorSelect = (color) => {
//     setProfileForm({
//       ...profileForm,
//       backgroundColor: color
//     });
//     // Update customColor state if it's a custom color
//     if (color !== '#3E2723' && color !== '#FFFFFF' && color !== '#000000') {
//       setCustomColor(color);
//     }
//   };

//   // Handle profile form changes
//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfileForm({
//       ...profileForm,
//       [name]: value
//     });
//   };

//   // Save profile changes
//   const handleSaveProfile = () => {
//     dispatch(updateProfile(profileForm));
//   };

//   // Handle copying link URL
//   const handleCopyLink = (url) => {
//     navigator.clipboard.writeText(url)
//       .then(() => {
//         // Optional: Show a temporary success message
//         alert('Link copied to clipboard!');
//       })
//       .catch(err => {
//         console.error('Failed to copy link: ', err);
//       });
//   };

//   // Loading state
//   if (profileLoading && !profile) {
//     return <div className="loading">Loading profile...</div>;
//   }

//   return (
//     <div className="app-container">
//       <div className="mobile-preview">
//         <div className="mobile-frame">
//           <div className="mobile-header" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-section">
//               <div className="profile-image">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-info">
//                 <h3>{profileForm.title}</h3>
//                 {profileForm.bio && <p className="bio-text">{profileForm.bio}</p>}
//               </div>
//             </div>
//           </div>
//           <div className="mobile-tabs">
//             <button 
//               className={`tab ${activeTab === 'link' ? 'active' : ''}`}
//               onClick={() => setActiveTab('link')}
//             >
//               Link
//             </button>
//             <button 
//               className={`tab ${activeTab === 'shop' ? 'active' : ''}`}
//               onClick={() => setActiveTab('shop')}
//             >
//               Shop
//             </button>
//           </div>
//           <div className="mobile-content">
//             {activeTab === 'link' && (
//               <div className="links-list">
//                 {linksLoading ? (
//                   <div className="loading">Loading links...</div>
//                 ) : (
//                   <>
//                     {links && links.length > 0 ? (
//                       links.map(link => (
//                         <button 
//                           key={link.id} 
//                           className="link-button"
//                           onClick={() => window.open(link.url, '_blank')}
//                         >
//                           {link.platform === 'youtube' && <Icon name="youtube" />}
//                           {link.platform === 'instagram' && <Icon name="instagram" />}
//                           {link.platform === 'facebook' && <Icon name="facebook" />}
//                           {link.platform === 'twitter' && <Icon name="twitter" />}
//                           {link.title}
//                         </button>
//                       ))
//                     ) : (
//                       <p className="no-links-message">No links added yet</p>
//                     )}
//                   </>
//                 )}
//                 <button className="get-connected-btn">Get Connected</button>
//                 <div className="spark-logo">
//                   SPARK
//                 </div>
//               </div>
//             )}
//             {activeTab === 'shop' && (
//               <div className="shop-section">
//                 <p>No shop items yet</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="editor-panel">
//         <div className="editor-section">
//           <h2>Profile</h2>
//           <div className="profile-editor">
//             <div className="profile-image-selector">
//               <div className="avatar-container">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" className="avatar-preview" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-image-controls">
//                 <input 
//                   type="file" 
//                   id="profile-image-input" 
//                   accept="image/*" 
//                   onChange={handleImageUpload}
//                   style={{ display: 'none' }}
//                 />
//                 <label htmlFor="profile-image-input" className="button primary">
//                   Pick an image
//                 </label>
//                 <button 
//                   className="button secondary" 
//                   onClick={() => setProfileForm({...profileForm, image: null})}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Profile Title</label>
//               <input 
//                 type="text" 
//                 name="title"
//                 value={profileForm.title}
//                 onChange={handleProfileChange}
//                 placeholder="@handle_name"
//               />
//             </div>

//             <div className="form-group">
//               <label>Bio</label>
//               <textarea 
//                 name="bio"
//                 value={profileForm.bio}
//                 onChange={(e) => {
//                   if (e.target.value.length <= 60) {
//                     handleProfileChange(e);
//                   }
//                 }}
//                 placeholder="Enter your bio"
//                 maxLength={60}
//               />
//               <span className="char-count">{profileForm.bio.length}/60</span>
//             </div>
//           </div>
//         </div>

//         <div className="editor-section">
//           <div className="links-controls">
//             <button 
//               className="button primary add-button"
//               onClick={() => setShowLinkDropdown(!showLinkDropdown)}
//             >
//               <Icon name="plus" /> Add Link
//             </button>

//             {showLinkDropdown && (
//               <div className="link-dropdown">
//                 <h3>Enter URL</h3>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link title"
//                       value={newLinkTitle}
//                       onChange={(e) => setNewLinkTitle(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link URL"
//                       value={newLinkUrl}
//                       onChange={(e) => setNewLinkUrl(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                     <div className="button-group">
//                       {newLinkUrl && (
//                         <button 
//                           className="icon-button"
//                           onClick={() => handleCopyLink(newLinkUrl)}
//                         >
//                           <Icon name="copy" />
//                         </button>
//                       )}
//                       {newLinkUrl && (
//                         <button 
//                           className="icon-button"
//                           onClick={() => setNewLinkUrl('')}
//                         >
//                           <Icon name="delete" />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="applications">
//                   <h4>Applications</h4>
//                   <div className="app-buttons">
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Instagram Profile');
//                         setNewLinkUrl('https://instagram.com/');
//                       }}
//                     >
//                       <Icon name="instagram" />
//                       <span>Instagram</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Facebook Profile');
//                         setNewLinkUrl('https://facebook.com/');
//                       }}
//                     >
//                       <Icon name="facebook" />
//                       <span>Facebook</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('YouTube Channel');
//                         setNewLinkUrl('https://youtube.com/');
//                       }}
//                     >
//                       <Icon name="youtube" />
//                       <span>YouTube</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Twitter Profile');
//                         setNewLinkUrl('https://twitter.com/');
//                       }}
//                     >
//                       <Icon name="twitter" />
//                       <span>Twitter</span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="dropdown-actions">
//                   <button 
//                     className="button primary"
//                     onClick={handleAddLink}
//                     disabled={!newLinkTitle || !newLinkUrl || linksLoading}
//                   >
//                     {linksLoading ? 'Adding...' : 'Add Link'}
//                   </button>
//                   <button 
//                     className="button secondary"
//                     onClick={() => setShowLinkDropdown(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {links && links.length > 0 && (
//             <div className="existing-links">
//               <h3>Your Links</h3>
//               <div className="links-list-editor">
//                 {links.map(link => (
//                   <div key={link.id} className="link-item">
//                     <div className="link-info">
//                       <span className="link-title">
//                         {link.platform === 'youtube' && <Icon name="youtube" />}
//                         {link.platform === 'instagram' && <Icon name="instagram" />}
//                         {link.platform === 'facebook' && <Icon name="facebook" />}
//                         {link.platform === 'twitter' && <Icon name="twitter" />}
//                         {link.title}
//                       </span>
//                       <span className="link-url">{link.url}</span>
//                     </div>
//                     <div className="link-actions">
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleCopyLink(link.url)}
//                       >
//                         <Icon name="copy" />
//                       </button>
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleRemoveLink(link.id)}
//                         disabled={linksLoading}
//                       >
//                         <Icon name="delete" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="editor-section">
//           <h2>Banner</h2>
//           <div className="banner-preview" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-image">
//               {profileForm.image ? (
//                 <img src={profileForm.image} alt="Profile" />
//               ) : (
//                 <div className="avatar-placeholder">
//                   <span>👤</span>
//                 </div>
//               )}
//             </div>
//             <h3>{profileForm.title}</h3>
//             <p>@{profileForm.title.replace('@', '')}</p>
//           </div>

//           <div className="background-controls">
//             <h4>Custom Background Color</h4>
//             <div className="color-options">
//               <button 
//                 className={`color-option brown ${profileForm.backgroundColor === '#3E2723' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#3E2723')}
//               ></button>
//               <button 
//                 className={`color-option white ${profileForm.backgroundColor === '#FFFFFF' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#FFFFFF')}
//               ></button>
//               <button 
//                 className={`color-option black ${profileForm.backgroundColor === '#000000' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#000000')}
//               ></button>
//               <div className="custom-color">
//                 <input 
//                   type="color"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     handleColorSelect(e.target.value);
//                   }}
//                 />
//                 <input 
//                   type="text"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     if (e.target.value.match(/^#([A-Fa-f0-9]{6})$/)) {
//                       handleColorSelect(e.target.value);
//                     }
//                   }}
//                   className="color-input"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="save-section">
//           <button 
//             className="button primary save-button"
//             onClick={handleSaveProfile}
//             disabled={profileLoading}
//           >
//             {profileLoading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Links;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './Links.css';
// import { fetchLinks, createLink, deleteLink } from '../../features/links/linksSlice';
// import { fetchProfile, updateProfile } from '../../features/profile/ProfileSlice';

// // Mock icons component
// const Icon = ({ name }) => {
//   const icons = {
//     pencil: '✏️',
//     copy: '📋',
//     delete: '🗑️',
//     instagram: '📸',
//     facebook: '👤',
//     youtube: '▶️',
//     twitter: 'X',
//     plus: '+'
//   };
//   return <span className="icon">{icons[name]}</span>;
// };

// const Links = () => {
//   const dispatch = useDispatch();

//   // Get data from Redux store
//   const { links = [], isLoading: linksLoading = false } = useSelector(state => state.links) || {};
//   const { profile = null, isLoading: profileLoading = false } = useSelector(state => state.profile) || {};

//   // Local UI state
//   const [showLinkDropdown, setShowLinkDropdown] = useState(false);
//   const [newLinkTitle, setNewLinkTitle] = useState('');
//   const [newLinkUrl, setNewLinkUrl] = useState('');
//   const [activeTab, setActiveTab] = useState('link');
//   const [customColor, setCustomColor] = useState('#000000');

//   // Initialize with default links (to ensure mobile view always has links)
//   const [localLinks, setLocalLinks] = useState([
//     { id: 'default-1', title: 'Instagram Profile', url: 'https://instagram.com/', platform: 'instagram' },
//     { id: 'default-2', title: 'Facebook Profile', url: 'https://facebook.com/', platform: 'facebook' },
//     { id: 'default-3', title: 'YouTube Channel', url: 'https://youtube.com/', platform: 'youtube' },
//   ]);

//   // Local form state for profile (to avoid too many dispatches while typing)
//   const [profileForm, setProfileForm] = useState({
//     title: '',
//     bio: '',
//     image: null,
//     backgroundColor: '#3E2723'
//   });

//   // Fetch data on component mount
//   useEffect(() => {
//     dispatch(fetchLinks());
//     dispatch(fetchProfile());
//   }, [dispatch]);

//   // Update localLinks when Redux links data is loaded
//   useEffect(() => {
//     if (links && Array.isArray(links) && links.length > 0) {
//       setLocalLinks(links);
//     }
//   }, [links]);

//   // Update local form when Redux profile data is loaded
//   useEffect(() => {
//     if (profile) {
//       setProfileForm({
//         title: profile.title || '@opopo_08',
//         bio: profile.bio || '',
//         image: profile.image || null,
//         backgroundColor: profile.backgroundColor || '#3E2723'
//       });

//       // Also update the customColor state if a custom color is being used
//       if (profile.backgroundColor && 
//           profile.backgroundColor !== '#3E2723' && 
//           profile.backgroundColor !== '#FFFFFF' && 
//           profile.backgroundColor !== '#000000') {
//         setCustomColor(profile.backgroundColor);
//       }
//     }
//   }, [profile]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfileForm({
//           ...profileForm,
//           image: e.target.result
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle adding new link
//   const handleAddLink = () => {
//     if (newLinkTitle && newLinkUrl) {
//       // Determine platform based on URL
//       let platform = 'custom';
//       if (newLinkUrl.includes('instagram.com')) platform = 'instagram';
//       else if (newLinkUrl.includes('facebook.com')) platform = 'facebook';
//       else if (newLinkUrl.includes('youtube.com')) platform = 'youtube';
//       else if (newLinkUrl.includes('twitter.com')) platform = 'twitter';

//       const newLink = {
//         id: `local-${Date.now()}`, // Temporary local ID
//         title: newLinkTitle,
//         url: newLinkUrl,
//         platform
//       };

//       // Add to local state immediately
//       setLocalLinks(prev => [...prev, newLink]);

//       // Also dispatch to Redux
//       dispatch(createLink(newLink));

//       // Reset form
//       setNewLinkTitle('');
//       setNewLinkUrl('');
//       setShowLinkDropdown(false);
//     }
//   };

//   // Handle removing a link
//   const handleRemoveLink = (id) => {
//     // Remove from local state immediately
//     setLocalLinks(prev => prev.filter(link => link.id !== id));

//     // Also dispatch to Redux
//     dispatch(deleteLink(id));
//   };

//   // Handle background color selection
//   const handleColorSelect = (color) => {
//     setProfileForm({
//       ...profileForm,
//       backgroundColor: color
//     });
//     // Update customColor state if it's a custom color
//     if (color !== '#3E2723' && color !== '#FFFFFF' && color !== '#000000') {
//       setCustomColor(color);
//     }
//   };

//   // Handle profile form changes
//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfileForm({
//       ...profileForm,
//       [name]: value
//     });
//   };

//   // Save profile changes
//   const handleSaveProfile = () => {
//     dispatch(updateProfile(profileForm));
//   };

//   // Handle copying link URL
//   const handleCopyLink = (url) => {
//     navigator.clipboard.writeText(url)
//       .then(() => {
//         // Optional: Show a temporary success message
//         alert('Link copied to clipboard!');
//       })
//       .catch(err => {
//         console.error('Failed to copy link: ', err);
//       });
//   };

//   // Loading state
//   if (profileLoading && !profile) {
//     return <div className="loading">Loading profile...</div>;
//   }

//   return (
//     <div className="app-container">
//       <div className="mobile-preview">
//         <div className="mobile-frame">
//           <div className="mobile-header" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-section">
//               <div className="profile-image">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-info">
//                 <h3>{profileForm.title}</h3>
//                 {profileForm.bio && <p className="bio-text">{profileForm.bio}</p>}
//               </div>
//             </div>
//           </div>
//           <div className="mobile-tabs">
//             <button 
//               className={`tab ${activeTab === 'link' ? 'active' : ''}`}
//               onClick={() => setActiveTab('link')}
//             >
//               Link
//             </button>
//             <button 
//               className={`tab ${activeTab === 'shop' ? 'active' : ''}`}
//               onClick={() => setActiveTab('shop')}
//             >
//               Shop
//             </button>
//           </div>
//           <div className="mobile-content">
//             {activeTab === 'link' && (
//               <div className="links-list">
//                 {linksLoading ? (
//                   <div className="loading">Loading links...</div>
//                 ) : (
//                   <>
//                     {localLinks && localLinks.length > 0 ? (
//                       localLinks.map(link => (
//                         <button 
//                           key={link.id} 
//                           className="link-button"
//                           onClick={() => window.open(link.url, '_blank')}
//                         >
//                           {link.platform === 'youtube' && <Icon name="youtube" />}
//                           {link.platform === 'instagram' && <Icon name="instagram" />}
//                           {link.platform === 'facebook' && <Icon name="facebook" />}
//                           {link.platform === 'twitter' && <Icon name="twitter" />}
//                           {link.title}
//                         </button>
//                       ))
//                     ) : (
//                       <p className="no-links-message">No links added yet</p>
//                     )}
//                   </>
//                 )}
//                 <button className="get-connected-btn">Get Connected</button>
//                 <div className="spark-logo">
//                   SPARK
//                 </div>
//               </div>
//             )}
//             {activeTab === 'shop' && (
//               <div className="shop-section">
//                 <p>No shop items yet</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="editor-panel">
//         <div className="editor-section">
//           <h2>Profile</h2>
//           <div className="profile-editor">
//             <div className="profile-image-selector">
//               <div className="avatar-container">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" className="avatar-preview" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-image-controls">
//                 <input 
//                   type="file" 
//                   id="profile-image-input" 
//                   accept="image/*" 
//                   onChange={handleImageUpload}
//                   style={{ display: 'none' }}
//                 />
//                 <label htmlFor="profile-image-input" className="button primary">
//                   Pick an image
//                 </label>
//                 <button 
//                   className="button secondary" 
//                   onClick={() => setProfileForm({...profileForm, image: null})}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Profile Title</label>
//               <input 
//                 type="text" 
//                 name="title"
//                 value={profileForm.title}
//                 onChange={handleProfileChange}
//                 placeholder="@handle_name"
//               />
//             </div>

//             <div className="form-group">
//               <label>Bio</label>
//               <textarea 
//                 name="bio"
//                 value={profileForm.bio || ''}
//                 onChange={(e) => {
//                   if (e.target.value.length <= 60) {
//                     handleProfileChange(e);
//                   }
//                 }}
//                 placeholder="Enter your bio"
//                 maxLength={60}
//               />
//               <span className="char-count">{(profileForm.bio || '').length}/60</span>
//             </div>
//           </div>
//         </div>

//         <div className="editor-section">
//           <div className="links-controls">
//             <button 
//               className="button primary add-button"
//               onClick={() => setShowLinkDropdown(!showLinkDropdown)}
//             >
//               <Icon name="plus" /> Add Link
//             </button>

//             {showLinkDropdown && (
//               <div className="link-dropdown">
//                 <h3>Enter URL</h3>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link title"
//                       value={newLinkTitle}
//                       onChange={(e) => setNewLinkTitle(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link URL"
//                       value={newLinkUrl}
//                       onChange={(e) => setNewLinkUrl(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                     <div className="button-group">
//                       {newLinkUrl && (
//                         <button 
//                           className="icon-button"
//                           onClick={() => handleCopyLink(newLinkUrl)}
//                         >
//                           <Icon name="copy" />
//                         </button>
//                       )}
//                       {newLinkUrl && (
//                         <button 
//                           className="icon-button"
//                           onClick={() => setNewLinkUrl('')}
//                         >
//                           <Icon name="delete" />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="applications">
//                   <h4>Applications</h4>
//                   <div className="app-buttons">
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Instagram Profile');
//                         setNewLinkUrl('https://instagram.com/');
//                       }}
//                     >
//                       <Icon name="instagram" />
//                       <span>Instagram</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Facebook Profile');
//                         setNewLinkUrl('https://facebook.com/');
//                       }}
//                     >
//                       <Icon name="facebook" />
//                       <span>Facebook</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('YouTube Channel');
//                         setNewLinkUrl('https://youtube.com/');
//                       }}
//                     >
//                       <Icon name="youtube" />
//                       <span>YouTube</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Twitter Profile');
//                         setNewLinkUrl('https://twitter.com/');
//                       }}
//                     >
//                       <Icon name="twitter" />
//                       <span>Twitter</span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="dropdown-actions">
//                   <button 
//                     className="button primary"
//                     onClick={handleAddLink}
//                     disabled={!newLinkTitle || !newLinkUrl || linksLoading}
//                   >
//                     {linksLoading ? 'Adding...' : 'Add Link'}
//                   </button>
//                   <button 
//                     className="button secondary"
//                     onClick={() => setShowLinkDropdown(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {localLinks && localLinks.length > 0 && (
//             <div className="existing-links">
//               <h3>Your Links</h3>
//               <div className="links-list-editor">
//                 {localLinks.map(link => (
//                   <div key={link.id} className="link-item">
//                     <div className="link-info">
//                       <span className="link-title">
//                         {link.platform === 'youtube' && <Icon name="youtube" />}
//                         {link.platform === 'instagram' && <Icon name="instagram" />}
//                         {link.platform === 'facebook' && <Icon name="facebook" />}
//                         {link.platform === 'twitter' && <Icon name="twitter" />}
//                         {link.title}
//                       </span>
//                       <span className="link-url">{link.url}</span>
//                     </div>
//                     <div className="link-actions">
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleCopyLink(link.url)}
//                       >
//                         <Icon name="copy" />
//                       </button>
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleRemoveLink(link.id)}
//                         disabled={linksLoading}
//                       >
//                         <Icon name="delete" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="editor-section">
//           <h2>Banner</h2>
//           <div className="banner-preview" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-image">
//               {profileForm.image ? (
//                 <img src={profileForm.image} alt="Profile" />
//               ) : (
//                 <div className="avatar-placeholder">
//                   <span>👤</span>
//                 </div>
//               )}
//             </div>
//             <h3>{profileForm.title}</h3>
//             <p>@{(profileForm.title || '').replace('@', '')}</p>
//           </div>

//           <div className="background-controls">
//             <h4>Custom Background Color</h4>
//             <div className="color-options">
//               <button 
//                 className={`color-option brown ${profileForm.backgroundColor === '#3E2723' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#3E2723')}
//               ></button>
//               <button 
//                 className={`color-option white ${profileForm.backgroundColor === '#FFFFFF' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#FFFFFF')}
//               ></button>
//               <button 
//                 className={`color-option black ${profileForm.backgroundColor === '#000000' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#000000')}
//               ></button>
//               <div className="custom-color">
//                 <input 
//                   type="color"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     handleColorSelect(e.target.value);
//                   }}
//                 />
//                 <input 
//                   type="text"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     if (e.target.value.match(/^#([A-Fa-f0-9]{6})$/)) {
//                       handleColorSelect(e.target.value);
//                     }
//                   }}
//                   className="color-input"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="save-section">
//           <button 
//             className="button primary save-button"
//             onClick={handleSaveProfile}
//             disabled={profileLoading}
//           >
//             {profileLoading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Links;







// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './Links.css';
// import { fetchLinks, createLink, deleteLink } from '../../features/links/linksSlice';
// import { fetchProfile, updateProfile } from '../../features/profile/ProfileSlice';

// // Mock icons component
// const Icon = ({ name }) => {
//   const icons = {
//     pencil: '✏️',
//     copy: '📋',
//     delete: '🗑️',
//     instagram: '📸',
//     facebook: '👤',
//     youtube: '▶️',
//     twitter: 'X',
//     plus: '+'
//   };
//   return <span className="icon">{icons[name]}</span>;
// };

// const Links = () => {
//   const dispatch = useDispatch();

//   // Get data from Redux store
//   const { links = [], isLoading: linksLoading = false } = useSelector(state => state.links) || {};
//   const { profile = null, isLoading: profileLoading = false } = useSelector(state => state.profile) || {};

//   // Local UI state
//   const [showLinkDropdown, setShowLinkDropdown] = useState(false);
//   const [newLinkTitle, setNewLinkTitle] = useState('');
//   const [newLinkUrl, setNewLinkUrl] = useState('');
//   const [activeTab, setActiveTab] = useState('link');
//   const [customColor, setCustomColor] = useState('#000000');

//   // Initialize with default links and set from Redux when available
//   const [localLinks, setLocalLinks] = useState([
//     { id: 'default-1', title: 'Instagram Profile', url: 'https://instagram.com/', platform: 'instagram' },
//     { id: 'default-2', title: 'Facebook Profile', url: 'https://facebook.com/', platform: 'facebook' },
//     { id: 'default-3', title: 'YouTube Channel', url: 'https://youtube.com/', platform: 'youtube' },
//   ]);

//   // Local form state for profile (to avoid too many dispatches while typing)
//   const [profileForm, setProfileForm] = useState({
//     title: '',
//     bio: '',
//     image: null,
//     backgroundColor: '#3E2723'
//   });

//   // Fetch data on component mount
//   useEffect(() => {
//     dispatch(fetchLinks());
//     dispatch(fetchProfile());
//   }, [dispatch]);

//   // Update localLinks when Redux links data is loaded
//   useEffect(() => {
//     if (links && Array.isArray(links) && links.length > 0) {
//       setLocalLinks(links);
//     }
//   }, [links]);

//   // Update local form when Redux profile data is loaded
//   useEffect(() => {
//     if (profile) {
//       setProfileForm({
//         title: profile.title || '@opopo_08',
//         bio: profile.bio || '',
//         image: profile.image || null,
//         backgroundColor: profile.backgroundColor || '#3E2723'
//       });

//       // Also update the customColor state if a custom color is being used
//       if (profile.backgroundColor && 
//           profile.backgroundColor !== '#3E2723' && 
//           profile.backgroundColor !== '#FFFFFF' && 
//           profile.backgroundColor !== '#000000') {
//         setCustomColor(profile.backgroundColor);
//       }
//     }
//   }, [profile]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfileForm({
//           ...profileForm,
//           image: e.target.result
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle adding new link - FIXED to ensure immediate UI update
//   const handleAddLink = () => {
//     if (newLinkTitle && newLinkUrl) {
//       // Determine platform based on URL
//       let platform = 'custom';
//       if (newLinkUrl.includes('instagram.com')) platform = 'instagram';
//       else if (newLinkUrl.includes('facebook.com')) platform = 'facebook';
//       else if (newLinkUrl.includes('youtube.com')) platform = 'youtube';
//       else if (newLinkUrl.includes('twitter.com')) platform = 'twitter';

//       const newLink = {
//         id: `local-${Date.now()}`, // Temporary local ID
//         title: newLinkTitle,
//         url: newLinkUrl,
//         platform
//       };

//       // Add to local state immediately - this ensures the link shows in UI right away
//       setLocalLinks(prevLinks => [...prevLinks, newLink]);

//       // Also dispatch to Redux
//       dispatch(createLink(newLink));

//       // Reset form
//       setNewLinkTitle('');
//       setNewLinkUrl('');
//       setShowLinkDropdown(false);
//     }
//   };

//   // Handle removing a link - FIXED to ensure immediate UI update
//   const handleRemoveLink = (id) => {
//     // Remove from local state immediately
//     setLocalLinks(prevLinks => prevLinks.filter(link => link.id !== id));

//     // Also dispatch to Redux
//     dispatch(deleteLink(id));
//   };

//   // Handle background color selection
//   const handleColorSelect = (color) => {
//     setProfileForm({
//       ...profileForm,
//       backgroundColor: color
//     });
//     // Update customColor state if it's a custom color
//     if (color !== '#3E2723' && color !== '#FFFFFF' && color !== '#000000') {
//       setCustomColor(color);
//     }
//   };

//   // Handle profile form changes
//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfileForm({
//       ...profileForm,
//       [name]: value
//     });
//   };

//   // Save profile changes
//   const handleSaveProfile = () => {
//     dispatch(updateProfile(profileForm));
//   };

//   // Handle copying link URL
//   const handleCopyLink = (url) => {
//     navigator.clipboard.writeText(url)
//       .then(() => {
//         // Optional: Show a temporary success message
//         alert('Link copied to clipboard!');
//       })
//       .catch(err => {
//         console.error('Failed to copy link: ', err);
//       });
//   };

//   // Loading state
//   if (profileLoading && !profile) {
//     return <div className="loading">Loading profile...</div>;
//   }

//   return (
//     <div className="app-container">
//       <div className="mobile-preview">
//         <div className="mobile-frame">
//           <div className="mobile-header" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-section">
//               <div className="profile-image">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-info">
//                 <h3>{profileForm.title}</h3>
//                 {profileForm.bio && <p className="bio-text">{profileForm.bio}</p>}
//               </div>
//             </div>
//           </div>
//           <div className="mobile-tabs">
//             <button 
//               className={`tab ${activeTab === 'link' ? 'active' : ''}`}
//               onClick={() => setActiveTab('link')}
//             >
//               Link
//             </button>
//             <button 
//               className={`tab ${activeTab === 'shop' ? 'active' : ''}`}
//               onClick={() => setActiveTab('shop')}
//             >
//               Shop
//             </button>
//           </div>
//           <div className="mobile-content">
//             {activeTab === 'link' && (
//               <div className="links-list">
//                 {linksLoading ? (
//                   <div className="loading">Loading links...</div>
//                 ) : (
//                   <>
//                     {localLinks && localLinks.length > 0 ? (
//                       localLinks.map(link => (
//                         <button 
//                           key={link.id} 
//                           className="link-button"
//                           onClick={() => window.open(link.url, '_blank')}
//                         >
//                           {link.platform === 'youtube' && <Icon name="youtube" />}
//                           {link.platform === 'instagram' && <Icon name="instagram" />}
//                           {link.platform === 'facebook' && <Icon name="facebook" />}
//                           {link.platform === 'twitter' && <Icon name="twitter" />}
//                           {link.title || 'Untitled Link'} {/* Added fallback title */}
//                         </button>
//                       ))
//                     ) : (
//                       <p className="no-links-message">No links added yet</p>
//                     )}
//                   </>
//                 )}
//                 <button className="get-connected-btn">Get Connected</button>
//                 <div className="spark-logo">
//                   SPARK
//                 </div>
//               </div>
//             )}
//             {activeTab === 'shop' && (
//               <div className="shop-section">
//                 <p>No shop items yet</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="editor-panel">
//         <div className="editor-section">
//           <h2>Profile</h2>
//           <div className="profile-editor">
//             <div className="profile-image-selector">
//               <div className="avatar-container">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" className="avatar-preview" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-image-controls">
//                 <input 
//                   type="file" 
//                   id="profile-image-input" 
//                   accept="image/*" 
//                   onChange={handleImageUpload}
//                   style={{ display: 'none' }}
//                 />
//                 <label htmlFor="profile-image-input" className="button primary">
//                   Pick an image
//                 </label>
//                 <button 
//                   className="button secondary" 
//                   onClick={() => setProfileForm({...profileForm, image: null})}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Profile Title</label>
//               <input 
//                 type="text" 
//                 name="title"
//                 value={profileForm.title}
//                 onChange={handleProfileChange}
//                 placeholder="@handle_name"
//               />
//             </div>

//             <div className="form-group">
//               <label>Bio</label>
//               <textarea 
//                 name="bio"
//                 value={profileForm.bio || ''}
//                 onChange={(e) => {
//                   if (e.target.value.length <= 60) {
//                     handleProfileChange(e);
//                   }
//                 }}
//                 placeholder="Enter your bio"
//                 maxLength={60}
//               />
//               <span className="char-count">{(profileForm.bio || '').length}/60</span>
//             </div>
//           </div>
//         </div>

//         <div className="editor-section">
//           <div className="links-controls">
//             <button 
//               className="button primary add-button"
//               onClick={() => setShowLinkDropdown(!showLinkDropdown)}
//             >
//               <Icon name="plus" /> Add Link
//             </button>

//             {showLinkDropdown && (
//               <div className="link-dropdown">
//                 <h3>Enter URL</h3>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link title"
//                       value={newLinkTitle}
//                       onChange={(e) => setNewLinkTitle(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link URL"
//                       value={newLinkUrl}
//                       onChange={(e) => setNewLinkUrl(e.target.value)}
//                     />
//                     <Icon name="pencil" />
//                     <div className="button-group">
//                       {newLinkUrl && (
//                         <button 
//                           className="icon-button"
//                           onClick={() => handleCopyLink(newLinkUrl)}
//                         >
//                           <Icon name="copy" />
//                         </button>
//                       )}
//                       {newLinkUrl && (
//                         <button 
//                           className="icon-button"
//                           onClick={() => setNewLinkUrl('')}
//                         >
//                           <Icon name="delete" />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="applications">
//                   <h4>Applications</h4>
//                   <div className="app-buttons">
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Instagram Profile');
//                         setNewLinkUrl('https://instagram.com/');
//                       }}
//                     >
//                       <Icon name="instagram" />
//                       <span>Instagram</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Facebook Profile');
//                         setNewLinkUrl('https://facebook.com/');
//                       }}
//                     >
//                       <Icon name="facebook" />
//                       <span>Facebook</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('YouTube Channel');
//                         setNewLinkUrl('https://youtube.com/');
//                       }}
//                     >
//                       <Icon name="youtube" />
//                       <span>YouTube</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Twitter Profile');
//                         setNewLinkUrl('https://twitter.com/');
//                       }}
//                     >
//                       <Icon name="twitter" />
//                       <span>Twitter</span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="dropdown-actions">
//                   <button 
//                     className="button primary"
//                     onClick={handleAddLink}
//                     disabled={!newLinkTitle || !newLinkUrl || linksLoading}
//                   >
//                     {linksLoading ? 'Adding...' : 'Add Link'}
//                   </button>
//                   <button 
//                     className="button secondary"
//                     onClick={() => setShowLinkDropdown(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {localLinks && localLinks.length > 0 && (
//             <div className="existing-links">
//               <h3>Your Links</h3>
//               <div className="links-list-editor">
//                 {localLinks.map(link => (
//                   <div key={link.id} className="link-item">
//                     <div className="link-info">
//                       <span className="link-title">
//                         {link.platform === 'youtube' && <Icon name="youtube" />}
//                         {link.platform === 'instagram' && <Icon name="instagram" />}
//                         {link.platform === 'facebook' && <Icon name="facebook" />}
//                         {link.platform === 'twitter' && <Icon name="twitter" />}
//                         {link.title || 'Untitled Link'} {/* Added fallback title */}
//                       </span>
//                       <span className="link-url">{link.url || '#'}</span> {/* Added fallback URL */}
//                     </div>
//                     <div className="link-actions">
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleCopyLink(link.url)}
//                       >
//                         <Icon name="copy" />
//                       </button>
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleRemoveLink(link.id)}
//                         disabled={linksLoading}
//                       >
//                         <Icon name="delete" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="editor-section">
//           <h2>Banner</h2>
//           <div className="banner-preview" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-image">
//               {profileForm.image ? (
//                 <img src={profileForm.image} alt="Profile" />
//               ) : (
//                 <div className="avatar-placeholder">
//                   <span>👤</span>
//                 </div>
//               )}
//             </div>
//             <h3>{profileForm.title}</h3>
//             <p>@{(profileForm.title || '').replace('@', '')}</p>
//           </div>

//           <div className="background-controls">
//             <h4>Custom Background Color</h4>
//             <div className="color-options">
//               <button 
//                 className={`color-option brown ${profileForm.backgroundColor === '#3E2723' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#3E2723')}
//               ></button>
//               <button 
//                 className={`color-option white ${profileForm.backgroundColor === '#FFFFFF' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#FFFFFF')}
//               ></button>
//               <button 
//                 className={`color-option black ${profileForm.backgroundColor === '#000000' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#000000')}
//               ></button>
//               <div className="custom-color">
//                 <input 
//                   type="color"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     handleColorSelect(e.target.value);
//                   }}
//                 />
//                 <input 
//                   type="text"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     if (e.target.value.match(/^#([A-Fa-f0-9]{6})$/)) {
//                       handleColorSelect(e.target.value);
//                     }
//                   }}
//                   className="color-input"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="save-section">
//           <button 
//             className="button primary save-button"
//             onClick={handleSaveProfile}
//             disabled={profileLoading}
//           >
//             {profileLoading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Links;





// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './Links.css';
// import { fetchLinks, createLink, deleteLink } from '../../features/links/linksSlice';
// import { fetchProfile, updateProfile } from '../../features/profile/ProfileSlice';

// // Mock icons component
// const Icon = ({ name }) => {
//   const icons = {
//     pencil: '✏️',
//     copy: '📋',
//     delete: '🗑️',
//     instagram: '📸',
//     facebook: '👤',
//     youtube: '▶️',
//     twitter: 'X',
//     plus: '+'
//   };
//   return <span className="icon">{icons[name]}</span>;
// };

// const Links = () => {
//   const dispatch = useDispatch();

//   // Get data from Redux store
//   const { links = [], isLoading: linksLoading = false } = useSelector(state => state.links) || {};
//   const { profile = null, isLoading: profileLoading = false } = useSelector(state => state.profile) || {};

//   // Local UI state
//   const [showLinkDropdown, setShowLinkDropdown] = useState(false);
//   const [newLinkTitle, setNewLinkTitle] = useState('');
//   const [newLinkUrl, setNewLinkUrl] = useState('');
//   const [activeTab, setActiveTab] = useState('link');
//   const [customColor, setCustomColor] = useState('#000000');

//   // Use default links initially so there's always something to show
//   // Then they'll be replaced when real data loads
//   const [localLinks, setLocalLinks] = useState([
//     { id: 'default-1', title: 'Instagram Profile', url: 'https://instagram.com/', platform: 'instagram' },
//     { id: 'default-2', title: 'Facebook Profile', url: 'https://facebook.com/', platform: 'facebook' },
//     { id: 'default-3', title: 'YouTube Channel', url: 'https://youtube.com/', platform: 'youtube' },
//   ]);

//   // Flag to track if we've loaded data at least once
//   const [initialDataLoaded, setInitialDataLoaded] = useState(false);

//   // Local form state for profile
//   const [profileForm, setProfileForm] = useState({
//     title: '',
//     bio: '',
//     image: null,
//     backgroundColor: '#3E2723'
//   });

//   // Fetch data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch links and profile data in parallel
//         await Promise.all([
//           dispatch(fetchLinks()),
//           dispatch(fetchProfile())
//         ]);
//         setInitialDataLoaded(true);
//       } catch (error) {
//         console.error("Error loading initial data:", error);
//         // Even on error, mark as loaded so UI is responsive
//         setInitialDataLoaded(true);
//       }
//     };

//     fetchData();
//   }, [dispatch]);

//   // Update localLinks when Redux links data is loaded
//   useEffect(() => {
//     if (links && Array.isArray(links) && links.length > 0) {
//       setLocalLinks(links);
//     } else if (initialDataLoaded && (!links || links.length === 0)) {
//       // If we've loaded data but there are no links, show empty state
//       setLocalLinks([]);
//     }
//   }, [links, initialDataLoaded]);

//   // Update local form when Redux profile data is loaded
//   useEffect(() => {
//     if (profile) {
//       setProfileForm({
//         title: profile.title || '@opopo_08',
//         bio: profile.bio || '',
//         image: profile.image || null,
//         backgroundColor: profile.backgroundColor || '#3E2723'
//       });

//       // Also update the customColor state if a custom color is being used
//       if (profile.backgroundColor && 
//           profile.backgroundColor !== '#3E2723' && 
//           profile.backgroundColor !== '#FFFFFF' && 
//           profile.backgroundColor !== '#000000') {
//         setCustomColor(profile.backgroundColor);
//       }
//     }
//   }, [profile]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfileForm({
//           ...profileForm,
//           image: e.target.result
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle adding new link - FIXED to ensure immediate UI update and proper title/URL
//   const handleAddLink = () => {
//     if (newLinkTitle && newLinkUrl) {
//       // Ensure URL has proper format with http/https
//       let formattedUrl = newLinkUrl;
//       if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
//         formattedUrl = 'https://' + formattedUrl;
//       }

//       // Determine platform based on URL
//       let platform = 'custom';
//       if (formattedUrl.includes('instagram.com')) platform = 'instagram';
//       else if (formattedUrl.includes('facebook.com')) platform = 'facebook';
//       else if (formattedUrl.includes('youtube.com')) platform = 'youtube';
//       else if (formattedUrl.includes('twitter.com')) platform = 'twitter';

//       const newLink = {
//         id: `local-${Date.now()}`, // Temporary local ID
//         title: newLinkTitle,
//         url: formattedUrl,
//         platform
//       };

//       // Add to local state immediately - this ensures the link shows in UI right away
//       setLocalLinks(prevLinks => [...prevLinks, newLink]);

//       // Also dispatch to Redux
//       dispatch(createLink(newLink));

//       // Reset form
//       setNewLinkTitle('');
//       setNewLinkUrl('');
//       setShowLinkDropdown(false);
//     }
//   };

//   // Handle removing a link - FIXED to ensure immediate UI update
//   const handleRemoveLink = (id) => {
//     // Remove from local state immediately
//     setLocalLinks(prevLinks => prevLinks.filter(link => link.id !== id));

//     // Also dispatch to Redux
//     dispatch(deleteLink(id));
//   };

//   // Handle background color selection
//   const handleColorSelect = (color) => {
//     setProfileForm({
//       ...profileForm,
//       backgroundColor: color
//     });
//     // Update customColor state if it's a custom color
//     if (color !== '#3E2723' && color !== '#FFFFFF' && color !== '#000000') {
//       setCustomColor(color);
//     }
//   };

//   // Handle profile form changes
//   const handleProfileChange = (e) => {
//     const { name, value } = e.target;
//     setProfileForm({
//       ...profileForm,
//       [name]: value
//     });
//   };

//   // Save profile changes
//   const handleSaveProfile = () => {
//     dispatch(updateProfile(profileForm));
//   };

//   // Handle copying link URL
//   const handleCopyLink = (url) => {
//     navigator.clipboard.writeText(url)
//       .then(() => {
//         // Optional: Show a temporary success message
//         alert('Link copied to clipboard!');
//       })
//       .catch(err => {
//         console.error('Failed to copy link: ', err);
//       });
//   };

//   return (
//     <div className="app-container">
//       <div className="mobile-preview">
//         <div className="mobile-frame">
//           <div className="mobile-header" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-section">
//               <div className="profile-image">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-info">
//                 <h3>{profileForm.title}</h3>
//                 {profileForm.bio && <p className="bio-text">{profileForm.bio}</p>}
//               </div>
//             </div>
//           </div>
//           <div className="mobile-tabs">
//             <button 
//               className={`tab ${activeTab === 'link' ? 'active' : ''}`}
//               onClick={() => setActiveTab('link')}
//             >
//               Link
//             </button>
//             <button 
//               className={`tab ${activeTab === 'shop' ? 'active' : ''}`}
//               onClick={() => setActiveTab('shop')}
//             >
//               Shop
//             </button>
//           </div>
//           <div className="mobile-content">
//             {activeTab === 'link' && (
//               <div className="links-list">
//                 {linksLoading && !initialDataLoaded ? (
//                   <div className="loading">Loading links...</div>
//                 ) : (
//                   <>
//                     {localLinks && localLinks.length > 0 ? (
//                       localLinks.map(link => (
//                         <button 
//                           key={link.id} 
//                           className="link-button"
//                           onClick={() => window.open(link.url, '_blank')}
//                         >
//                           {link.platform === 'youtube' && <Icon name="youtube" />}
//                           {link.platform === 'instagram' && <Icon name="instagram" />}
//                           {link.platform === 'facebook' && <Icon name="facebook" />}
//                           {link.platform === 'twitter' && <Icon name="twitter" />}
//                           {link.title}
//                         </button>
//                       ))
//                     ) : (
//                       <p className="no-links-message">No links added yet</p>
//                     )}
//                   </>
//                 )}
//                 <button className="get-connected-btn">Get Connected</button>
//                 <div className="spark-logo">
//                   SPARK
//                 </div>
//               </div>
//             )}
//             {activeTab === 'shop' && (
//               <div className="shop-section">
//                 <p>No shop items yet</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="editor-panel">
//         <div className="editor-section">
//           <h2>Profile</h2>
//           <div className="profile-editor">
//             <div className="profile-image-selector">
//               <div className="avatar-container">
//                 {profileForm.image ? (
//                   <img src={profileForm.image} alt="Profile" className="avatar-preview" />
//                 ) : (
//                   <div className="avatar-placeholder">
//                     <span>👤</span>
//                   </div>
//                 )}
//               </div>
//               <div className="profile-image-controls">
//                 <input 
//                   type="file" 
//                   id="profile-image-input" 
//                   accept="image/*" 
//                   onChange={handleImageUpload}
//                   style={{ display: 'none' }}
//                 />
//                 <label htmlFor="profile-image-input" className="button primary">
//                   Pick an image
//                 </label>
//                 <button 
//                   className="button secondary" 
//                   onClick={() => setProfileForm({...profileForm, image: null})}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Profile Title</label>
//               <input 
//                 type="text" 
//                 name="title"
//                 value={profileForm.title}
//                 onChange={handleProfileChange}
//                 placeholder="@handle_name"
//               />
//             </div>

//             <div className="form-group">
//               <label>Bio</label>
//               <textarea 
//                 name="bio"
//                 value={profileForm.bio || ''}
//                 onChange={(e) => {
//                   if (e.target.value.length <= 60) {
//                     handleProfileChange(e);
//                   }
//                 }}
//                 placeholder="Enter your bio"
//                 maxLength={60}
//               />
//               <span className="char-count">{(profileForm.bio || '').length}/60</span>
//             </div>
//           </div>
//         </div>

//         <div className="editor-section">
//           <div className="links-controls">
//             <button 
//               className="button primary add-button"
//               onClick={() => setShowLinkDropdown(!showLinkDropdown)}
//             >
//               <Icon name="plus" /> Add Link
//             </button>

//             {showLinkDropdown && (
//               <div className="link-dropdown">
//                 <h3>Enter URL</h3>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link title"
//                       value={newLinkTitle}
//                       onChange={(e) => setNewLinkTitle(e.target.value)}
//                       required
//                     />
//                     <Icon name="pencil" />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <div className="input-with-icon">
//                     <input 
//                       type="text"
//                       placeholder="Link URL"
//                       value={newLinkUrl}
//                       onChange={(e) => setNewLinkUrl(e.target.value)}
//                       required
//                     />
//                     <Icon name="pencil" />
//                     <div className="button-group">
//                       {newLinkUrl && (
//                         <button 
//                           className="icon-button"
//                           onClick={() => handleCopyLink(newLinkUrl)}
//                         >
//                           <Icon name="copy" />
//                         </button>
//                       )}
//                       {newLinkUrl && (
//                         <button 
//                           className="icon-button"
//                           onClick={() => setNewLinkUrl('')}
//                         >
//                           <Icon name="delete" />
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="applications">
//                   <h4>Applications</h4>
//                   <div className="app-buttons">
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Instagram Profile');
//                         setNewLinkUrl('https://instagram.com/');
//                       }}
//                     >
//                       <Icon name="instagram" />
//                       <span>Instagram</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Facebook Profile');
//                         setNewLinkUrl('https://facebook.com/');
//                       }}
//                     >
//                       <Icon name="facebook" />
//                       <span>Facebook</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('YouTube Channel');
//                         setNewLinkUrl('https://youtube.com/');
//                       }}
//                     >
//                       <Icon name="youtube" />
//                       <span>YouTube</span>
//                     </button>
//                     <button 
//                       className="app-button"
//                       onClick={() => {
//                         setNewLinkTitle('Twitter Profile');
//                         setNewLinkUrl('https://twitter.com/');
//                       }}
//                     >
//                       <Icon name="twitter" />
//                       <span>Twitter</span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="dropdown-actions">
//                   <button 
//                     className="button primary"
//                     onClick={handleAddLink}
//                     disabled={!newLinkTitle || !newLinkUrl || linksLoading}
//                   >
//                     {linksLoading ? 'Adding...' : 'Add Link'}
//                   </button>
//                   <button 
//                     className="button secondary"
//                     onClick={() => setShowLinkDropdown(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {localLinks && localLinks.length > 0 && (
//             <div className="existing-links">
//               <h3>Your Links</h3>
//               <div className="links-list-editor">
//                 {localLinks.map(link => (
//                   <div key={link.id} className="link-item">
//                     <div className="link-info">
//                       <span className="link-title">
//                         {link.platform === 'youtube' && <Icon name="youtube" />}
//                         {link.platform === 'instagram' && <Icon name="instagram" />}
//                         {link.platform === 'facebook' && <Icon name="facebook" />}
//                         {link.platform === 'twitter' && <Icon name="twitter" />}
//                         {link.title}
//                       </span>
//                       <span className="link-url">{link.url}</span>
//                     </div>
//                     <div className="link-actions">
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleCopyLink(link.url)}
//                       >
//                         <Icon name="copy" />
//                       </button>
//                       <button 
//                         className="icon-button"
//                         onClick={() => handleRemoveLink(link.id)}
//                         disabled={linksLoading}
//                       >
//                         <Icon name="delete" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="editor-section">
//           <h2>Banner</h2>
//           <div className="banner-preview" style={{ backgroundColor: profileForm.backgroundColor }}>
//             <div className="profile-image">
//               {profileForm.image ? (
//                 <img src={profileForm.image} alt="Profile" />
//               ) : (
//                 <div className="avatar-placeholder">
//                   <span>👤</span>
//                 </div>
//               )}
//             </div>
//             <h3>{profileForm.title}</h3>
//             <p>@{(profileForm.title || '').replace('@', '')}</p>
//           </div>

//           <div className="background-controls">
//             <h4>Custom Background Color</h4>
//             <div className="color-options">
//               <button 
//                 className={`color-option brown ${profileForm.backgroundColor === '#3E2723' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#3E2723')}
//               ></button>
//               <button 
//                 className={`color-option white ${profileForm.backgroundColor === '#FFFFFF' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#FFFFFF')}
//               ></button>
//               <button 
//                 className={`color-option black ${profileForm.backgroundColor === '#000000' ? 'selected' : ''}`}
//                 onClick={() => handleColorSelect('#000000')}
//               ></button>
//               <div className="custom-color">
//                 <input 
//                   type="color"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     handleColorSelect(e.target.value);
//                   }}
//                 />
//                 <input 
//                   type="text"
//                   value={customColor}
//                   onChange={(e) => {
//                     setCustomColor(e.target.value);
//                     if (e.target.value.match(/^#([A-Fa-f0-9]{6})$/)) {
//                       handleColorSelect(e.target.value);
//                     }
//                   }}
//                   className="color-input"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="save-section">
//           <button 
//             className="button primary save-button"
//             onClick={handleSaveProfile}
//             disabled={profileLoading}
//           >
//             {profileLoading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Links;





import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Links.css';
import { fetchLinks, createLink, deleteLink } from '../../features/links/linksSlice';
import { fetchProfile, updateProfile } from '../../features/profile/ProfileSlice';

const Icon = ({ name }) => {
  const icons = {
    pencil: '✏️',
    copy: '📋',
    delete: '🗑️',
    instagram: '📸',
    facebook: '👤',
    youtube: '▶️',
    twitter: 'X',
    plus: '+'
  };
  return <span className="icon">{icons[name]}</span>;
};

const Links = () => {
  const dispatch = useDispatch();

  // Redux state
  const { links = [], isLoading: linksLoading = false } = useSelector(state => state.links) || {};
  const { profile = null, isLoading: profileLoading = false } = useSelector(state => state.profile) || {};

  // Local state
  const [showLinkDropdown, setShowLinkDropdown] = useState(false);
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [activeTab, setActiveTab] = useState('link');
  const [customColor, setCustomColor] = useState('#000000');
  const [localLinks, setLocalLinks] = useState([]);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    title: '',
    bio: '',
    image: null,
    backgroundColor: '#3E2723'
  });

  // Fetch initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([dispatch(fetchLinks()), dispatch(fetchProfile())]);
        setInitialDataLoaded(true);
      } catch (error) {
        console.error("Initial data load failed:", error);
        setInitialDataLoaded(true);
      }
    };
    loadData();
  }, [dispatch]);

  // Sync Redux links with local state
  // useEffect(() => {
  //   if (initialDataLoaded) {
  //     setLocalLinks(links.length > 0 ? links : []);
  //   }
  // }, [links, initialDataLoaded]);

  useEffect(() => {
    if (initialDataLoaded) {
      setLocalLinks(links.map(link => ({
        ...link,
        // Ensure consistent ID field (use '_id' from backend or generate temp ID)
        id: link.id || link._id || `temp-${Date.now()}`
      })));
    }
  }, [links, initialDataLoaded]);

  // Initialize profile form safely
  useEffect(() => {
    if (profile) {
      setProfileForm({
        title: profile.profileTitle?.trim() || '@opopo_08',
        bio: profile.bio?.trim() || 'No bio available',
        image: profile.profileImage || null,
        backgroundColor: profile.backgroundColor || '#3E2723'
      });
    }
  }, [profile]);
  
  
  // Profile handlers
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileForm(prev => ({
          ...prev,
          image: file // Store File object for upload
        }));
      };
      reader.readAsDataURL(file);
    }
  };



// Update the handleSaveProfile function
const handleSaveProfile = () => {
  if (!profileForm.title.trim() || !profileForm.bio.trim()) {
    alert('Profile title and bio are required!');
    return;
  }

  const formData = new FormData();
  formData.append('profileTitle', profileForm.title); // Changed from 'title'
  formData.append('bio', profileForm.bio);
  formData.append('backgroundColor', profileForm.backgroundColor);

  if (profileForm.image instanceof File) {
    formData.append('profileImage', profileForm.image); // Changed from 'image'
  } else if (typeof profileForm.image === 'string') {
    formData.append('existingImage', profileForm.image); // New field for existing images
  }

  dispatch(updateProfile(formData));
};



  // Add new link
  const handleAddLink = () => {
    if (newLinkTitle && newLinkUrl) {
      const formattedUrl = newLinkUrl.startsWith('http') ? newLinkUrl : `https://${newLinkUrl}`;
      const platform =
        formattedUrl.includes('instagram.com') ? 'instagram' :
        formattedUrl.includes('facebook.com') ? 'facebook' :
        formattedUrl.includes('youtube.com') ? 'youtube' :
        formattedUrl.includes('twitter.com') ? 'twitter' : 'custom';

      const newLink = {
        id: `temp-${Date.now()}`, // Ensure unique temporary ID
        title: newLinkTitle.trim(),
        url: formattedUrl,
        platform
      };

      setLocalLinks(prev => [...prev, newLink]);
      dispatch(createLink(newLink));
      setNewLinkTitle('');
      setNewLinkUrl('');
      setShowLinkDropdown(false);
    }
  };

  // Remove link
  const handleRemoveLink = (id) => {
    setLocalLinks(prev => prev.filter(link => link.id !== id));
    dispatch(deleteLink(id));
  };
  // Profile handlers
  const handleColorSelect = (color) => {
    setProfileForm(prev => ({ ...prev, backgroundColor: color }));
    if (!['#3E2723', '#FFFFFF', '#000000'].includes(color)) {
      setCustomColor(color);
    }
  };


  // Copy to clipboard
  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => alert('Link copied!'))
      .catch(console.error);
  };

  return (
    <div className="app-container">
      <div className="mobile-preview">
        <div className="mobile-frame">
          <div className="mobile-header" style={{ backgroundColor: profileForm.backgroundColor }}>
            <div className="profile-section">
              <div className="profile-image">
                {profileForm.image ? (
                  <img src={profileForm.image} alt="Profile" />
                ) : (
                  <div className="avatar-placeholder">👤</div>
                )}
              </div>
              <div className="profile-info">
                <h3>{profileForm.title}</h3>
                {profileForm.bio && <p className="bio-text">{profileForm.bio}</p>}
              </div>
            </div>
          </div>

          <div className="mobile-tabs">
            <button
              className={`tab ${activeTab === 'link' ? 'active' : ''}`}
              onClick={() => setActiveTab('link')}
            >
              Link
            </button>
            <button
              className={`tab ${activeTab === 'shop' ? 'active' : ''}`}
              onClick={() => setActiveTab('shop')}
            >
              Shop
            </button>
          </div>

          <div className="mobile-content">
            {activeTab === 'link' && (
              <div className="links-list">
                {!initialDataLoaded ? (
                  <div className="loading">Loading links...</div>
                ) : (
                  <>
                    {localLinks.length > 0 ? (
                      localLinks.map(link => (
                        <button
                          key={link._id}
                          className="link-button"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <Icon name={link.platform} />
                          {link.title}
                        </button>
                      ))
                    ) : (
                      <p className="no-links-message">No links added yet</p>
                    )}
                  </>
                )}
                <button className="get-connected-btn">Get Connected</button>
                <div className="spark-logo">SPARK</div>
              </div>
            )}

            {activeTab === 'shop' && (
              <div className="shop-section">
                <p>No shop items yet</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="editor-panel">
        {/* Profile Editor Section */}
        <div className="editor-section">
          <h2>Profile</h2>
          <div className="profile-editor">
            <div className="profile-image-selector">
              <div className="avatar-container">
                {profileForm.image ? (
                  <img src={profileForm.image} alt="Profile" className="avatar-preview" />
                ) : (
                  <div className="avatar-placeholder">👤</div>
                )}
              </div>
              <div className="profile-image-controls">
                <input
                  type="file"
                  id="profile-image-input"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
                <label htmlFor="profile-image-input" className="button primary">
                  Pick an image
                </label>
                <button
                  className="button secondary"
                  onClick={() => setProfileForm(prev => ({ ...prev, image: null }))}
                >
                  Remove
                </button>
              </div>
            </div>







            <div className="form-group">
              <label>Profile Title</label>
              <input
                type="text"
                name="title"
                value={profileForm.title}
                onChange={handleProfileChange}
                placeholder="@handle_name"
              />
            </div>

            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={profileForm.bio}
                onChange={(e) => e.target.value.length <= 60 && handleProfileChange(e)}
                placeholder="Enter your bio"
                maxLength={60}
              />
              <span className="char-count">{profileForm.bio.length}/60</span>
            </div>
          </div>
        </div>

        {/* Links Editor Section */}
        <div className="editor-section">
          <div className="links-controls">
            <button
              className="button primary add-button"
              onClick={() => setShowLinkDropdown(!showLinkDropdown)}
            >
              <Icon name="plus" /> Add Link
            </button>

            {showLinkDropdown && (
              <div className="link-dropdown">
                <h3>Enter URL</h3>
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="text"
                      placeholder="Link title"
                      value={newLinkTitle}
                      onChange={(e) => setNewLinkTitle(e.target.value)}
                      required
                    />
                    <Icon name="pencil" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="text"
                      placeholder="Link URL"
                      value={newLinkUrl}
                      onChange={(e) => setNewLinkUrl(e.target.value)}
                      required
                    />
                    <Icon name="pencil" />
                    <div className="button-group">
                      <button
                        className="icon-button"
                        onClick={() => handleCopyLink(newLinkUrl)}
                        disabled={!newLinkUrl}
                      >
                        <Icon name="copy" />
                      </button>
                      <button
                        className="icon-button"
                        onClick={() => setNewLinkUrl('')}
                        disabled={!newLinkUrl}
                      >
                        <Icon name="delete" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="applications">
                  <h4>Applications</h4>
                  <div className="app-buttons">
                    {['instagram', 'facebook', 'youtube', 'twitter'].map((platform) => (
                      <button
                        key={platform}
                        className="app-button"
                        onClick={() => {
                          setNewLinkTitle(`${platform.charAt(0).toUpperCase() + platform.slice(1)} Profile`);
                          setNewLinkUrl(`https://${platform}.com/`);
                        }}
                      >
                        <Icon name={platform} />
                        <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="dropdown-actions">
                  <button
                    className="button primary"
                    onClick={handleAddLink}
                    disabled={!newLinkTitle || !newLinkUrl || linksLoading}
                  >
                    {linksLoading ? 'Adding...' : 'Add Link'}
                  </button>
                  <button
                    className="button secondary"
                    onClick={() => setShowLinkDropdown(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {localLinks.length > 0 && (
            <div className="existing-links">
             
              <div className="links-list-editor">
                {localLinks.map(link => (
                  <div key={link.id} className="link-item">
                    <div className="link-info">
                      <span className="link-title">
                        <Icon name={link.platform} />
                        {link.title}
                      </span>
                      <span className="link-url">{link.url}</span>
                    </div>
                    <div className="link-actions">
                      <button
                        className="icon-button"
                        onClick={() => handleCopyLink(link.url)}
                      >
                        <Icon name="copy" />
                      </button>
                      <button
                        className="icon-button"
                        onClick={() => handleRemoveLink(link.id)}
                      >
                        <Icon name="delete" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Banner Editor Section */}
        <div className="editor-section">
          <h2>Banner</h2>
          <div className="banner-preview" style={{ backgroundColor: profileForm.backgroundColor }}>
            <div className="profile-image">
              {profileForm.image ? (
                <img src={profileForm.image} alt="Profile" />
              ) : (
                <div className="avatar-placeholder">👤</div>
              )}
            </div>
            <h3>{profileForm.title}</h3>
            <p>@{profileForm.title.replace('@', '')}</p>
          </div>

          <div className="background-controls">
            <h4>Custom Background Color</h4>
            <div className="color-options">
              {['#3E2723', '#FFFFFF', '#000000'].map((color) => (
                <button
                  key={color}
                  className={`color-option ${color === '#3E2723' ? 'brown' : color === '#FFFFFF' ? 'white' : 'black'} ${profileForm.backgroundColor === color ? 'selected' : ''}`}
                  onClick={() => handleColorSelect(color)}
                />
              ))}
              <div className="custom-color">
                <input
                  type="color"
                  value={customColor}
                  onChange={(e) => {
                    setCustomColor(e.target.value);
                    handleColorSelect(e.target.value);
                  }}
                />
                <input
                  type="text"
                  value={customColor}
                  onChange={(e) => {
                    setCustomColor(e.target.value);
                    if (/^#([A-Fa-f0-9]{6})$/.test(e.target.value)) {
                      handleColorSelect(e.target.value);
                    }
                  }}
                  className="color-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Section */}
        <div className="save-section">
          <button
            className="button primary save-button"
            onClick={handleSaveProfile}
            disabled={profileLoading}
          >
            {profileLoading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;