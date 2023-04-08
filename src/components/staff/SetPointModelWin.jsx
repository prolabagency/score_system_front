import React from 'react';
import ModalWin from "../ui/ModalWin";
import CreatePoint from './CreatePoint';
import UpdatePoint from './UpdatePoint';


export const UPDATE = 'update'
export const CREATE = 'create'

const SetPointModelWin = ({isOpen, setOpen, options}) => {

    return (
       <ModalWin isOpen={isOpen} setOpen={setOpen}>
            {options.mode === CREATE
                ? <CreatePoint options={options} setOpen={setOpen} />
                : <UpdatePoint options={options} setOpen={setOpen} />
            }
       </ModalWin>
    );
};

export default SetPointModelWin;