import 'react-quill/dist/quill.core.css';

import React from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const Quill = React.forwardRef(({ ...props }, ref) => {
  const modules = {
    toolbar: [
      ['bold', 'italic'],
      ['link', 'blockquote', 'code', 'image'],
      [
        {
          list: 'ordered',
        },
        {
          list: 'bullet',
        },
      ],
    ],
  };

  return <ReactQuill modules={modules} theme="snow" ref={ref} {...props} />;
});

export default Quill;
