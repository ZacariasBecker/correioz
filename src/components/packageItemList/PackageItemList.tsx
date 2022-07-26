// mui
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Style
import styles from './styles.module.css';

// Redux
import { useDispatch } from 'react-redux';
import { deletePackage, setInfoPackage } from '../../store/PackageList.store';
import { handleInfoModal } from '../../store/Modal.store';

const PackageItemList = ({ props }: any) => {

    const dispatch = useDispatch();

    const handleInfoData = () => {
        dispatch(setInfoPackage(props));
        dispatch(handleInfoModal());
    };

    return (
        <div className={styles.container}>

            <div className={styles.content} >

                <div className={styles.textArea} onClick={() => handleInfoData()}>
                    <p className={styles.labelText}>{props.label}</p>
                    <p className={styles.idText}> {props.codigo}</p>
                </div>

                <div className={styles.buttonArea}>
                    <IconButton className={styles.deleteIcon}
                        size="large"
                        onClick={() => dispatch(deletePackage(props.codigo))}
                    >
                        <DeleteIcon className={styles.itemIcon} />
                    </IconButton>
                </div>

            </div>

        </div >
    );
};
export default PackageItemList;