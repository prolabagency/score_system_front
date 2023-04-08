import {DIRECTOR_ROLE, HEAD_ROLE, HEAD_ROLE_TITLE, STAFF_ROLE, STAFF_ROLE_TITLE} from "./constance";

export const getTitleOfRole = (role) => {
    switch (role) {
        case HEAD_ROLE:
            return HEAD_ROLE_TITLE
        case STAFF_ROLE:
            return STAFF_ROLE_TITLE
        default:
            return null
    }
}

export const mainUrlByRole = (user) => {
    switch (user?.role) {
        case STAFF_ROLE:
            return '/'
        case HEAD_ROLE:
            return '/head/'
        case DIRECTOR_ROLE:
            return '/director/'
        default:
            return '/404/'
    }
}