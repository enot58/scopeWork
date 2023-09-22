import { authReducer } from "./auth";
import {
    nameWorkReducer,
    nameWorkSlice,
    resetSelectedData,
    setDataSelect,
} from "./nameWork";
import {
    editList,
    getSelectedTypeWork,
    nameWorkListReducer,
    nameWorkListSlice,
    pushData,
    resetForOneItem,
    setNameAndDescription,
    setSelectedTypeWork,
} from "./nameWorkList";
import { objectReducer, objectSlice } from "./objects";
import { typeWorkReducer, typeWorkSlice } from "./typeWork/typeWorkSlice";
import { unitReducer, unitSlice } from "./units";
import { GetAllUsers, usersReducer, usersSlice } from "./users";

export {
    GetAllUsers,
    authReducer,
    editList,
    getSelectedTypeWork,
    nameWorkListReducer,
    nameWorkListSlice,
    nameWorkReducer,
    nameWorkSlice,
    objectReducer,
    objectSlice,
    pushData,
    resetForOneItem,
    resetSelectedData,
    setDataSelect,
    setNameAndDescription,
    setSelectedTypeWork,
    typeWorkReducer,
    typeWorkSlice,
    unitReducer,
    unitSlice,
    usersReducer,
    usersSlice,
};
