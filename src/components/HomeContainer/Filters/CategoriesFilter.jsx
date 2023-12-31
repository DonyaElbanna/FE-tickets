import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredAttrsByCat } from "../../../rtk/features/attrSlice";
import { handlePage } from "../../../rtk/features/paginationSlice";

const CategoriesFilter = () => {
  const dispatch = useDispatch();

  const { categories, attractions } = useSelector((state) => state);
  const [slc, setSlc] = useState("");

  const handleCatFilter = (catID) => {
    dispatch(handlePage(1));
    setSlc(catID);
    dispatch(getFilteredAttrsByCat(catID));
  };

  return (
    <div>
      <FormLabel style={{ display: "none" }}>Cities</FormLabel>{" "}
      <RadioGroup
        sx={{
          maxHeight: 200,
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ffae73",
            outline: "1px solid #be853f",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#be853f",
          },
        }}
      >
        <div className="flex flex-wrap md:flex-col md:flex-nowrap">
          {categories.categories.map((cat) => (
            <FormControlLabel
              key={cat._id}
              value={cat._id}
              control={<Radio />}
              label={cat.type}
              checked={!attractions.catID ? false : slc == cat._id}
              onChange={() => handleCatFilter(cat._id)}
              sx={{
                ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked ": {
                  color: "#be853f",
                },
              }}
            />
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default CategoriesFilter;
