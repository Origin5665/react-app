import { ADD_MESSAGE } from '../../constant';


/* @type */

type initialStateType = typeof initialState;

type messageType = {
    id: number,
    message: string,
    date?: string
};

type dialogsType = {
    id: number
    name: string
};

type addUserMassageType = {
    type: typeof ADD_MESSAGE
    payload: string
};

/* INITIAL STATE */

const initialState = {
    message: [{ id: 1, message: 'Привет! Нужно срочно поговорить!' }] as Array<messageType>,
    dialogs: [{ id: 1, name: 'Саша' }, { id: 2, name: 'Дима' }] as Array<dialogsType>
};

/* ACTION */
export const addUserMassage = (body: string): addUserMassageType => ({ type: ADD_MESSAGE, payload: body });

/* REDUCER */
const messager = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, { id: 5, message: action.payload }]
            };

        default:
            return state
    };
};

export default messager;