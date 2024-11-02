import CloseIcon from "@mui/icons-material/Close";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"

const Editor = (props) => {
  return (
    <>
      <div className="h-[45vh] rounded-md overflow-hidden">
        <div className="h-1/10 bg-slate-900 flex justify-between px-3 py-1 border-b border-gray-600">
          <div className="flex items-center gap-2">
            <span className={`h-[20px] w-[20px] flex justify-center items-center rounded-md border-1 ${props.color}`}>
              {props.icon}
            </span>
            <h3 className="text-gray-200">{props.editorName}</h3>
          </div>

          <div>
            <CloseIcon className="text-gray-200" />
          </div>
        </div>

        <CodeMirror
          value="<h1>I ♥ react-acodemirror2</h1>"
          options={{
            mode: props.mode,
            theme: "material",
            lineNumbers: true,
          }}
          onChange={(editor, data, value) => {}}
        />
      </div>
    </>
  );
};

export default Editor;
