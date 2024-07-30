import { useState } from "react";
import "./AddProductModal.css"
import axios from "axios";

interface AddProductModalProps {
    closeModal(): void

}
interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
}

const AddProductModal = ({ closeModal }: AddProductModalProps) => {

    const [formData, setFormData] = useState({
        quantidade: "",
        nome: "",
        peso: "",
        volume: ""
    })
    const Input = ({ label, type, name, value }: InputProps) => {

        return (
            <>
                <label>{label}</label>
                <input type={type} name={name} value={value} onChange={(e) => handleChange(e)} />
            </>
        )

    }
    const handleChange = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement;
        setFormData({ ...formData, [target.name]: target.value })

    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.post(`http://localhost:5077/addProduct`, {
            nome: formData.nome,
            quantidade: parseInt(formData.quantidade),
            peso: parseFloat(formData.peso),
            volume: parseFloat(formData.volume)

        });

        if(response != null) {
            console.log(response.data);
           return closeModal();
            

        }
    }

    return (

        <div className="modal-overflow">
            <div className="modal-body">
                <Input label="Nome" type="text" name="nome" value={formData.nome} />
                <Input label="Quantidade" type="number" name="quantidade" value={formData.quantidade} />
                <Input label="Peso" type="number" name="peso" value={formData.peso} />
                <Input label="Volume" type="number" name="volume" value={formData.volume} />
                <button onClick={() => handleSubmit}>Adicionar</button>
                <button onClick={closeModal}>Cancelar</button>


            </div>

        </div>
    )
}

export default AddProductModal;