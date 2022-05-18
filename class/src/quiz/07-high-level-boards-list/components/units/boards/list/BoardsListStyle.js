import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 660px;
`

export const TableBox = styled.div`

`

/***** Title Start *****/
export const RowTitle = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: #f2f2f2;
    padding: 10px 0;
`

export const ThCheckBox = styled.div`
    width: 10%;
`

export const ThNumberBox = styled.div`
    width: 15%;
`

export const ThTitleBox = styled.div`
    width: 50%;
`

export const ThDateBox = styled.div`
    width: 25%;
`

export const ThTitle = styled.div`
    color: red;
    width: 100%;
`
/***** Title End *****/

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #623b7a;
    padding: 10px 0; 
    transition: 0.5s;
    :hover {
        transition: 0.5s;
        color: purple;
    }
`

export const TdCheckBox = styled.div`
    width: 10%;
    text-align: center;
`

export const TdNumberBox = styled.div`
    width: 15%;
    text-align: center;
`

export const TdTitleBox = styled.div`
    width: 50%;
`

export const TdDateBox = styled.div`
    width: 25%;
    text-align: center;
`

export const BottomBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #623b7a;
    width: 350px;
    margin-top: 10px;
`

export const DeleteButton = styled.button`
    transition: 0.5s;
    width: 100px;
    height: 40px;
    background-color: #623b7a;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    :hover {
        transition: 0.5s;
        background-color: #3e1747;
    }
`

