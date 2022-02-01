import { createContext, useState } from "react";


interface IFIlter {
    cat:string;
    setCat:Function;
    catCheck:Array<boolean>;
    setCatCheck:Function;
  sort: string;
  setSort: Function;
  page: number;
  setPage: Function;
  radius: number;
  setRadius: Function;
  size: number;
  setSize: Function;
  keyword:string;
  setKeyword:Function;
}

export const filterContext = createContext<IFIlter>({} as IFIlter);

const FilterProvider: React.FC<{}> = ({ children }) => {
  const [keyword,setKeyword]=useState("")
    const [cat,setCat]=useState("Music,Sport,Film,Arts,Miscellaneous")
    const [catCheck, setCatCheck] = useState<Array<boolean>>([true,true,true,true,true]);
  const [sort, setSort] = useState("date,asc");
  const [page, setPage] = useState<number>(0);
  const [radius, setRadius] = useState<number>(50);
  const [size, setSize] = useState<number>(50);

  return (
    <filterContext.Provider
      value={{
        keyword,
        setKeyword,
          cat,
          setCat,
          catCheck,
          setCatCheck,
        sort,
        setSort,
        page,
        setPage,
        radius,
        setRadius,
        size,
        setSize,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};
export default FilterProvider;
