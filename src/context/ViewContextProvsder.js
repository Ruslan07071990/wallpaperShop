import React,{useState} from "react";
import ViewContext from ".";



const ViwewContextProvider= ({children})=>{

const[view,setView] = useState('viweCards')

const toggleView =()=>{
    setView(prev => prev === 'viewList' ? 'viewCards':'viewList'  );
}
const value = {
    view,
    toggleView,
};

return (
    <ViewContext.Provider value={value}>
        {children}
    </ViewContext.Provider>
)

}





export default ViwewContextProvider;
