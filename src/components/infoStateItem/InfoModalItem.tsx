import style from './styles.module.css';

const InfoModalItem = ({ props }: any) => {

    return (
        <div className={style.container}>
            <div className={style.dataHora}>
                <p className={style.data}>
                    {props.data}
                </p>
                <p className={style.hora}>
                    {props.hora}
                </p>
            </div >
            <div className={style.localStatus}>
                <p className={style.status}>
                    <span>
                        Status:
                    </span>
                    {props.status}
                </p>
                <p className={style.local}>
                    <span>
                        Local:
                    </span>
                    {props.local}
                </p>
            </div >
        </div >
    );


};

export default InfoModalItem;