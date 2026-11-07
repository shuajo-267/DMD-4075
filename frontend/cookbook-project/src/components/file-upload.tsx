import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction, ChangeEvent } from "react";

interface Props {
  file: File;
  setFile: Dispatch<SetStateAction<File[]>>;
}

function FileUpload({ file, setFile }: Props) {
  const [uploadedFiles, setUploadedFiles] = useState<Array<FileList>>([]);

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const newFile = event.currentTarget.files;
    console.log("File:", newFile);

    if (newFile) {
      setUploadedFiles([...uploadedFiles, newFile]);
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
      <div>
        {uploadedFiles.map((file) => {
          return (
            <div>
              <ul></ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FileUpload;
