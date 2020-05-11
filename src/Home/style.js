import styled from  'styled-components';

export const Board = styled.div`

    width: 300px;
    height: 300px;
    border: solid 1px black;
    margin: 10px auto;

    display: grid;
    grid-template-rows: 100px 100px 100px;
    grid-template-columns: 100px 100px 100px;
`

export const BoardCell = styled.div`

    width: 100px;
    height: 100px;
    border: solid 1px black;
    margin: 0;
    text-align: center;


`

export const Mark = styled.p`

    font-size: 60px;
    font-weight: bold;
    margin: 20px;

`

export const DefaultInput = styled.input`

    border: none;
    box-shadow: 0px 0px 10px rgba(10,10,10,0.2);
    width: 300px;
    display: block; 
    padding: 10px;
    
    text-align:center;

`