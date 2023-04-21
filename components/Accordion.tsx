import { useState } from 'react';
import styles from './Accordion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


interface Props {
    title: string;
    children: React.ReactNode;

}

export default function Accordion({ title, children }: Props) {
   
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };
    
      return (
        <div className={styles.accordion}>
          <button className={styles.accordionTitle} onClick={toggleAccordion}>
            {title}
            <span><FontAwesomeIcon icon={faPlus} /> </span> 
            </button>
          <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
            {children}
          </div>
        </div>
      );
}
  
    
