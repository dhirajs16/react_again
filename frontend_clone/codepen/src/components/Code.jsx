import Editor from "./Editor";

const Code = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 p-3 bg-black">
        <Editor 
          editorName="HTML" 
          icon = "/"
          color="bg-red-600" 
          mode='xml' 
        />
        <Editor 
          editorName="CSS" 
          icon = "*"
          color="bg-blue-600" 
          mode='css' 

        />
        <Editor 
          editorName="JS" 
          icon = "( )"
          color="bg-yellow-400" 
          mode='js' 
        /> 
      </div>
    </>
  );
};

export default Code;
