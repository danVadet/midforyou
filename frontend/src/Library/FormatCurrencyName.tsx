import ITaxKeys from "../models/ITaxKeys";

interface IFormatCurrencyNameProps {
    key: ITaxKeys;
}


const FormatCurrencyName = (props: IFormatCurrencyNameProps) => {

    switch (props.key) {

        case "USDBRL":
            return "Dólar";
        case "CNYBRL":
            return "Yuan"
        case "EURBRL":
            return "Euro"
        case "GBPBRL": 
            return "Libra"
        case "ARSBRL":
            return "Peso"
    }
}

export default FormatCurrencyName;