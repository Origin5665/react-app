import React from 'react';
import UsersBundle from './Users.module.css';
import User from './User/User';
import userIMG from '../../images/user/user-photo.png';
const Users = ({ data, subscribe, unsubscribe, setUsers }) => {
    console.log(data)

    if (data.length === 0) setUsers(
        [
            {
                name: 'Александр Бакуменко',
                location: {
                    city: 'Ухта',
                    country: 'Россия'
                },
                status: 'Учу React',
                image: userIMG,
                add: false,
                ID: 1
            },
            {
                name: 'Максим Кац',
                location: {
                    city: 'Москва',
                    country: 'Россия'
                },
                status: 'Записываю новое видио',
                image: userIMG,
                add: true,
                ID: 2
            },
        ]
    )

    const users = data.map((user, i) => <User key={i} state={user} subscribe={subscribe} unsubscribe={unsubscribe} />)







    return <div className={UsersBundle.users__wrapper}>
        <ul className={UsersBundle.users__list}>
            {users}
        </ul>
        <button className={UsersBundle.users__button}>Другие</button>
    </div>
}

export default Users;