import React, { useState, useRef } from 'react';
import { Layout } from 'antd';
import ReactEditor from 'for-editor'


// eslint-disable-next-line react/prop-types
const Editor = ({ onChange }) => {

  const [value, setValue] = useState('');
  const editorRef = useRef(null);

  const handleChange = (value) => {
    setValue(value);
    if (onChange && typeof onChange === 'function') {
      onChange(value);
    }
  }

  const uploadFile = (file) => {
    console.log(editorRef.current.$img2Url(file.name, 'file_url'));
    console.log(file)
  }

  return (
    <Layout>
      <ReactEditor
        ref={editorRef}
        value={value}
        onChange={handleChange}
        addImg={uploadFile}
      />
    </Layout>
  )
}

Editor.prototype = {
  onChange: 'function'
}

export default Editor;
