import React from 'react'
import PaginationButton from "../utils/PaginationButton";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FilterOfUserPointsForm from "./FilterOfUserPointsForm";
import TableOfPoints from "./TableOfPoints.jsx";
import TableOfAveragePoint from "./TableOfAveragePoint.jsx";
import EmptyCard from "@/components/utils/EmptyCard.jsx";

const TabOfPoints = ({className = '', points}) => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box className='mb-10' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Баллы" value="1" />
                        <Tab label="Средние баллы" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1" style={{padding: 0}}>
                    <FilterOfUserPointsForm className='mb-10' points={points} />
                    <TableOfPoints points={points} />
                    <EmptyCard manager={points} className='mt-5' />
                    <PaginationButton manager={points} />
                </TabPanel>
                <TabPanel value="2" style={{padding: 0}}>
                    <TableOfAveragePoint useCurrentUserId={true} />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default TabOfPoints