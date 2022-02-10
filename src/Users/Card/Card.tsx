import styles from './Card.module.css';
import {SimpleButton} from '../../Button/Button';
import avatar from '../../avatar.jpeg';

type cardPropsType = {
    name: string
    imagePath: string
    followed:boolean
    callback:()=>void
}

const Card:React.FC <cardPropsType> = (props) => (
    <div className={styles.card}>
      <img src={props.imagePath?props.imagePath : avatar} alt="images" />
      {props.name}
      <SimpleButton text={props.followed? "Unfollow" : "Follow"}
                    callback={props.callback} />
    </div>
  );
  
  export default Card;
