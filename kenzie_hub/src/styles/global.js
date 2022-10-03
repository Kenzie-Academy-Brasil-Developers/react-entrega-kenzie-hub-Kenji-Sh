import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --color_primary: #ff577f;
        --color_primary_focus: #ff427f;
        --color_primary_negative: #59323f;

        --grey_0: #f8f9fa;
        --grey_1: #868e96;
        --grey_2: #343b41;
        --grey_3: #212529;
        --grey_4: #121214;

        --success: #3fe864;
        --negative: #e83f5b;
    }

    body {
        font-family: 'Inter', sans-serif;
        color: var(--grey_0);
        background: var(--grey_4);
    }

    button {
        cursor: pointer;
    }
`;
