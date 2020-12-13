import React from 'react'
import { 
    SidebarContainer, 
    CloseIcon, 
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({isOpen, toogle}) => {
    
    return (
      
        <SidebarContainer isOpen={isOpen} onClick={toogle} >
            <Icon onClick={toogle} >
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='sobre' onClick={toogle}>Sobre o PEC-G</SidebarLink>
                    <SidebarLink to='formados' onClick={toogle}>Formados</SidebarLink>
                    <SidebarLink to='crono' onClick={toogle}>Cronologia</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;