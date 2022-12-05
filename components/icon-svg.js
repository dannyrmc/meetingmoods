//SVG based icon commponent 

import IconSVG from '../public/icons/volume_up.svg'
import styles from '../styles/Home.module.css'

const Icon = () => {
  return ( 
    
    <div className={styles.icon}>
      <IconSVG fill='#ffffff' />
    </div>

   );
}
 
export default Icon;