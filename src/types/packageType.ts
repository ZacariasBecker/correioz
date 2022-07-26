export default interface PackageType {
    label: string;
    codigo: string;
    eventos?: {
        data?: string;
        hora?: string;
        local?: string;
        status?: string;
    }[];
}