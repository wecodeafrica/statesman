/**
 * The layout wrappers ensure a visual consistency across all pages, both
 * on the X-Axis and Y-Axis
 */
import styled from 'styled-components'

const padding = {
    small: '1rem',
    normal: '2rem',
    large: '3rem'
}

const Layout = styled.div`
    padding-left: ${padding.normal};
    padding-right: ${padding.normal};
    display: block;
    width: 100%;
    overflow-x: hidden;

section + section { 
    margin-top: 1.5rem;
}
`


export const HeaderLayout = styled.header`
    padding-left: ${padding.normal};
    padding-right: ${padding.normal};
`


export const Line = styled.div`
    min-width: 100%;
    width: 100vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: -${padding.normal};
    height: 1px;
    background: #ddd;
`

/* Quick hack to create a Padding Wrapper around components */
export const Spacing = styled.div`
    padding-top: ${props => props.pt ? props.pt : '50px'};
    padding-bottom: ${props => props.pb ? props.pb : '50px'};

`

/* Export Layout */
export default Layout