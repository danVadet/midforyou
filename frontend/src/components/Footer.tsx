
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <footer>

              <div className={`${styles.info}`}>

              <div className={`${styles.address}`}>
<h3>  <svg viewBox="0 0 24 24" fill="none" width="23.5" height="23.5"  xmlns="http://www.w3.org/2000/svg"> 
<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="rgb(255, 255, 255)"  strokeWidth="2" />
</svg> Rua João Alves da Silva </h3>
<h3>CEP: 58900-000 -  Jardim Oásis</h3>
<h3>Cajazeiras - Paraíba</h3>
</div>
              <div className={`${styles.mediaSocial}`}>

<a href="https://www.facebook.com/mid4ubrasil" target="_blank">


    <div className={`${styles.facebookIcon}`}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
            <g fill="rgb(0, 175, 239)">
                <g transform="scale(8.53333,8.53333)">
                    <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h10v-9h-3v-3h3v-1.611c0,-3.05 1.486,-4.389 4.021,-4.389c1.214,0 1.856,0.09 2.16,0.131v2.869h-1.729c-1.076,0 -1.452,0.568 -1.452,1.718v1.282h3.154l-0.428,3h-2.726v9h5c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2z"></path>
                </g>
            </g>
        </svg>

    </div>
</a>
<a href="https://www.instagram.com/midforyoubr" target="_blank" >
    <div className={`${styles.instagramIcon}`}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
            <g fill="rgb(0, 175, 239)">
                <g transform="scale(5.12,5.12)">
                    <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                </g>
            </g>
        </svg>
    </div>

</a>
<a href="https://www.linkedin.com/company/mid4u" target="_blank"  >
    <div className={`${styles.linkedinIcon}`}>

        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
            <g fill="rgb(0, 175, 239)" >
                <g transform="scale(5.12,5.12)">
                    <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                </g>
            </g>
        </svg>

    </div>
</a>

</div>



              </div>
          
                 
                 <h4> © Criado por Mid For You - Import & Export | CNPJ: 10.501.613/0001-66 </h4>


        
        </footer>

    )
}

export default Footer;