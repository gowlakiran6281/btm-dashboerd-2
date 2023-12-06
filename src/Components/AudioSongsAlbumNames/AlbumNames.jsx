// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import axios from "axios";

// // // // // // function AlbumComponent() {
// // // // // //   const [albums, setAlbums] = useState([]);
// // // // // //   const [newAlbumName, setNewAlbumName] = useState("");

// // // // // //   useEffect(() => {
// // // // // //     // Fetch existing albums from the server when the component mounts
// // // // // //     fetchAlbums();
// // // // // //   }, []);

// // // // // //   const fetchAlbums = async () => {
// // // // // //     try {
// // // // // //       const response = await axios.get("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audiomessagesubcategory/getalls");
// // // // // //       setAlbums(response.data);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching albums:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   const createAlbum = async () => {
// // // // // //     try {
// // // // // //       // Send a request to the server to create a new album
// // // // // //       const response = await axios.post("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audiomessagesubcategory/Audioupload", {
// // // // // //         name: newAlbumName,
// // // // // //       });

// // // // // //       // Update the state with the new album received from the server
// // // // // //       setAlbums((prevAlbums) => [...prevAlbums, response.data]);

// // // // // //       // Clear the input field
// // // // // //       setNewAlbumName("");
// // // // // //     } catch (error) {
// // // // // //       console.error("Error creating album:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>Albums</h1>
// // // // // //       <ul>
// // // // // //         {albums.map((album) => (
// // // // // //           <li key={album.id}>{album.name}</li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //       <div>
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Enter album name"
// // // // // //           value={newAlbumName}
// // // // // //           onChange={(e) => setNewAlbumName(e.target.value)}
// // // // // //         />
// // // // // //         <button onClick={createAlbum}>Create Album</button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default AlbumComponent;


// // // // // import React, { useState, useEffect } from "react";

// // // // // function AlbumFolderManager() {
// // // // //   const [albumName, setAlbumName] = useState("");
// // // // //   const [albums, setAlbums] = useState([]);

// // // // //   useEffect(() => {
// // // // //     fetchAlbums();
// // // // //   }, []);

// // // // //   const fetchAlbums = async () => {
// // // // //     try {
// // // // //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall");
// // // // //       const data = await response.json();
// // // // //       if (Array.isArray(data)) {
// // // // //         setAlbums(data);
// // // // //       } else {
// // // // //         console.error("Data is not an array:", data);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching albums:", error);
// // // // //     }
// // // // //   };

// // // // //   const createAlbum = async () => {
// // // // //     try {
// // // // //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum", {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //         },
// // // // //         body: JSON.stringify({ name: albumName }),
// // // // //       });

// // // // //       if (response.ok) {
// // // // //         console.log("Album created successfully!");
// // // // //         fetchAlbums();
// // // // //         alert("Album created successfully!"); // Display an alert message 
// // // // //       } else {
// // // // //         console.error("Failed to create album:", response.statusText);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error creating album:", error);
// // // // //     }
// // // // //   };

// // // // //   const deleteAlbum = async (albumId) => {
// // // // //     try {
// // // // //       const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/delete/${albumId}`, {
// // // // //         method: "DELETE",
// // // // //       });

// // // // //       if (response.ok) {
// // // // //         console.log("Album deleted successfully!");
// // // // //         fetchAlbums();
// // // // //         alert("Album deleted successfully!"); // Display an alert message
// // // // //       } else {
// // // // //         console.error("Failed to delete album:", response.statusText);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error deleting album:", error);
// // // // //     }
// // // // //   };

// // // // //   const updateAlbum = async (albumId, newName) => {
// // // // //     try {
// // // // //       const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/update/${albumId}`, {
// // // // //         method: "PUT",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //         },
// // // // //         body: JSON.stringify({ name: newName }),
// // // // //       });

// // // // //       if (response.ok) {
// // // // //         console.log("Album updated successfully!");
// // // // //         fetchAlbums();
// // // // //         alert("Album updated successfully!"); // Display an alert message
// // // // //       } else {
// // // // //         console.error("Failed to update album:", response.statusText);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error updating album:", error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h1>Album Folder Manager</h1>
// // // // //       <div>
// // // // //         <label>
// // // // //           Album Name:
// // // // //           <input
// // // // //             type="text"
// // // // //             value={albumName}
// // // // //             onChange={(e) => setAlbumName(e.target.value)}
// // // // //           />
// // // // //         </label>
// // // // //         <button onClick={createAlbum}>Save</button>
// // // // //       </div>
// // // // //       <div>
// // // // //         <h2>All Albums:</h2>
// // // // //         <ul>
// // // // //           {albums.map((album) => (
// // // // //             <li key={album.id}>
// // // // //               {album.name}
// // // // //               <button onClick={() => deleteAlbum(album.id)}>Delete</button>
// // // // //               <button onClick={() => updateAlbum(album.id, prompt("Enter new album name:"))}>Update</button>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //         <button onClick={fetchAlbums}>Get All</button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default AlbumFolderManager;
// // // // // import React, { useState, useEffect } from "react";

// // // // // function AlbumManager() {
// // // // //   const [albums, setAlbums] = useState([]);
// // // // //   const [selectedAlbum, setSelectedAlbum] = useState(null);

// // // // //   useEffect(() => {
// // // // //     // Fetch the list of albums when the component mounts
// // // // //     fetchAlbums();
// // // // //   }, []);

// // // // //   const fetchAlbums = async () => {
// // // // //     try {
// // // // //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall");
// // // // //       const data = await response.json();

// // // // //       if (response.ok) {
// // // // //         setAlbums(data);
// // // // //       } else {
// // // // //         console.error("Failed to fetch albums:", response.statusText);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching albums:", error);
// // // // //     }
// // // // //   };

// // // // //   const fetchAlbumDetails = async (albumId) => {
// // // // //     try {
// // // // //       const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum/${albumId}`);
// // // // //       const data = await response.json();

// // // // //       if (response.ok) {
// // // // //         setSelectedAlbum(data);
// // // // //       } else {
// // // // //         console.error("Failed to fetch album details:", response.statusText);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching album details:", error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h1>Album Manager</h1>
// // // // //       <div>
// // // // //         <h2>All Albums:</h2>
// // // // //         <ul>
// // // // //           {albums.map((album) => (
// // // // //             <li key={album._id}>
// // // // //               {album.AlbumName}{" "}
// // // // //               {/* <button onClick={() => fetchAlbumDetails(album._id)}> */}
// // // // //               <button onClick={() => fetchAlbumDetails(album.id, prompt("Enter new album name:"))}>Update</button>
// // // // //                 {/* View Details
// // // // //               </button> */}
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //       {selectedAlbum && (
// // // // //         <div>
// // // // //           <h2>Selected Album Details:</h2>
// // // // //           <p>ID: {selectedAlbum._id}</p>
// // // // //           <p>Album Name: {selectedAlbum.AlbumName}</p>
// // // // //           <p>Album Key: {selectedAlbum.albumkey}</p>
// // // // //           <p>
// // // // //             Album Banner:{" "}
// // // // //             <img src={selectedAlbum.album_banner} alt="Album Banner" />
// // // // //           </p>
// // // // //           <p>Created At: {selectedAlbum.createdAt}</p>
// // // // //           <p>__v: {selectedAlbum.__v}</p>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default AlbumManager;

// // // // import React, { useState, useEffect } from "react";

// // // // function AlbumManager() {
// // // //   const [albums, setAlbums] = useState([]);
// // // //   const [selectedAlbum, setSelectedAlbum] = useState(null);
// // // //   const [newAlbumName, setNewAlbumName] = useState("");

// // // //   useEffect(() => {
// // // //     fetchAlbums();
// // // //   }, []);

// // // //   const fetchAlbums = async () => {
// // // //     try {
// // // //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall");
// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         setAlbums(data);
// // // //       } else {
// // // //         console.error("Failed to fetch albums:", response.statusText);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error fetching albums:", error);
// // // //     }
// // // //   };

// // // //   const createAlbum = async () => {
// // // //     try {
// // // //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({ AlbumName: newAlbumName }),
// // // //       });

// // // //       if (response.ok) {
// // // //         console.log("Album created successfully!");
// // // //         fetchAlbums();
// // // //         setNewAlbumName(""); // Clear the input field
// // // //       } else {
// // // //         console.error("Failed to create album:", response.statusText);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error creating album:", error);
// // // //     }
// // // //   };

// // // //   const deleteAlbum = async (albumId) => {
// // // //     try {
// // // //       const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/delete/${albumId}`, {
// // // //         method: "DELETE",
// // // //       });

// // // //       if (response.ok) {
// // // //         console.log("Album deleted successfully!");
// // // //         fetchAlbums();
// // // //       } else {
// // // //         console.error("Failed to delete album:", response.statusText);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error deleting album:", error);
// // // //     }
// // // //   };

// // // //   const updateAlbum = async (albumId) => {
// // // //     try {
// // // //       const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/update/${albumId}`, {
// // // //         method: "PUT",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //         },
// // // //         body: JSON.stringify({ AlbumName: newAlbumName }),
// // // //       });

// // // //       if (response.ok) {
// // // //         console.log("Album updated successfully!");
// // // //         fetchAlbums();
// // // //         setNewAlbumName(""); // Clear the input field
// // // //       } else {
// // // //         console.error("Failed to update album:", response.statusText);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error updating album:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>Album Manager</h1>
// // // //       <div>
// // // //         <h2>All Albums:</h2>
// // // //         <ul>
// // // //           {albums.map((album) => (
// // // //             <li key={album._id}>
// // // //               {album.AlbumName}{" "}
// // // //               <button onClick={() => fetchAlbumDetails(album._id)}>View Details</button>
// // // //               <button onClick={() => deleteAlbum(album._id)}>Delete</button>
// // // //               <button onClick={() => updateAlbum(album._id)}>Update</button>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //       <div>
// // // //         <h2>Create New Album:</h2>
// // // //         <label>
// // // //           Album Name:
// // // //           <input
// // // //             type="text"
// // // //             value={newAlbumName}
// // // //             onChange={(e) => setNewAlbumName(e.target.value)}
// // // //           />
// // // //         </label>
// // // //         <button onClick={createAlbum}>Create</button>
// // // //       </div>
// // // //       {selectedAlbum && (
// // // //         <div>
// // // //           <h2>Selected Album Details:</h2>
// // // //           <p>ID: {selectedAlbum._id}</p>
// // // //           <p>Album Name: {selectedAlbum.AlbumName}</p>
// // // //           <p>Album Key: {selectedAlbum.albumkey}</p>
// // // //           <p>
// // // //             Album Banner:{" "}
// // // //             <img src={selectedAlbum.album_banner} alt="Album Banner" />
// // // //           </p>
// // // //           <p>Created At: {selectedAlbum.createdAt}</p>
// // // //           <p>__v: {selectedAlbum.__v}</p>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default AlbumManager;

// // // import React, { useState } from 'react';

// // // const FolderForm = () => {
// // //   const [folderName, setFolderName] = useState('');

// // //   const handleInputChange = (e) => {
// // //     setFolderName(e.target.value);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ folderName }),
// // //       });

// // //       if (response.ok) {
// // //         console.log('Folder created successfully!');
// // //       } else {
// // //         console.error('Failed to create folder:', response.statusText);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error creating folder:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Create Folder</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <label>
// // //           Folder Name:
// // //           <input type="text" value={folderName} onChange={handleInputChange} />
// // //         </label>
// // //         <button type="submit">Save</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default FolderForm;
// // import React, { useState } from 'react';

// // const AlbumForm = () => {
// //   const [albumName, setAlbumName] = useState('');
// //   const [albumBanner, setAlbumBanner] = useState('');

// //   const handleNameChange = (e) => {
// //     setAlbumName(e.target.value);
// //   };

// //   const handleBannerChange = (e) => {
// //     setAlbumBanner(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('http://your-api-endpoint.com/create-album', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           albumName,
// //           albumBanner,
// //         }),
// //       });

// //       if (response.ok) {
// //         console.log('Album created successfully!');
// //         // Optionally, you can reset the form or perform other actions here
// //       } else {
// //         console.error('Failed to create album:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error creating album:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Create Album</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Album Name:
// //           <input type="text" value={albumName} onChange={handleNameChange} />
// //         </label>
// //         <label>
// //           Album Banner URL:
// //           <input type="file" value={albumBanner} onChange={handleBannerChange} />
// //         </label>
// //         <button type="submit">Save</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AlbumForm;
// // import React, { useState } from 'react';

// // const AlbumForm = () => {
// //   const [AlbumName, setAlbumName] = useState('');
// //   const [AlbumBanner, setAlbumBanner] = useState(null);

// //   const handleNameChange = (e) => {
// //     setAlbumName(e.target.value);
// //   };

// //   const handleBannerChange = (e) => {
// //     // Assuming you want to handle file upload
// //     const file = e.target.files[0];
// //     setAlbumBanner(file);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const formData = new FormData();
// //       formData.append('AlbumName', AlbumName);
// //       formData.append('AlbumBanner', AlbumBanner);

// //       const response = await fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (response.ok) {
// //         console.log('Album created successfully!');
// //         alert('Album created successfully!'); // Display an alert message
// //         // Optionally, you can reset the form or perform other actions here
// //       } else {
// //         console.error('Failed to create album:', response.statusText);
// //         alert('Failed to create album');
// //       }
// //     } catch (error) {
// //       console.error('Error creating album:', error);
// //       alert('Error creating album');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Create Album</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           AlbumName:
// //           <input type="text" value={AlbumName} onChange={handleNameChange} />
// //         </label>
// //         <label>
// //           AlbumBanner:
// //           <input type="file" accept="image/*" onChange={handleBannerChange} />
// //         </label>
// //         <button type="submit">Save</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AlbumForm;
// // import React, { useState } from 'react';

// // const AlbumForm = () => {
// //   const [albumName, setAlbumName] = useState('');
// //   const [albumBanner, setAlbumBanner] = useState(null);

// //   const handleNameChange = (e) => {
// //     setAlbumName(e.target.value);
// //   };

// //   const handleBannerChange = (e) => {
// //     const file = e.target.files[0];
// //     setAlbumBanner(file);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const formData = new FormData();
// //       formData.append('albumName', albumName);
// //       formData.append('albumBanner', albumBanner);

// //       const response = await fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (response.ok) {
// //         console.log('Album created successfully!');
// //         alert('Album created successfully!');
// //       } else {
// //         console.error('Failed to create album:', response.statusText);
// //         alert('Failed to create album');
// //       }
// //     } catch (error) {
// //       console.error('Error creating album:', error);
// //       alert('Error creating album');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Create Album</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Album Name:
// //           <input type="text" value={albumName} onChange={handleNameChange} />
// //         </label>
// //         <label>
// //           Album Banner:
// //           <input type="file" accept="image/*" onChange={handleBannerChange} />
// //         </label>
// //         <button type="submit">Save</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AlbumForm;
// import React, { useState, useEffect } from 'react';

// const API_BASE_URL = 'http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall';

// const App = () => {
//   const [albums, setAlbums] = useState([]);
//   const [formData, setFormData] = useState({ AlbumName: '', AlbumBanner: '' });

//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   const fetchAlbums = async () => {
//     try {
//       const response = await fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall');
//       const data = await response.json();
//       setAlbums(data);
//     } catch (error) {
//       console.error('Error fetching albums:', error);
//     }
//   };

//   const handleNameChange = (e) => {
//     const { value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, AlbumName: value }));
//   };
  
//   const handleBannerChange = (e) => {
//     const { value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, AlbumBanner: value }));
//   };
  

//   const handleCreate = async () => {
//     try {
//       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Album created successfully');
//         fetchAlbums();
//       } else {
//         alert('Error creating album');
//       }
//     } catch (error) {
//       console.error('Error creating album:', error);
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Album updated successfully');
//         fetchAlbums();
//       } else {
//         alert('Error updating album');
//       }
//     } catch (error) {
//       console.error('Error updating album:', error);
//     }
//   };

// //   const handleDelete = async (id) => {
// //     try {
// //       const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/delete/${id}`, {
// //   method: 'DELETE',
// // });

// //       if (response.ok) {
// //         alert('Album deleted successfully');
// //         fetchAlbums();
// //       } else {
// //         alert('Error deleting album');
// //       }
// //     } catch (error) {
// //       console.error('Error deleting album:', error);
// //     }
// //   };

// const handleDelete = async (id) => {
//   console.log('Deleting album with id:', id);

//   try {
//     const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/delete/${id}`, {
//       method: 'DELETE',
//     });

//     // Rest of the code...
//   } catch (error) {
//     console.error('Error deleting album:', error);
//   }
// };

//   return (
//     <div>
//       <h1>Albums</h1>
//       <ul>
//         {albums.map((album) => (
//           <li key={album.id}>
//             {album.AlbumName} - {album.AlbumBanner}{' '}
//             <button onClick={() => handleUpdate(album.id)}>Update</button>
//             <button onClick={() => handleDelete(album.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Create Album</h2>
//       <label>
//   Album Name:
//   <input type="text" name="AlbumName" value={formData.AlbumName} onChange={handleNameChange} />
// </label>
// <label>
//   Album Banner:
//   <input type="file" name="AlbumBanner" value={formData.AlbumBanner} onChange={handleBannerChange} />
// </label>
//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';

// const API_BASE_URL = 'http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall';

// const AlbumComponent = () => {
//   const [albums, setAlbums] = useState([]);
//   const [formData, setFormData] = useState({ AlbumName: '', album_banner: '' });

//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   const fetchAlbums = async () => {
//     try {
//       const response = await fetch(API_BASE_URL);
//       const data = await response.json();
//       setAlbums(data);
//     } catch (error) {
//       console.error('Error fetching albums:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleCreate = async () => {
//     try {
//       const response = await fetch(API_BASE_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Album created successfully');
//         fetchAlbums();
//       } else {
//         alert('Error creating album');
//       }
//     } catch (error) {
//       console.error('Error creating album:', error);
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Album updated successfully');
//         fetchAlbums();
//       } else {
//         alert('Error updating album');
//       }
//     } catch (error) {
//       console.error('Error updating album:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         alert('Album deleted successfully');
//         fetchAlbums();
//       } else {
//         alert('Error deleting album');
//       }
//     } catch (error) {
//       console.error('Error deleting album:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Albums</h1>
//       <ul>
//         {albums.map((album) => (
//           <li key={album.id}>
//             {album.AlbumName} - {album.album_banner}{' '}
//             <button onClick={() => handleUpdate(album.id)}>Update</button>
//             <button onClick={() => handleDelete(album.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Create Album</h2>
//       <label>
//         Album Name:
//         <input type="text" name="AlbumName" value={formData.AlbumName} onChange={handleInputChange} />
//       </label>
//       <label>
//         Album Banner:
//         <input type="text" name="album_banner" value={formData.album_banner} onChange={handleInputChange} />
//       </label>
//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// };

// export default AlbumComponent;

import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall';

const AlbumComponent = () => {
  const [albums, setAlbums] = useState([]);
  const [formData, setFormData] = useState({ AlbumName: '', ablum_banner: '' });

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall');
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCreate = async () => {
    try {
      const response = await fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Album created successfully');
        fetchAlbums();
      } else {
        alert('Error creating album');
      }
    } catch (error) {
      console.error('Error creating album:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`${'http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/update'}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Album updated successfully');
        fetchAlbums();
      } else {
        alert('Error updating album');
      }
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/delete/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        alert('Album deleted successfully');
        fetchAlbums();
      } else {
        alert('Error deleting album');
      }
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };                                                                                
  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/delete/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.status === 204) {
  //       alert('Album deleted successfully');
  //       fetchAlbums();
  //     } else if (response.status === 404) {
  //       alert('Album not found'); // Handle other status codes as needed
  //     } else {
  //       alert('Error deleting album');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting album:', error);
  //   }
  // };
  

  return (
    <div>
      <h1>Albums</h1>
      <table>
        <thead>
          <tr>
            
            <th>Album Name</th>
            <th>Album Banner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.AlbumName}</td>
              <td>
                <img src={album.album_banner} alt={album.AlbumName} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>
                <button onClick={() => handleUpdate(album.id)}>Update</button>
                <button onClick={() => handleDelete(album.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Create Album</h2>
      <label>
        Album Name:
        <input type="text" name="AlbumName" value={formData.AlbumName} onChange={handleInputChange} />
      </label>
      <label>
        Album Banner:
        <input type="file" name="ablum_banner" value={formData.album_banner} onChange={handleInputChange} />
      </label>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default AlbumComponent;


// import React, { useState, useEffect } from "react";

// function GetAllBanners() {
//   const [fetchedData, setFetchedData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/getall')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Complete API Response:', data);
//         setFetchedData(data);
//         console.log('Fetched data:', data);
//       })
//       .catch(err => console.log(err));
//   };

//   const deleteBanner = (bannerId) => {
//     fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/delete/${bannerId}`, {
//       method: 'DELETE',
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Delete Response:', data);
//         // Refresh the data after deletion
//         fetchData();
//       })
//       .catch(err => console.log(err));
//   };

//   const updateBanner = (bannerId, newData) => {
//     fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/update/${bannerId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Update Response:', data);
//         // Refresh the data after update
//         fetchData();
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="container">
//       <h1>All Banners</h1>
//       {fetchedData !== null && fetchedData !== undefined ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Album ID</th>
//               <th>Banner Location</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {fetchedData.map(article => (
//               <tr key={article._id}>
//                 <td>{article.albumId}</td>
//                 <td>{article.Banner_location}</td>
//                 <td>{article.status}</td>
//                 <td>
//                   <button onClick={() => deleteBanner(article._id)}>Delete</button>
//                   <button onClick={() => updateBanner(article._id, {/* new data */})}>Update</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default GetAllBanners;

// import React, { useState, useEffect } from 'react';

// const API_BASE_URL = 'http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/getall';

// const AlbumComponent = () => {
//   const [albums, setAlbums] = useState([]);
//   const [formData, setFormData] = useState({ AlbumName: '', album_banner: '' });

//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   const fetchAlbums = async () => {
//     try {
//       const response = await fetch(API_BASE_URL);
//       const data = await response.json();
//       setAlbums(data);
//     } catch (error) {
//       console.error('Error fetching albums:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleCreate = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('AlbumName', formData.AlbumName);
//       formData.append('album_banner', formData.album_banner);

//       const response = await fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         alert('Album created successfully');
//         fetchAlbums();
//       } else {
//         alert('Error creating album');
//       }
//     } catch (error) {
//       console.error('Error creating album:', error);
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Album updated successfully');
//         fetchAlbums();
//       } else {
//         alert('Error updating album');
//       }
//     } catch (error) {
//       console.error('Error updating album:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/delete/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         alert('Album deleted successfully');
//         fetchAlbums();
//       } else {
//         alert('Error deleting album');
//       }
//     } catch (error) {
//       console.error('Error deleting album:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Albums</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Album Name</th>
//             <th>Album Banner</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {albums.map((album) => (
//             <tr key={album.id}>
//               <td>{album.AlbumName}</td>
//               <td>
//                 <img src={album.album_banner} alt={album.AlbumName} style={{ width: '100px', height: 'auto' }} />
//               </td>
//               <td>
//                 <button onClick={() => handleUpdate(album.id)}>Update</button>
//                 <button onClick={() => handleDelete(album.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2>Create Album</h2>
//       <label>
//         Album Name:
//         <input type="text" name="AlbumName" value={formData.AlbumName} onChange={handleInputChange} />
//       </label>
//       <label>
//         Album Banner:
//         <input type="file" name="album_banner" onChange={(e) => setFormData({ ...formData, album_banner: e.target.files[0] })} />
//       </label>
//       <button onClick={handleCreate}>Create</button>
//     </div>
//   );
// };

// export default AlbumComponent;
