import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import PackageType from '../types/packageType';

const PackageList = createSlice({
    name: 'Package List',
    initialState: {
        itemList: [
            {
                label: 'Carregador',
                codigo: 'AB123456789BR',
                eventos: [{
                    data: "12/05/2022",
                    hora: "10:26",
                    local: "Unidade de Distribuição/CAMPINA GRANDE/PB",
                    status: "Objeto entregue ao destinatário"
                }, {
                    data: "12/05/2022",
                    hora: "07:01",
                    local: "Unidade de Distribuição/CAMPINA GRANDE/PB",
                    status: "Objeto saiu para entrega ao destinatário"
                }, {
                    data: "08/05/2022",
                    hora: "14:03",
                    local: "Unidade de Tratamento/JABOATAO DOS GUARARAPES/PE",
                    status: "Objeto encaminhado"
                }, {
                    data: "04/05/2022",
                    hora: "00:29",
                    local: "Unidade de Logística Integrada/CURITIBA/PR",
                    status: "Objeto encaminhado"
                }, {
                    data: "03/05/2022",
                    hora: "23:58",
                    local: "Unidade Operacional/CURITIBA/PR",
                    status: "Fiscalização aduaneira finalizada"
                }, {
                    data: "02/05/2022",
                    hora: "07:52",
                    local: "Unidade de Logística Integrada/CURITIBA/PR",
                    status: "Objeto recebido pelos Correios do Brasil"
                }, {
                    data: "28/04/2022",
                    hora: "01:27",
                    local: "País//",
                    status: "Objeto postado"
                }],
            },
            {
                label: 'Monitor',
                codigo: 'CD123456789BR',
                eventos: [{
                    data: "12/05/2022",
                    hora: "10:26",
                    local: "Unidade de Distribuição/JOÃO PESSOA/PB",
                    status: "Objeto entregue ao destinatário"
                }, {
                    data: "12/05/2022",
                    hora: "07:01",
                    local: "Unidade de Distribuição/JOÃO PESSOA/PB",
                    status: "Objeto saiu para entrega ao destinatário"
                }, {
                    data: "08/05/2022",
                    hora: "14:03",
                    local: "Unidade de Tratamento/JABOATAO DOS GUARARAPES/PE",
                    status: "Objeto encaminhado"
                }, {
                    data: "04/05/2022",
                    hora: "00:29",
                    local: "Unidade de Logística Integrada/CURITIBA/PR",
                    status: "Objeto encaminhado"
                }, {
                    data: "28/04/2022",
                    hora: "01:27",
                    local: "Pelotas/RS",
                    status: "Objeto postado"
                }],     
            },
            {
                label: 'Mouse',
                codigo: 'EF123456789BR',
                eventos: [{
                    data: "03/05/2022",
                    hora: "23:58",
                    local: "Unidade Operacional/CURITIBA/PR",
                    status: "Fiscalização aduaneira finalizada"
                }, {
                    data: "02/05/2022",
                    hora: "07:52",
                    local: "Unidade de Logística Integrada/CURITIBA/PR",
                    status: "Objeto recebido pelos Correios do Brasil"
                }, {
                    data: "28/04/2022",
                    hora: "01:27",
                    local: "França",
                    status: "Objeto postado"
                }],     
            },
        ],
        infoItem: {
            label: null,
            codigo: null,
            eventos: [{
                data: undefined,
                hora: undefined,
                local: undefined,
                status: undefined
            },]
        },
    },
    reducers: {
        addNewPackage(state, action) {
            state.itemList = [...state.itemList, action.payload];
        },
        deletePackage(state, action: PayloadAction<string>) {
            state.itemList = state.itemList.filter((item: PackageType) => item.codigo !== action.payload);
        },
        setInfoPackage(state, action) {
            state.infoItem = action.payload;
        }

    }
});

export const { addNewPackage, deletePackage, setInfoPackage } = PackageList.actions;

export default PackageList.reducer;
