import React, { useState, useRef, useEffect } from 'react';
import { Layout } from 'antd';
import ReactEditor from 'for-editor'


// eslint-disable-next-line react/prop-types
const Editor = ({ onChange, value }) => {

  const [val, setVal] = useState('');
  const editorRef = useRef(null);

  const handleChange = (v) => {
    setVal(v);
    if (onChange && typeof onChange === 'function') {
      onChange(v);
    }
  }

  const uploadFile = (file) => {
    console.log(editorRef.current.$img2Url(file.name, 'file_url'));
    console.log(file)
  }

  useEffect(() => {
    setVal(value);
  }, [value])

  return (
    <Layout>
      <ReactEditor
        ref={editorRef}
        value={val}
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
