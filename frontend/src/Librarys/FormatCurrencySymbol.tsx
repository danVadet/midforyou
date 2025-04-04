import { ITaxKeys } from "../models/ITaxKeys"


export interface IFormatCurrencySymbolProps {
    key: ITaxKeys;
}

export const FormatCurrencySymbol = (props: IFormatCurrencySymbolProps) => {
    
    const { key } = props;

    switch (key) {
        case 'USDBRL':
          return '$';
        case 'CNYBRL':
          return '¥';
        case 'EURBRL':
          return '€';
        case 'GBPBRL':
          return '£';
        case 'ARSBRL':
          return '$';
        default:
          return 'R$';
      };
}