import React from 'react';
import {Loader} from "../ui/Loaders";
import HeadListItem from "./HeadListItem";
import PaginationButton from "../utils/PaginationButton";
import HeadBadgeCard from "./HeadBadgeCard";
import EmptyCard from "@/components/utils/EmptyCard.jsx";

const HeadList = ({users}) => {
    return (
        <>
            <HeadBadgeCard className='mb-3' />
            { users.isFetching
                ? <Loader />
                : users.data.results?.map((item, idx) => <HeadListItem user={item} key={idx} className='mb-3' />)
            }
            <EmptyCard manager={users} />
            <PaginationButton manager={users} />
        </>
    )
};

export default HeadList;