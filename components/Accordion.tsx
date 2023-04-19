import { useState } from 'react';
import styles from './Accordion.module.css';

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
          </button>
          <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
            {children}
          </div>
        </div>
      );
}
  
    
