import  ITaxKeys  from "../models/ITaxKeys";

interface IFormatCurrencySymbolProps {
    key: ITaxKeys;
}

const FormatCurrencySymbol = (props: IFormatCurrencySymbolProps) => {

    switch (props.key) {

        case "USDBRL":
            return "$";
        case "CNYBRL":
            return "¥"
        case "EURBRL":
            return "€"
        case "GBPBRL": 
            return "£"
        case "ARSBRL":
            return "$"
    }

}

export default FormatCurrencySymbol;