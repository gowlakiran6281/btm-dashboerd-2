// // // import React, { useState, useEffect } from "react";

// // // function FolderManager() {
// // //   const [folderName, setFolderName] = useState("");
// // //   const [folders, setFolders] = useState([]);

// // //   useEffect(() => {
// // //     fetchFolders();
// // //   }, []);

// // //   const fetchFolders = async () => {
// // //     try {
// // //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create");
// // //       const data = await response.json();
// // //       setFolders(data);
// // //     } catch (error) {
// // //       console.error("Error fetching folders:", error);
// // //     }
// // //   };

// // //   const createFolder = async () => {
// // //     try {
// // //       const response = await fetch("your-api-endpoint-for-creating-folder", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({ folderName }),
// // //       });

// // //       if (response.ok) {
// // //         console.log("Folder created successfully!");
// // //         // Fetch folders again after creating a new folder
// // //         fetchFolders();
// // //       } else {
// // //         console.error("Failed to create folder:", response.statusText);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error creating folder:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Folder Manager</h1>
// // //       <div>
// // //         <label>
// // //           Folder Name:
// // //           <input
// // //             type="text"
// // //             value={folderName}
// // //             onChange={(e) => setFolderName(e.target.value)}
// // //           />
// // //         </label>
// // //         <button onClick={createFolder}>Save</button>
// // //       </div>
// // //       <div>
// // //         <h2>All Folders:</h2>
// // //         <ul>
// // //           {folders.map((folder) => (
// // //             <li key={folder.id}>{folder.name}</li>
// // //           ))}
// // //         </ul>
// // //         <button onClick={fetchFolders}>Get All</button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default FolderManager;

// // import React, { useState, useEffect } from "react";

// // function FolderManager() {
// //   const [folderName, setFolderName] = useState("");
// //   const [folders, setFolders] = useState([]);

// //   useEffect(() => {
// //     fetchFolders();
// //   }, []);

// //   const fetchFolders = async () => {
// //     try {
// //       const response = await fetch("your-api-endpoint-for-getting-folders");
// //       const data = await response.json();
// //       // Ensure that data is an array before setting it
// //       if (Array.isArray(data)) {
// //         setFolders(data);
// //       } else {
// //         console.error("Data is not an array:", data);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching folders:", error);
// //     }
// //   };

// //   const createFolder = async () => {
// //     try {
// //       const response = await fetch("your-api-endpoint-for-creating-folder", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ folderName }),
// //       });

// //       if (response.ok) {
// //         console.log("Folder created successfully!");
// //         // Fetch folders again after creating a new folder
// //         fetchFolders();
// //       } else {
// //         console.error("Failed to create folder:", response.statusText);
// //       }
// //     } catch (error) {
// //       console.error("Error creating folder:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Folder Manager</h1>
// //       <div>
// //         <label>
// //           Folder Name:
// //           <input
// //             type="text"
// //             value={folderName}
// //             onChange={(e) => setFolderName(e.target.value)}
// //           />
// //         </label>
// //         <button onClick={createFolder}>Save</button>
// //       </div>
// //       <div>
// //         <h2>All Folders:</h2>
// //         <ul>
// //           {folders.map((folder) => (
// //             <li key={folder.id}>{folder.name}</li>
// //           ))}
// //         </ul>
// //         <button onClick={fetchFolders}>Get All</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FolderManager;

// // import React, { useState, useEffect } from "react";

// // function FolderManager() {
// //   const [folderName, setFolderName] = useState("");
// //   const [folders, setFolders] = useState([]);

// //   useEffect(() => {
// //     fetchFolders();
// //   }, []);

// //   const fetchFolders = async () => {
// //     try {
// //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create");
// //       const data = await response.json();
// //       // Ensure that data is an array before setting it
// //       if (Array.isArray(data)) {
// //         setFolders(data);
// //       } else {
// //         console.error("Data is not an array:", data);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching folders:", error);
// //     }
// //   };

// //   // const createFolder = async () => {
// //   //   try {
// //   //     const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create", {
// //   //       method: "POST",
// //   //       headers: {
// //   //         "Content-Type": "application/json",
// //   //       },
// //   //       body: JSON.stringify({ folderName }),
// //   //     });

// //   //     if (response.ok) {
// //   //       console.log("Folder created successfully!");
// //   //       // Fetch folders again after creating a new folder
// //   //       fetchFolders();
// //   //     } else {
// //   //       console.error("Failed to create folder:", response.statusText);
// //   //     }
// //   //   } catch (error) {
// //   //     console.error("Error creating folder:", error);
// //   //   }
// //   // };
// //   const createFolder = async () => {
// //     try {
// //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ folderName }),
// //       });

// //       if (response.ok) {
// //         console.log("Folder created successfully!");
// //         // Fetch folders again after creating a new folder
// //         fetchFolders();
// //         // Display an alert message
// //         alert("Folder created successfully!");
// //       } else {
// //         console.error("Failed to create folder:", response.statusText);
// //       }
// //     } catch (error) {
// //       console.error("Error creating folder:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Folder Manager</h1>
// //       <div>
// //         <label>
// //           Folder Name:
// //           <input
// //             type="text"
// //             value={folderName}
// //             onChange={(e) => setFolderName(e.target.value)}
// //           />
// //         </label>
// //         <button onClick={createFolder}>Save</button>
// //       </div>
// //       <div>
// //         <h2>All Folders:</h2>
// //         <ul>
// //           {folders.map((folder) => (
// //             <li key={folder.id}>{folder.name}</li>
// //           ))}
// //         </ul>
// //         <button onClick={fetchFolders}>Get All</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FolderManager;

// import React, { useState, useEffect } from "react";

// function FolderManager() {
//   const [folderName, setFolderName] = useState("");
//   const [folderBanner, setFolderBanner] = useState(null);
//   const [folders, setFolders] = useState([]);

//   useEffect(() => {
//     fetchFolders();
//   }, []);

//   const fetchFolders = async () => {
//     try {
//       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/import React, { useState, useEffect } from "react";

//       function FolderManager() {
//         const [folderName, setFolderName] = useState("");
//         const [folderBanner, setFolderBanner] = useState(null);
//         const [folders, setFolders] = useState([]);

//         useEffect(() => {
//           fetchFolders();
//         }, []);

//         const fetchFolders = async () => {
//           try {
//             const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create");
//             const data = await response.json();
//             // Ensure that data is an array before setting it
//             if (Array.isArray(data)) {
//               setFolders(data);
//             } else {
//               console.error("Data is not an array:", data);
//             }
//           } catch (error) {
//             console.error("Error fetching folders:", error);
//           }
//         };

//         const createFolder = async () => {
//           try {
//             const formData = new FormData();
//             formData.append("MainFolderBanner", folderBanner); // Assuming folderBanner is a File object
//             formData.append("MainmostFolderName", folderName);

//             const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create", {
//               method: "POST",
//               body: formData,
//             });

//             if (response.ok) {
//               console.log("Folder created successfully!");
//               // Fetch folders again after creating a new folder
//               fetchFolders();
//               // Display an alert message
//               alert("Folder created successfully!");
//             } else {
//               console.error("Failed to create folder:", response.statusText);
//             }
//           } catch (error) {
//             console.error("Error creating folder:", error);
//           }
//         };

//         return (
//           <div>
//             <h1>Folder Manager</h1>
//             <div>
//               <label>
//                 Folder Name:
//                 <input
//                   type="text"
//                   value={folderName}
//                   onChange={(e) => setFolderName(e.target.value)}
//                 />
//               </label>
//               <label>
//                 Folder Banner:
//                 <input
//                   type="file"
//                   onChange={(e) => setFolderBanner(e.target.files[0])}
//                 />
//               </label>
//               <button onClick={createFolder}>Save</button>
//             </div>
//             <div>
//               <h2>All Folders:</h2>
//               <ul>
//                 {folders.map((folder) => (
//                   <li key={folder.id}>{folder.name}</li>
//                 ))}
//               </ul>
//               <button onClick={fetchFolders}>Get All</button>
//             </div>
//           </div>
//         );
//       }

//       export default FolderManager;
//       ");
//       const data = await response.json();
//       // Ensure that data is an array before setting it
//       if (Array.isArray(data)) {
//         setFolders(data);
//       } else {
//         console.error("Data is not an array:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching folders:", error);
//     }
//   };

//   const createFolder = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("MainFolderBanner", folderBanner); // Assuming folderBanner is a File object
//       formData.append("MainmostFolderName", folderName);

//       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         console.log("Folder created successfully!");
//         // Fetch folders again after creating a new folder
//         fetchFolders();
//         // Display an alert message
//         alert("Folder created successfully!");
//       } else {
//         console.error("Failed to create folder:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error creating folder:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Folder Manager</h1>
//       <div>
//         <label>
//           Folder Name:
//           <input
//             type="text"
//             value={folderName}
//             onChange={(e) => setFolderName(e.target.value)}
//           />
//         </label>
//         <label>
//           Folder Banner:
//           <input
//             type="file"
//             onChange={(e) => setFolderBanner(e.target.files[0])}
//           />
//         </label>
//         <button onClick={createFolder}>Save</button>
//       </div>
//       <div>
//         <h2>All Folders:</h2>
//         <ul>
//           {folders.map((folder) => (
//             <li key={folder.id}>{folder.name}</li>
//           ))}
//         </ul>
//         <button onClick={fetchFolders}>Get All</button>
//       </div>
//     </div>
//   );
// }

// export default FolderManager;

// import React, { useState, useEffect } from "react";

// function FolderManager() {
//   const [folderName, setFolderName] = useState("");
//   const [folderBanner, setFolderBanner] = useState(null);
//   const [folders, setFolders] = useState([]);

//   useEffect(() => {
//     fetchFolders();
//   }, []);

//   const fetchFolders = async () => {
//     try {
//       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create");
//       const data = await response.json();
//       // Ensure that data is an array before setting it
//       if (Array.isArray(data)) {
//         setFolders(data);
//       } else {
//         console.error("Data is not an array:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching folders:", error);
//     }
//   };

//   const createFolder = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("MainFolderBanner", folderBanner); // Assuming folderBanner is a File object
//       formData.append("MainmostFolderName", folderName);

//       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         console.log("Folder created successfully!");
//         // Fetch folders again after creating a new folder
//         fetchFolders();
//         // Display an alert message
//         alert("Folder created successfully!");
//       } else {
//         console.error("Failed to create folder. Server response:", response.status, response.statusText);
//         const responseBody = await response.text();
//         console.error("Response body:", responseBody);
//       }
//     } catch (error) {
//       console.error("Error creating folder:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Folder Manager</h1>
//       <div>
//         <label>
//           Folder Name:
//           <input
//             type="text"
//             value={folderName}
//             onChange={(e) => setFolderName(e.target.value)}
//           />
//         </label>
//         <label>
//           Folder Banner:
//           <input
//             type="file"
//             onChange={(e) => setFolderBanner(e.target.files[0])}
//           />
//         </label>
//         <button onClick={createFolder}>Save</button>
//       </div>
//       <div>
//         <h2>All Folders:</h2>
//         <ul>
//           {folders.map((folder) => (
//             <li key={folder.id}>{folder.name}</li>
//           ))}
//         </ul>
//         <button onClick={fetchFolders}>Get All</button>
//       </div>
//     </div>
//   );
// }

// export default FolderManager;

// import React, { useState } from "react";
// import axios from "axios";
// function YourComponent() {
//   const [post, setPost] = useState({
//     Musictitle: "",
//     artist: "",
//     AlbumName: "",
//     Music: null,  // Use null for file inputs
//     Banner: null, // Use null for file inputs
//     lyrics: ""
//   });

//   const handleInputChange = (event) => {
//     setPost({ ...post, [event.target.name]: event.target.value });
//   };

//   const handleFileChange = (event) => {
//     setPost({ ...post, [event.target.name]: event.target.files[0] });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("Musictitle", post.Musictitle);
//     formData.append("artist", post.artist);
//     formData.append("AlbumName", post.AlbumName);
//     formData.append("Music", post.Music);
//     formData.append("Banner", post.Banner);
//     formData.append("lyrics", post.lyrics);

//    console.log("Form Data:", Array.from(formData.entries()));

//     axios
//       .post(
//         "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/audioupload",
//         formData
//       )
//       .then((response) => {
//         console.log("Response from server:", response.data);
//         // Handle the response as needed
//         // For example, show a success message to the user
//         alert("Song uploaded successfully!");
//       })
//       .catch((error) => {
//         console.error("Error submitting form:", error);
//         // Log the detailed error response
//         if (error.response) {
//           console.error("Error response from server:", error.response.data);
//         }
//         alert("Error uploading song. Please try again.");
//       });

//   };

//   return (
//     <div className="container">
//       <div>
//         <h1>Audio Songs</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="title-div">
//             <p>Musictitle :</p>
//             <input
//               type="text"
//               name="Musictitle"
//               value={post.Musictitle}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="artist-dev">
//             <p>Artist :</p>
//             <input
//               type="text"
//               name="artist"
//               value={post.artist}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="artist-dev">
//             <p>AlbumName :</p>
//             <input
//               type="text"
//               name="AlbumName"
//               value={post.AlbumName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="artist-dev">
//             <p>Music :</p>
//             <input type="file" name="Music" onChange={handleFileChange} />
//           </div>
//           <div className="artist-dev">
//             <p>Banner:</p>
//             <input type="file" name="Banner" onChange={handleFileChange} />
//           </div>
//           <div className="artist-dev">
//             <p>Lyrics:</p>
//           </div>
//           <div className="lyrics-dev">
//             <textarea
//               id="lyrics"
//               name="lyrics"
//               value={post.lyrics}
//               onChange={handleInputChange}
//             ></textarea>
//           </div>
//           <div className="Download">
//             <button type="submit">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default YourComponent;

import React, { useState } from "react";
import axios from "axios";

function FolderManager() {
  const [post, setPost] = useState({
    MainmostFolderName: "",
    MainFolderBanner: null,
  });

  const handleInputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("MainmostFolderName", post.MainmostFolderName);

      formData.append("MainFolderBanner", post.MainFolderBanner);

      console.log("Form Data:", Array.from(formData.entries()));

      const response = await axios.post(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create",
        formData
      );

      console.log("Response from server:", response.data);
      alert("Mainfolder uploaded successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
        alert("This folder name already exists please change folder name!");
      }

      alert("Error uploading Mainfolder. Please try again.");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Audio Message MainFolder</h1>
        <form onSubmit={handleSubmit}>
          <div className="title-div">
            <p>Folder Name :</p>
            <input
              type="text"
              name="MainmostFolderName"
              value={post.MainmostFolderName}
              onChange={handleInputChange}
            />
          </div>

          <div className="artist-dev">
            <p>Banner:</p>
            <input
              type="file"
              name="MainFolderBanner"
              onChange={handleFileChange}
            />
          </div>

          <div className="Download">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FolderManager;
