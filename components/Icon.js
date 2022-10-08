import 'material-symbols';

const Icon = (props) => {
  return ( 
    <>
      <span className="material-symbols-rounded md-24">{props.icon_name}</span>
      <style jsx>{`
      .material-symbols-rounded {
        font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48
      }
      `}</style>
    </>
   );
}
 
export default Icon;