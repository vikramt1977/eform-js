// @flow

import React from 'react';
import { PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';



export default class LeftPane extends React.Component {



    render() {
        const themeLink = document.getElementById("themeSheetLink");

        let onSelectRed = () => {
            themeLink.setAttribute("href", "http://www.w3schools.com/lib/w3-theme-red.css");
        }

        let onSelectBlue = () => {
            themeLink.setAttribute("href", "http://www.w3schools.com/lib/w3-theme-cyan.css");
        }

        let onSelectGreen = () => {
            themeLink.setAttribute("href", "http://www.w3schools.com/lib/w3-theme-light-green.css");
        }

        let onSelectYellow = () => {
            themeLink.setAttribute("href", "http://www.w3schools.com/lib/w3-theme-amber.css");
        }

        let onSelectDefault = () => {
            themeLink.setAttribute("href", "http://www.w3schools.com/lib/w3-theme-deep-orange.css");
        }

        return (
            <PageHeader className='w3-text-theme'>
                Welcome to Form Builder

                <div className='themeButtonWrapper'>
                <DropdownButton id='themeButton' className='w3-theme-d2' title='Themes' pullRight>
                    <MenuItem eventKey="1" onSelect={onSelectRed}>Red</MenuItem>
                    <MenuItem eventKey="2" onSelect={onSelectBlue}>Blue</MenuItem>
                    <MenuItem eventKey="3" onSelect={onSelectGreen}>Green</MenuItem>
                    <MenuItem eventKey="3" onSelect={onSelectYellow}>Yellow</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" onSelect={onSelectDefault}>Default</MenuItem>
                </DropdownButton>
                </div>
            </PageHeader>

        );
    }
}
