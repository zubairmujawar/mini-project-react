import styles from './Button.module.css'

export default function Button({isOutline, icon, text, ...rest}) {
    //Insted of writing {props.isOutline} =? we can use outlineBtn , isOutline 
    //use this:
    // const {isOutline, icon, text} = props  //But we can directly write in main function
  return (
    <button  {...rest} className={isOutline ? styles.outlineBtn: styles.primaryBtn}>
       {icon}
       {text}
    </button>

  )
}
