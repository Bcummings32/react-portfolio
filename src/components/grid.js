import React from 'react'
import styled from 'styled-components'
// // import { HotModuleReplacementPlugin } from 'webpack'

const StyledCol = styled.div`
    margin: 20
    img {
    border: 
    border-radius: 20px
    cursor: PointerEvent;
    :hover {
        border-color: red
    }

    }
    `
    const GridComponent= (props) => {

        return (
    <StyledCol><div> 
        {props.children}
        </div></StyledCol>
        );
    
    }

    export default GridComponent;