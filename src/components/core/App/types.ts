export interface CheckoutItems {
    name: string;
    quantity: number;
    unitPrice: {
        amount: number;
    };
}

export interface CheckoutInstallments {
    installment: number;
    total: number;
    financialRate: number;
    installmentPrice: number;
}

export interface CheckoutData {
    shop_name: string;
    attributes: {
        total_price: number;
        total_price_accessibility: string;
        currency: string;
        currency_symbol: string;
        items: CheckoutItems[];
        installments: CheckoutInstallments[];
    };
}