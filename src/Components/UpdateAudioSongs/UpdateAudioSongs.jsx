// Import necessary modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DownloadOutlined, ReadOutlined } from "@ant-design/icons";
import "./UpdateAudioSongs.css";

function CrudApp() {
  const [fetchedData, setFetchedData] = useState([]);
  const [formData, setFormData] = useState({
    AlbumName: "",
    // Add other fields as needed
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/getall"
      );
      setFetchedData(response.data.getallsongs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetAll = async () => {
    fetchData();
  };

  const handleCreate = async () => {
    try {
      await axios.post(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/audioupload",
        formData
      );
      fetchData();
    } catch (error) {
      console.error("Error creating record:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/{baseurl}audio/updateAudio/${id}`,
        formData
      );
      fetchData();
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/delete/${id}`
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  return (
    <div>
      <div>
        <label>
          Album Name:
          <input
            type="text"
            name="AlbumName"
            value={formData.AlbumName}
            onChange={handleInputChange}
          />
        </label>
        {/* Add other input fields as needed */}
      </div>

      <button onClick={handleGetAll}>Get All</button>

      <table>
        <thead>
          <tr>
            <th>Banner</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Lyrics</th>
            <th>Audio</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.map((song) => (
            <tr key={song._id}>
              <td>
                <div>
                  <img src={song.Banner_location} alt="Banner" />
                  <p>{song.Musictitle}</p>
                </div>
              </td>
              <td>{song.artist}</td>
              <td>{song.AlbumName}</td>
              <td>
                {/* <ReadOutlined /> */}
                {song.lyrics}
              </td>
              <td>
                <audio controls>
                  <source src={song.Audio_location} type="audio/mpeg" />
                </audio>
              </td>
              <td>
                {/* <a href={song.download_file} target="_blank" rel="noopener noreferrer">
                </a> */}
                 <button onClick={() => handleUpdate(song._id)}>Update</button>
              </td>
              <td>
               
                <button onClick={() => handleDelete(song._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudApp;
  