import { useState } from "react" ;
import Folder from "./Component/Folder" ;
import useInfiniteTree from "./Component/infiniteTree" ;
import "./index.css" ;
import explorer from "./InitialData/InitialFolderData" ;

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer) ;
  const { insertNode } = useInfiniteTree() ;

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder) ;
    setExplorerData(finalTree) ;
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  ) ;
} 

