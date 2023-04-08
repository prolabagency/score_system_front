import React from 'react';
import PaginationButton from "../utils/PaginationButton";
import {Loader} from "../ui/Loaders";
import UserListItem from "./UserListItem";
import UserBadgeCard from "./UserBadgeCard";
import EmptyCard from "@/components/utils/EmptyCard.jsx";

const UserList = ({users}) => {


    return (
    <>
        <UserBadgeCard className='mb-3' />
        { users.isFetching
            ?   <Loader />
            :   users.data.results?.map((item, idx) =>
                <UserListItem className='mb-3' user={item} key={idx} />
        )}
        <EmptyCard manager={users} />
        <PaginationButton manager={users} />
    </>
    );
};

export default UserList;