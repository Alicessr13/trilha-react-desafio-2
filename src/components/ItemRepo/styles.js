import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    h3{
        font-size: 3.2rem;
        color: #fafafa;
    }

    p{
        font-size: 1.6rem;
        color: #fafafa60;
        margin: 0 0 2rem 0;
    }

    .remover{
        
        margin: 2rem 0 0 0;
    }

    a{
        color: #E68CC4;
        font-size: 1.5rem;

        &:hover {
            color: #E61501;
        }

        text-decoration: none;
    }

    hr{
        color: #fafafa60;
        margin: 2rem 0;
    }
`