import React from "react";
import {HEADS, MAIN, PROFILE, STAFFS} from "./constance";
import {DIRECTOR_ROLE, HEAD_ROLE, STAFF_ROLE} from "./constance";

export class SidebarItemsManager {

    constructor(activeBar) {
        this.activeBar = activeBar
        this.sidebarItems = {
            [STAFF_ROLE]: [
                {text: MAIN, icon: <i className='bx bx-home'></i>, url: '', active: this.activeBar === MAIN},
                {text: PROFILE, icon: <i className='bx bx-user-circle'></i>, url: 'profile/', active: this.activeBar === PROFILE},
            ],
            [HEAD_ROLE]: [
                {text: MAIN, icon: <i className='bx bx-home'></i>, url: '', active: this.activeBar === MAIN},
                {text: STAFFS, icon: <i className='bx bx-briefcase'></i>, url: 'groups/', active: this.activeBar === STAFFS},
                {text: PROFILE, icon: <i className='bx bx-user-circle'></i>, url: 'profile/', active: this.activeBar === PROFILE},
            ],
            [DIRECTOR_ROLE]: [
                {text: MAIN, icon: <i className='bx bx-home'></i>, url: '', active: this.activeBar === MAIN},
                {text: HEADS, icon: <i className='bx bx-group'></i>, url: 'heads/', active: this.activeBar === HEADS},
                {text: PROFILE, icon: <i className='bx bx-user-circle'></i>, url: 'profile/', active: this.activeBar === PROFILE},
            ],
        }
    }

    getItems (role) {
        return this.sidebarItems[role]
    }

}