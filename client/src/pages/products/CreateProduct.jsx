import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";

function CreateProduct() {
  const [create__product_steps, setCreate__product_steps] = useState([
    {
      title: "Select a title for your product",
      type: "text",
      value: "",
    },
    {
      title: "Select categories",
      type: "dropdown",
      categories: [
        {
          id: 1,
          category: "ELECTRONICS",
        },
        {
          id: 2,
          category: "FURNITURE",
        },
        {
          id: 3,
          category: "HOME APPLIANCES",
        },
        {
          id: 4,
          category: "SPORTING GOODS",
        },
        {
          id: 5,
          category: "OUTDOOR",
        },
        {
          id: 6,
          category: "TOYS",
        },
      ],
      value: "",
    },
    {
      title: "Select a description",
      type: "text",
      value: "",
    },
    {
      title: "Select price",
      type: "text",
      value: "",
      suboptions: [
        {
          title: "Rent",
          type: "text",
          value: "",
        },
        {
          title: "Rent",
          type: "dropdown",
          rents: [
            {
              id: 1,
              options: "HOURLY",
            },
            {
              id: 2,
              options: "PER DAY",
            },
          ],
          value: "",
        },
      ],
    },
  ]);

  const [i, seti] = useState(0);
  console.log(i);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (e) => {
    setCreate__product_steps((prev) => {
      const temp = [...prev];
      temp[i].value = e.target.value;

      return temp;
    });
  };
  console.log(create__product_steps);
  return (
    <div>
      <div>
        <h2>{create__product_steps[i].title}</h2>
        <br />

        {/* Input Box */}
        {create__product_steps[i].type === "text" && (
          <input
            value={create__product_steps[i].value}
            placeholder={create__product_steps[i].title}
            onChange={handleChange}
            type="text"
          />
        )}

        {/* Dropdown */}
        {create__product_steps[i].type === "dropdown" && (
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">
              {create__product_steps[i].title}
            </InputLabel>
            <Select
              value={create__product_steps[i].value}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {create__product_steps[i]?.categories.map((name) => (
                <MenuItem key={name.category} value={name.category}>
                  {name.category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {/* Sub options */}
        {create__product_steps[i].hasOwnProperty("suboptions") &&
          create__product_steps[i]?.suboptions.map((sub__option, j) => {
            return (
              <div>
                {j == 0 && (
                  <h4 style={{ marginTop: "1rem" }}>{sub__option.title}</h4>
                )}
                {/* Input Box */}
                {sub__option.type === "text" && (
                  <input
                    value={sub__option.value}
                    placeholder={sub__option.title}
                    onChange={(e) =>
                      setCreate__product_steps((prev) => {
                        const temp = [...prev];
                        temp[i].suboptions[j].value = e.target.value;

                        return temp;
                      })
                    }
                    type="text"
                  />
                )}

                {/* Dropdown */}
                {sub__option.type === "dropdown" && (
                  <FormControl sx={{ m: 2, width: 400 }}>
                    <InputLabel id="demo-multiple-name-label">
                      {sub__option.title}
                    </InputLabel>
                    <Select
                      value={sub__option.value}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setCreate__product_steps((prev) => {
                          const temp = [...prev];
                          console.log(temp[i].suboptions[j]);
                          temp[i].suboptions[j].value = e.target.value;

                          return temp;
                        });
                      }}
                      input={<OutlinedInput label="Rent" />}
                      MenuProps={MenuProps}
                    >
                      {sub__option?.rents.map((name) => (
                        <MenuItem key={name.options} value={name.options}>
                          {name.options}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </div>
            );
          })}

        {/* Bottom Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              seti((prev) => {
                if (i > 0) {
                  return prev - 1;
                } else {
                  return 0;
                }
              });
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              seti((prev) => {
                if (i < create__product_steps.length - 1) {
                  return prev + 1;
                } else {
                  return 3;
                }
              });
            }}
          >
            {i == 3 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
