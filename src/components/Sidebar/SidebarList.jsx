
import cl from "./Sidebar.module.css";

import ListItem from "./ListItem";
import { useSelector } from "react-redux";


function SidebarList() {
  const arrayTasks= useSelector(state=> state.sidebar.lists)
    
  return (
   
    <div> 
        {
          arrayTasks.map((l, index)=> <ListItem key={l.description+ l.idList+ index} className={cl.ListItem} 
            description={l.description}
            idList={l.idList}
            isSelect={l.isSelect}
          >
          </ListItem> )
        
        }
    </div>
  )
}
export default SidebarList;