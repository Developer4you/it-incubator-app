type profilePageType = {
  name: string
  profilePhotoSrc: string
}
type dialogType = {
  id: number
  name: string
}
type messageType = {
  id: number
  message: string
}
type dialigsPageTypes = {
  dialogs:Array<dialogType>
  messages:Array<messageType>
}
type UserDataType = {
  name: string
  imagePath: string
}
export type UsersPageType = {
  users: Array<UserDataType>
}

type RootStateType = {
  profilePage: profilePageType
  dialogsPage: dialigsPageTypes
  usersPage: UsersPageType
}

export let state: RootStateType = {
    profilePage: {
      name: 'Louis de Funès', profilePhotoSrc: "https://i.pinimg.com/originals/23/f3/94/23f394538e43fc1deeaa7a6dc11e09e8.jpg"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yy'},
            {id: 5, message: 'Ho-ho'}
        ]
    },
    usersPage: {
        users: [
            {
              name: "Isaev",
              imagePath:
                "https://avatars.mds.yandex.net/get-zen_doc/40274/pub_5bb0e7837ff96e00aa383904_5bb0e7b4502b5600ad6d2321/scale_1200",
            },
            {
              name: "Chapaev",
              imagePath: "https://im0-tub-by.yandex.net/i?id=191422c10926a3e02d499d2e0da80098-l&n=13",
            },
            {
              name: "Ilia Muromec",
              imagePath:
                "https://avatars.mds.yandex.net/get-zen_doc/1708669/pub_5dd4255e8f162361ae09b854_5dd55affe5f20d1efbfec3a4/scale_1200",
            },
            {
              name: "Vini Pooh",
              imagePath:
                "https://i.pinimg.com/originals/bc/53/a4/bc53a40d9841e356d6c9d26f54467541.jpg",
            },
            {
              name: "Louis de Funès",
              imagePath: "https://i.pinimg.com/originals/23/f3/94/23f394538e43fc1deeaa7a6dc11e09e8.jpg",
            },
            {
              name: "Siutkin",
              imagePath:
                "https://i.pinimg.com/originals/60/55/ac/6055ac587b0b721146e457c40d0f126a.jpg",
            },
            {
              name: "Leontiev",
              imagePath:
                "https://s00.yaplakal.com/pics/pics_original/8/1/2/5032218.jpg",
            },
            {
              name: "Makavetski",
              imagePath:
                "https://i.pinimg.com/originals/b3/2c/63/b32c63c5c2d8ed4475b7243f387cb754.jpg",
            },
            {
              name: "Oleinikov",
              imagePath:
                "https://cdn.fishki.net/upload/post/2020/03/14/3256258/4b53e1649db2d31eeadf275c30681631.jpg",
            },
            {
              name: "Leslie William Nielsen",
              imagePath:
                "https://i.pinimg.com/474x/10/66/d9/1066d99d3c7bf392823dd689bf4c9887.jpg",
            },
          ]
    }
}

export default state;