
interface IFormatCurrencyCodeProps {
    code: string;
}


const FormatCurrencyName = (props: IFormatCurrencyCodeProps) => {

    switch (props.code) {

        case "USD-BRL":
            return "DÓLAR";
        case "CNY-BRL":
            return "YUAN"
        case "EUR-BRL":
            return "EURO"
        case "GBP-BRL": 
            return "LIBRA"
        case "ARS-BRL":
            return "PESO"
    }
}

export default FormatCurrencyName;