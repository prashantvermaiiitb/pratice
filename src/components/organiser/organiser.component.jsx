import { useEffect, useState } from "react";

import { eventData } from "../../constants/data.js";
import Event from "../event/event.jsx";
import { OrganiserList } from "./organiser.styles.jsx";
import SearchBox from "../search/search.component.jsx";

const highlight = "12";

const Organiser = ({ eventToHightLight = highlight }) => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // hit the api from here
    const loadData = async () => {
      // return fetch('')
      setData(eventData);
      // console.log("🚀 ~ file: organiser.component.jsx:15 ~ loadData ~ eventData:", eventData)
    };
    loadData();
  }, []);

  return (
    <OrganiserList>
      {Array.isArray(data) && data.length > 0 && (
        <SearchBox value={searchInput} onValueChange={setSearchInput} />
      )}
      {data &&
        data.map((eventData, index) => {
          return (
            <li key={eventData.id}>
              <Event item={eventData} eventToHightLight={searchInput} />
            </li>
          );
        })}
    </OrganiserList>
  );
};

export default Organiser;
