/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 1px ${({ theme }) => theme['purple']};
    }
    
    body{
        background-color: ${({ theme }) => theme['purple']};
        color: ${({ theme }) => theme['white']};
        --webkit-font-smoothing: antialiased;
    }
    
    ::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['gray-02']};
      border-radius: 999px;
    }

    body, input, textarea, button{
        font: 400 1rem 'Inter', sans-serif;
    }
    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      }
    }
`;
