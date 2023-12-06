import React, { useState } from "react";
import axios from "axios";

function Videomessagesubfolder() {
  const [post, setPost] = useState({
    // Musictitle: "",
    // artist: "",
    // AlbumName: "",
    // Music: null,  // Use null for file inputs
    // Banner: null, // Use null for file inputs
    // lyrics: ""
    SubFolderName:"", //
    MainmostFolderName: "",
    SubFolderBanner:"",
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
      // formData.append("Musictitle", post.Musictitle);
      // formData.append("artist", post.artist);
      // formData.append("AlbumName", post.AlbumName);
      // formData.append("Music", post.Music);
      // formData.append("Banner", post.Banner);
      // formData.append("lyrics", post.lyrics);
      formData.append("SubFolderName", post.SubFolderName);
      formData.append("MainmostFolderName", post.MainmostFolderName);
      formData.append("SubFolderBanner", post.SubFolderBanner);

      console.log("Form Data:", Array.from(formData.entries()));

      const response = await axios.post(
        // "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/subfolder/create",
        formData
      );

      console.log("Response from server:", response.data);
      alert("Subfolder uploaded successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
      }

      alert("Error uploading Subfolder. Please try again.");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Video Message Subfolder</h1>
        {/* <form onSubmit={handleSubmit}>
          <div className="title-div">
            <p>Musictitle :</p>
            <input
              type="text"
              name="Musictitle"
              value={post.Musictitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="artist-dev">
            <p>Artist :</p>
            <input
              type="text"
              name="artist"
              value={post.artist}
              onChange={handleInputChange}
            />
          </div>
          <div className="artist-dev">
            <p>AlbumName :</p>
            <input
              type="text"
              name="AlbumName"
              value={post.AlbumName}
              onChange={handleInputChange}
            />
          </div>
          <div className="artist-dev">
            <p>Music :</p>
            <input type="file" name="Music" onChange={handleFileChange} />
          </div>
          <div className="artist-dev">
            <p>Banner:</p>
            <input type="file" name="Banner" onChange={handleFileChange} />
          </div>
          <div className="artist-dev">
            <p>Lyrics:</p>
          </div>
          <div className="lyrics-dev">
            <textarea
              id="lyrics"
              name="lyrics"
              value={post.lyrics}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="Download">
            <button type="submit">Save</button>
          </div>
        </form> */}

<form onSubmit={handleSubmit}>
          <div className="title-div">
            <p>SubFolderName :</p>
            <input
              type="text"
              name="SubFolderName"
              value={post.SubFolderName}
              onChange={handleInputChange}
            />
          </div>
          <div className="artist-dev">
            <p>MainmostFolderName :</p>
            <input
              type="text"
              name="MainmostFolderName"
              value={post.MainmostFolderName}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className="artist-dev">
            <p>AlbumName :</p>
            <input
              type="text"
              name="AlbumName"
              value={post.AlbumName}
              onChange={handleInputChange}
            />
          </div> */}
          {/* <div className="artist-dev">
            <p>Music :</p>
            <input type="file" name="Music" onChange={handleFileChange} />
          </div> */}
          <div className="artist-dev">
            <p>SubFolderBanner:</p>
            <input type="file" name="SubFolderBanner" onChange={handleFileChange} />
          </div>
          {/* <div className="artist-dev">
            <p>Lyrics:</p>
          </div>
          <div className="lyrics-dev">
            <textarea
              id="lyrics"
              name="lyrics"
              value={post.lyrics}
              onChange={handleInputChange}
            ></textarea>
          </div> */}
          <div className="Download">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Videomessagesubfolder;
