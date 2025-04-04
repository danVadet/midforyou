import { ITaxKeys } from "../models/ITaxKeys";

export interface IFormatCurrencySymbolProps {
    key: ITaxKeys;
}

export const FormatCurrencyName = (props: IFormatCurrencySymbolProps) => {
    
    const { key } = props;

    switch (key) {
        case 'USDBRL':
          return 'Dólar';
        case 'EURBRL':
            return 'Euro';
        case 'CNYBRL':
          return 'Yarn';
        case 'GBPBRL':
          return 'Libra';
        case 'ARSBRL':
          return 'Peso';
        default:
          return 'R$';
      };
}