// mui
import { Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

// Types
import PackageType from '../../types/packageType';

// UUID
import { v4 as uuidv4 } from 'uuid';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { handleInfoModal } from "../../store/Modal.store";

// Style
import styles from './styles.module.css';

// Components
import InfoModalItem from "../infoStateItem/InfoModalItem";

const InfoModalList = () => {
    const dispatch = useDispatch();

    const modalState = useSelector((state: any) => state.modal.openInfoModal);
    const infoItem = useSelector((state: any) => state.packageList.infoItem);

    return (
        <Modal
            open={modalState}
            onClose={() => dispatch(handleInfoModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={styles.modal}>
                <div className={styles.header}>
                <CloseIcon className={styles.closeIcon}
                onClick={()=>dispatch(handleInfoModal())}
                />
                    <p className={styles.label}>{infoItem.label}</p>
               
                    <p className={styles.codigo}>{infoItem.codigo}</p>
                </div>
                {infoItem.eventos?.map((item: PackageType) =>
                    <InfoModalItem
                        key={uuidv4()}
                        props={item}
                    />
                )}
            </div>
        </Modal>
    );
};

export default InfoModalList;