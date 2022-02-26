export enum ACTIONS_TYPE {
  ADD_POST_TYPE = 'Profile/ADD_POST_TYPE',
  SET_USER_PROFILE = 'Profile/SET_USER_PROFILE',
}

export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: {
    small: string
    large: string
  }
}

export type PostType = {id: string, message: string, likesCount: number}

export type ProfilePageType = typeof initialState;

export type AddPostActionsType = { type:ACTIONS_TYPE.ADD_POST_TYPE, newPost:string}
export type SetUserProfileActionsType = { type:ACTIONS_TYPE.SET_USER_PROFILE, profile:ProfileType}

export type ProfileActionsType = AddPostActionsType | SetUserProfileActionsType

const initialState:{profile:ProfileType} = {
  profile: {userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName:'',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    },
    photos: {
      small: '',
      large: '',
    },}
}

const profileReducer = (state = initialState, action: ProfileActionsType):ProfilePageType => {
  switch (action.type) {
    // case ACTIONS_TYPE.ADD_POST_TYPE: {
    //   let newPost = {
    //     id:state.posts.length+1,
    //     message: action.newPost,
    //     likesCount:0,
    //   }
    //   return {
    //     ...state,
    //     posts: [...state.posts, newPost],
    //     newPostText: ''
    //   };
    // }
    case ACTIONS_TYPE.SET_USER_PROFILE: {
        return {...state, profile: action.profile}
    }
    default: return state;
  }
}

export const addPostAC = (newPost:string) => ({type: ACTIONS_TYPE.ADD_POST_TYPE, newPost})
export const setUserProfile = ( profile:ProfileType ): SetUserProfileActionsType => ({type: ACTIONS_TYPE.SET_USER_PROFILE, profile})

export default profileReducer;