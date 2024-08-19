import styles from './Pagination.module.css'


interface PaginationProps {
    totalProducts: number;
    productsPerPage: number;
    paginate(page: number): void
    page: number
} 

const Pagination = ({totalProducts, productsPerPage, page, paginate}: PaginationProps) => {

  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = Array.from({length: totalPages}, (_, index) => index + 1);



  return (

  <>
     <div className={`${styles.pagination}`}>
     <button onClick={() => paginate(page - 1)} > Anterior </button>

    {pageNumbers.map((number) => {
       return <div className={`${styles.pageItem}`}>
          <button key={number} onClick={() => paginate(number)}>{number}</button>
       </div>
       
     
    })}

    <button onClick={() => paginate(page + 1)} > Próxima </button>

     </div>
  </>
 );

}

export default Pagination;