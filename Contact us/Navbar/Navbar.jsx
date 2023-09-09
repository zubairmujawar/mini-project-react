import styles from './Navbar.module.css'

function Navbar() {
  // console.log(styles);

  return (
    <nav className={`${styles.Navbar} conatiner`}>
        <div className='logo'>
        <img src="/images/Frame.png" alt="img" />    
        </div>
        
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar;
