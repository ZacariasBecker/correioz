import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalType {
    openAddModal: boolean;
    openInfoModal: boolean;
    addCodeInput: string;
    addDescriptionInput: string;
}

const Modal = createSlice({
    name: 'Modal',
    initialState: {
        openAddModal: false,
        openInfoModal: false,
        addCodeInput: '',
        addDescriptionInput: '',
    },

    reducers: {
        handleAddModal(state: ModalType) {
            state.openAddModal = !state.openAddModal;
        },
        handleInfoModal(state: ModalType) {
            state.openInfoModal = !state.openInfoModal;
        },
        setAddCodeInput(state : any, action: PayloadAction<string>) {
            state.addCodeInput = action.payload;
        },
        setAddDescriptionInput(state : any, action: PayloadAction<string>) {
            state.addDescriptionInput = action.payload;
        },
    }
});

export const {
    handleAddModal,
    handleInfoModal,
    setAddCodeInput,
    setAddDescriptionInput,
} = Modal.actions;

export default Modal.reducer;
