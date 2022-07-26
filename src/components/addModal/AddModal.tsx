// mui
import { Button, Modal, TextField } from "@mui/material";

// axios
import axios from "axios";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { handleAddModal, setAddCodeInput, setAddDescriptionInput } from "../../store/Modal.store";
import { addNewPackage } from '../../store/PackageList.store';

// Types
import PackageType from '../../types/packageType';

// Style
import styles from './styles.module.css';

const AddModal = () => {
    const dispatch = useDispatch();

    const codigo = useSelector((state: any) => state.modal.addCodeInput);
    const description = useSelector((state: any) => state.modal.addDescriptionInput);
    const modalState = useSelector((state: any) => state.modal.openAddModal);
    const packageItemList = useSelector((state: any) => state.packageList.itemList);

    const handleDescriptionInput = (e : string) =>{
        if(e.length <= 20){
            dispatch(setAddDescriptionInput(e))
        }
    }
    
    const handleCodeInput = (e : string) =>{
        if(e.length <= 13){
            dispatch(setAddCodeInput(e))
        }
    }

    const addItem = async () => {
        if (codigo && description) {
            let doAction = true;
            await packageItemList.forEach((element: PackageType) => {
                if (element.codigo === codigo) { doAction = false; }
            });

            if (doAction) {
                const apiFont = 'https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=';
                const baseURL = `${apiFont}${codigo}`;

                axios.get(baseURL).then((response) => {
                    response.data.label = description;
                    dispatch(addNewPackage(response.data));
                    handleModalReset();

                }).catch(e => {
                    if (e.request.status === 429) {
                        alert('Muitas requisições seguidas, tente novamente.');
                    }
                    else if (e.request.status === 0) {
                        alert('Encomenda não encontrada');
                    }
                    else {
                        alert('Axios Error in web console');
                        console.log(`Axios ERROR: ${e}`);
                    }
                });

            } else {
                alert('Código de rastreio já cadastrado');
            }
        }
    };

    const handleModalReset = () => {
        dispatch(handleAddModal());
        dispatch(setAddCodeInput(''));
        dispatch(setAddDescriptionInput(''));
    };

    return (
        <Modal
            open={modalState}
            onClose={() => handleModalReset()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={styles.modal}>
                <p className={styles.modalTitle}>Cadastrar nova encomenda</p>
                <form className={styles.modalForm}>
                    <TextField value={description}
                        // onChange={e => dispatch(setAddDescriptionInput(e.target.value))}
                        onChange={e => handleDescriptionInput(e.target.value)}
                        // label="Descrição"
                        label= "Descrição"
                        placeholder="Máximo de 20 caracteres"
                        variant="standard"
                        className={styles.modalTextfield}
                    />
                    <TextField
                        value={codigo}
                        onChange={e => handleCodeInput(e.target.value.toUpperCase())}
                        label="Código de rastreio"
                        placeholder="Máximo de 13 caracteres"
                        variant="standard"
                        className={styles.modalTextfield}
                        style={{ marginTop: '1.5rem' }}
                    />
                </form>
                <div className={styles.buttonsArea}>
                    <Button type='button'
                        style={{ fontSize: '1.3rem' }}
                        onClick={addItem}
                        variant='outlined'
                        color='primary'
                    >
                        Salvar
                    </Button>
                    <Button type='button'
                        style={{ fontSize: '1.3rem', margin: '1rem' }}
                        onClick={() => handleModalReset()}
                        color='error'
                    >
                        Cancelar
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default AddModal;