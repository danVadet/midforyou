import ITaxKeys from "../models/ITaxKeys";

interface IFormatCurrencyNameProps {
    key: ITaxKeys;
}


const FormatCurrencyName = (props: IFormatCurrencyNameProps) => {

    switch (props.key) {

        case "USDBRL":
            return "DÓLAR";
        case "CNYBRL":
            return "YUAN"
        case "EURBRL":
            return "EURO"
        case "GBPBRL": 
            return "LIBRA"
        case "ARSBRL":
            return "PESO"
    }
}

export default FormatCurrencyName;