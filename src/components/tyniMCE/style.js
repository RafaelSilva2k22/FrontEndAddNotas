import { css } from '@emotion/react';

export const editorStyles = css`
  .custom-tinymce {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  .custom-tinymce .tox {
    border-radius: 4px;
  }

  .custom-tinymce .tox .tox-toolbar__group {
    margin-right: 8px;

  }

  .custom-tinymce .tox .tox-editor-container {
    border: none;

  }

  .custom-tinymce .tox .tox-edit-area__iframe {
    border-radius: 0 0 4px 4px;
  }

  .custom-tinymce .tox .tox-statusbar {
    border-top: 1px solid rgba(0, 0, 0, 0.2);

  }

`;
