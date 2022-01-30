import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "./AccordionFilters.styles";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { filterContext } from "../Context/FilterContext";



interface ICategories{
  name:string,
  state:boolean,
}


const Categories:Array<ICategories>=[
{name:"Music",state:false},
{name:"Sport",state:false},
{name:"Arts",state:true},
{name:"Miscellaneous",state:true},
{name:"Film",state:true}]


export default function AccordionFilters() {
  const [expanded, setExpanded] = useState<string | false>("");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const filter=useContext(filterContext)
  
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>,position:number) => {
    const updatedCheckedState = filter.catCheck.map((item, index) =>
      index === position ? !item : item
    );
    if(e.target.checked){
      let array=filter.cat+","+e.target.name
      filter.setCat(array)
    }
    else{
      let array=filter.cat.replace(e.target.name,"")
      console.log(array)
      filter.setCat(array)
    }
    filter.setCatCheck(updatedCheckedState)
  }
    
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "300px" }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
          {Categories?.map((elem: ICategories,index:number) =>
             (
              <FormControlLabel key={elem.name} control={ <Checkbox
                key={index}
                value={filter.catCheck[index]}
                onChange={(e) => handleOnChange(e,index)}
                checked={filter.catCheck[index]}
                name={elem.name}
                />}value={elem.name} label={elem.name} />
            ) 
          )}
              </FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Genres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{/* Insert MapGenres */}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
