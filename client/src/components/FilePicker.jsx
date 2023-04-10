import React from 'react'
import CustomButton from './CustomButton'


const FilePicker = ({file,setFile ,readFile}) => {
  return (
    <div className="filepicker-container">
      UPLOAD A PATTERN
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type='file'
          accept='image/*'
          onChange={
            (e)=>{
              setFile(e.target.files[0])
            }
          }
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "  No file" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {/* <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => {}}
          customStyles="text-xs"
        /> */}
        <CustomButton 
          type="filled"
          title="CUSTOM WALLS"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
        </div>
    </div>
  )
}

export default FilePicker