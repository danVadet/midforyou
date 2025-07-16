import { ITaxKeys } from "../models/ITaxKeys";

export interface IFormatCurrencySymbolProps {
    key: ITaxKeys;
}

export const FormatCurrencyName = (props: IFormatCurrencySymbolProps) => {
    
    const { key } = props;

    switch (key) {
        case 'USDBRL':
          return 'DÓLAR';
        case 'EURBRL':
            return 'EURO';
        case 'CNYBRL':
          return 'YARN';
        case 'GBPBRL':
          return 'LIBRA';
        case 'ARSBRL':
          return 'PESO';
        default:
          return 'R$';
      };
}