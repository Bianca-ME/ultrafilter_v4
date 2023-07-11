import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './react-sidenav.css';

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function SideNavBar() {
    // const navigate = useNavigate();
    const history = useHistory();

    return (
        <div>
            <SideNav className=' sidebar-style' style={{position: 'fixed'}}
                onSelect={selected => { 
                    console.log(selected);
                    // navigate('/'+selected)
                    history.push('/'+selected)
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                        <p className='menu-p'>menu</p>
                    {/* <NavItem>
                    </NavItem> */}
                    <NavItem eventKey=''>
                        <NavIcon></NavIcon>
                        <NavText>
                            HOME
                        </NavText>
                    </NavItem> 
                    <NavItem eventKey='GardnerDenver/compresoare'>
                        <NavIcon></NavIcon>
                        <NavText>
                            Compresoare
                        </NavText>
                    </NavItem> 
                </SideNav.Nav>
            </SideNav>
        </div>
    )
}
