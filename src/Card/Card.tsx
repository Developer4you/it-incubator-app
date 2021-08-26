import styles from './Card.module.css';

type cardPropsType = {
    name: string
    imagePath: string
}

const Card:React.FC <cardPropsType> = (props) => (
    <div className={styles.card}>
      <img src={props.imagePath} alt="images" />
      {props.name}
    </div>
  );
  
  export default Card;
