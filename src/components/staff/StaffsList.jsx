import React, {useEffect, useState} from 'react';
import SetPointModelWin from "./SetPointModelWin";
import { SetStaffContext } from '../../context';
import { Loader } from '../ui/Loaders';
import StaffItemCard from "./StaffItemCard";
import PaginationButton from "../utils/PaginationButton";
import StaffBadgeCard from "./StaffBadgeCard";
import EmptyCard from "@/components/utils/EmptyCard.jsx";

const StaffsList = ({staffs}) => {

    const [isOpen, setOpen] = useState(false)
    const [options, setOptions] = useState({staffId: null, value: 0})
    const [data, setData] = useState(staffs.data.results || [])

    useEffect(() => {setData(staffs.data.results)}, [staffs.data])

    return (
        <SetStaffContext.Provider value={{staffs: data, setStaff: setData}}>
            <StaffBadgeCard className='mb-3' />
            {staffs.isFetching
                ? <Loader />
                : data?.map((staff, idx) =>
                    <StaffItemCard
                        key={idx}
                        staff={staff}
                        setOptions={setOptions}
                        setOpenModalWin={setOpen}
                        className='mb-3'
                    />
                )}
            <EmptyCard manager={staffs} />
            <PaginationButton manager={staffs} />
            <SetPointModelWin setOpen={setOpen} isOpen={isOpen} options={options} />
        </SetStaffContext.Provider>
    );
};

export default StaffsList;