export enum TransactionStatus {
    Denied = 'denied',
};

export interface TransactionStatusParams {
    status: TransactionStatus;
}

export interface TransactionState {
    icon: string;
    title: string;
    message: string;
}

export const TransactionStatusErrors: { [key in TransactionStatus]: TransactionState } = {
    [TransactionStatus.Denied]: {
        icon: 'denied.svg',
        title: 'Transacción denegada',
        message: '¡Disculpas! Se ha producido un error, por favor vuelve a intentar.',
    },
}
