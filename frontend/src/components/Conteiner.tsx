
import { Link } from 'react-router-dom'
import styles from './Conteiner.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios';




const Conteiner = () => {

    const [containers, setContainer] = useState([]);

    const getAllConteiner = async () => {

        try {
            const response = await axios.get(`http://localhost:8080/produtos`);

            const data = response.data;
            setContainer(data);
            console.log(response);
            
        } catch (error) {
            console.log(error);

    }
}

    useEffect(() => {
        getAllConteiner();
    }, []);



   
    return <div  className={`${styles.container}`} >
          <form className={`${styles.formContainer}`}>
          <input type="text"/>
          <input type="number"/>
          <input type="number" />
          <button>Calcular</button>
          </form>
   

            {containers.length == 0 ? (<p>Carregando...</p>) : (containers.map((container) => (<div key={container.id}>{container[0]}</div>)))}



          
    


        </div>
   

}

export default Conteiner;