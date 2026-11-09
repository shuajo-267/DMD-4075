import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction, ChangeEvent } from "react";

interface Props {
  setFiles: Dispatch<SetStateAction<File[]>>;
}

function FileUpload({ setFiles }: Props) {
  //const [uploadedFiles, setUploadedFiles] = useState<Array<FileList>>([]);
  //const [mappedFiles, setMappedFiles] = useState<FileList[]>([])

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const newFile = event.currentTarget.files;
    const fileArray = [];
    if (newFile) {
      for (let i = 0; i < newFile.length; i++) {
        const isolatedFile = newFile[i];
        fileArray.push(isolatedFile);
        console.log("fileArray:", fileArray);
        console.log("Files in fileArray:", fileArray[i]);
      }

      setFiles(fileArray);
      //ISSUE: ONLY ONE FILE IS BEING DISPLAYED IN NEW-POST.TSX

      //setUploadedFiles([...uploadedFiles, newFile]);
      //setMappedFiles(Array.from(uploadedFiles));
    }
  };

  return (
    <div>
      <label className="form-header" htmlFor="file-upload">
        Image/Video Upload
      </label>
      <form name="file-upload">
        <input type="file" id="file-up-input" onChange={handleFiles} multiple />
      </form>
    </div>
  );
}

export default FileUpload;
