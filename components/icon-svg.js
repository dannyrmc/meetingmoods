//SVG based icon commponent 

import IconSVG from '../public/icons/volume_up.svg'
import styles from '../styles/Home.module.css'

const Icon = () => {
  return ( 
    
    <div className='flex flex-row justify-center items-center w-[38px] h-[38px] bg-gray-900 rounded-3xl'>
      <IconSVG className='fill-gray-50 w-5 h-5 bg-cover bbg-no-repeat inline-block'/>
    </div>

   );
}
 
export default Icon;