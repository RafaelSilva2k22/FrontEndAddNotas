import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Global } from '@emotion/react';
import { editorStyles } from './style';

export default function EditorTiny({ onEditorChange }) {
    const editorRef = useRef(null);

    return (
        <>
            <Global styles={editorStyles} />
            <div className="custom-tinymce">
                <Editor
                    apiKey="vyruo5rhi4e6px9cc22wtr1k2umycf9uw2dht5kvug36s6qf"
                    onInit={(_evt, editor) => (editorRef.current = editor)}
                    initialValue=""
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                        toolbar: 'undo redo | blocks | bold | link image table blockquote | align | numlist bullist indent outdent | removeformat',
                    }}
                    onEditorChange={(content) => {
                        onEditorChange(content);
                    }}
                />
            </div>
        </>
    );
}
