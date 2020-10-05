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

* + * { 
    /* Using the lobotomized owl to ensure consistency vertical hierachy */
    margin-top: 1.5rem;
}
`


export const HeaderLayout = styled.header`
    padding-left: ${padding.normal};
    padding-right: ${padding.normal};
`

/* Export Layout */
export default Layout