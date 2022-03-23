import React, {useState} from 'react';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import portfolios from '../data/portfolios'
import Menu from '../components/Menu';
import Button from "../components/Button"


const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

const Portfoliopage = () => {
    const [menuItems, setMenuItems] = useState(portfolios);
    const [buttonsList, setButtonslist] = useState(allButtons);
    
    const filterFunc = (targetCategory) => {
        console.log("FILTER ACTIVATED")
        if (targetCategory === 'All') {
            setMenuItems(portfolios)
        } else {
            const filteredData = portfolios.filter(item => item.category === targetCategory)
            setMenuItems(filteredData)
        }
    }

    return (
        <MainLayout>
            <Title title={'Projects'} span={'Projects'} />
                <h4>Now showing: {menuItems.length} projects</h4>
            <InnerLayout>
                <Button filterFunc={filterFunc} buttonsList={buttonsList}/>
                <Menu menuItems={menuItems}/>
            </InnerLayout>
        </MainLayout>
    );
}

export default Portfoliopage;
