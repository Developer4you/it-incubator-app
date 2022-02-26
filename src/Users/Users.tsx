import {NavLink} from 'react-router-dom';
import styles from './Users.module.css'
import {UserType} from '../redux/users-reducer';
import avatar from '../avatar.jpeg';

const SHOW_PAGES_COUNT = 11;

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

const Users = (props: PropsType) => {
    let {
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        users,
        follow,
        unfollow
    } = {...props}


    let getPages = () => {
        let pagesCount = Math.ceil(totalUsersCount / pageSize);
        let pages: Array<number> = [];

        if (currentPage < SHOW_PAGES_COUNT + 1) {
            for (let i = 1; i <= SHOW_PAGES_COUNT; i++) pages.push(i);
            return pages
        }
        if (currentPage + SHOW_PAGES_COUNT + 1 > pagesCount) {
            for (let i = pagesCount - SHOW_PAGES_COUNT; i <= pagesCount; i++) pages.push(i);
            return pages
        }

        for (let i = currentPage - 5; i <= currentPage + 5; i++) {
            pages.push(i);
        }

        return pages;
    }


    return <>
        <div className={styles.pagesList}>
            {getPages().map(p => {
                return <span className={currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{'-' + p + '-'}</span>
            })}
        </div>
        <div className={styles.users}>
            {users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : avatar}
                                     className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    </>
}

export default Users;