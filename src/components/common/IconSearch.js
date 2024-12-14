import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const IconSearch = ({ onIconSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [icons, setIcons] = useState([]);

  const searchIcons = async () => {
    try {
      const response = await fetch(
        `https://api.iconify.design/search?query=${searchQuery}`
      );
      const data = await response.json();
      setIcons(data.icons || []);
    } catch (error) {
      console.error("Error fetching icons:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchIcons();
  };

  useEffect(() => {
    if(searchQuery !== "") {
        searchIcons()
    }
  }, [searchQuery])

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {icons.map((icon, index) => (
          <div
            key={index}
            onClick={() => onIconSelect(`https://iconify.design/icon/${icon}`)}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "5px",
            }}
          >
            <Icon icon={icon} width="32" height="32" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSearch;