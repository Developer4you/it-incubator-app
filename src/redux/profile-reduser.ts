export enum ACTIONS_TYPE {
  ADD_POST_TYPE = 'Profile/ADD_POST_TYPE',
}

export type PostType = {id: string, message: string, likesCount: number}

export type ProfilePageType = typeof initialState;

export type AddPostActionsType = { type:ACTIONS_TYPE.ADD_POST_TYPE, newPost:string}

export type ProfileActionsType = AddPostActionsType

const initialState = {
  name: 'Louis de Funès', profilePhotoSrc: "https://i.pinimg.com/originals/23/f3/94/23f394538e43fc1deeaa7a6dc11e09e8.jpg",
  posts: [
    {id:1, message:'I love IT-KAMASUTRA!!!', likesCount:5},
    {id:2, message:'It\'s an amazing world!', likesCount:10},
    {id:3, message:'Thank you for being able to see this!!!', likesCount:7},
    {id:4, message:'It\'s worth living for!', likesCount:5}
  ],
  newPostText: 'it-kamasutra.com',
}

const profileReducer = (state = initialState, action: ProfileActionsType):ProfilePageType => {
  switch (action.type) {
    case ACTIONS_TYPE.ADD_POST_TYPE: {
      let newPost = {
        id:state.posts.length+1,
        message: action.newPost,
        likesCount:0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    default: return state;
  }
}

export const addPostAC = (newPost:string) => ({type: ACTIONS_TYPE.ADD_POST_TYPE, newPost})

export default profileReducer;