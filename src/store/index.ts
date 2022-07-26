import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './Modal.store';
import packageReducer from './PackageList.store';

const store = configureStore({
    reducer: {
        modal: modalReducer,
        packageList: packageReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;