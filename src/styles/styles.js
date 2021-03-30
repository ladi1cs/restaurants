import styled from 'styled-components';

const Colors = {
    Gray: '#c7cad1',
    Blue: '#6600ff',
    White: '#ffffff',
    Green: 'green'
}

export const BaseDiv = styled.div`
    background-color: ${Colors.White};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${Colors.White};
`
export const Row = styled(BaseDiv)`
    flex-direction: row;
    align-items: left;
    margin: 5px 20px;
`
export const Container = styled(BaseDiv)`
    font-family: Arial;
    min-height: 100vh;
`
export const TitleBar = styled(BaseDiv)`
    background-color: ${Colors.Gray};
    flex-direction: row;
    width: 100%;
    position: absolute;
    top:0;
    height: 50px;
`
export const ToolBar = styled(TitleBar)`
    background-color: ${Colors.White};
    top:50px;
    height: 50px;
`
export const TitleButton = styled.button`
    font-size: 16px;
    color: ${Colors.Blue};
    background-color: transparent;
    margin: 15px 10px;
    text-decoration-line: underline;
    text-decoration-style: solid;
    border-color: ${Colors.White};
`
export const Label = styled.label`
    font-size: ${props => (props.size || 18)}px;
    color: ${props => (props.color || 'black')};
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    margin: 15px ${props => (props.space || 5)}px;
    float: ${props => (props.float || '')};
`
export const TextBox = styled.input`
    font-size: 16px;
    margin: 15px 0;
`
export const Button = styled.button`
    font-size: 16px;
    background-color: ${Colors.Blue};
    color: ${Colors.White};
    margin: 15px 10px;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
    top: 100px;
`
export const GridItem = styled.div`
    padding: 10px;
`
export const Frame = styled.div`
    border: 2px solid ${Colors.Blue};
`
