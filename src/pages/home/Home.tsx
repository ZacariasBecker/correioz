
// Style
import styles from './styles.module.css';

// Router

// Types
import PackageType from '../../types/packageType';

// Components
import PackageItemList from '../../components/packageItemList/PackageItemList';
import AddModal from '../../components/addModal/AddModal';
import InfoModalList from '../../components/infoModalList/InfoModalList';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { handleAddModal } from '../../store/Modal.store';
import { RootState } from '../../store/index';

export const Home = () => {
    const dispatch = useDispatch();
    const DATA = useSelector((state: RootState) => state.packageList.itemList);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <AddModal />
                <InfoModalList />
                <button className={styles.addButton} onClick={() => dispatch(handleAddModal())}>
                    +
                </button>
                {DATA.map((item: PackageType) =>
                    <div className={styles.itemContainer} key={item.codigo}>
                        <PackageItemList
                            props={item}
                        />
                    </div>
                )}
            </div>
        </div >
    );
};

export default Home;