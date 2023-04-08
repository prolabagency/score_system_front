import React from 'react'
import { Loader } from '../ui/Loaders'
import PaginationButton from '../utils/PaginationButton'
import GroupListItem from './GroupListItem'
import EmptyCard from "@/components/utils/EmptyCard.jsx";

const GroupList = ({groups, className}) => {


    return ( 
        <div>
            {groups.isFetching
                ? <Loader />
                : groups.data.results?.map(item => 
                    <GroupListItem 
                        group={item}
                        className='mb-3'
                        key={item.id}
                    />)
            }
            <EmptyCard manager={groups} />
            <PaginationButton manager={groups} />
        </div>
    )
}

export default GroupList