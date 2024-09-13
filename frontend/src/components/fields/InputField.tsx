
import styles from './InputField.module.css'


interface InputFieldProps {
    type: string
    name: string;
    value: string;
    placeholder: string;
    formErros: Object;

}

const InputField = (props: InputFieldProps) => {

    return (
      <div>
           <input type={props.type} name={props.name} className={`${props.formErros ? `${styles.invalid}` : ""}`}  value={props.value} placeholder={props.placeholder} onChange={(e) => props.onChange(e)} />
           {props.formErros && <p className={styles.formError}>{`${props.formErros}`}</p>}
      
      </div>

    );

}

export default  InputField