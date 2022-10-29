import { createContext, useContext, useReducer } from "react";
import { Purchase, UserData } from "../types/budget"

export enum UserDataAction {
  CREATE_USER = 'create_user',
  CREATE_PURCHASE = 'create_purchase'
}

type Action = { type: UserDataAction.CREATE_USER, payload: {} } |
{ type: UserDataAction.CREATE_PURCHASE, payload: Purchase }

export const userReducer = (state: UserData, action: Action) => {
  console.log({ state, action })
  switch (action.type) {
    // case (UserDataAction.USER_CREATE):
    //   throw new Error("Todo");
    //   return { ...action.payload, ...state }
    case UserDataAction.CREATE_PURCHASE:
      return {
        ...{
          purchases: [action.payload, ...state.purchases]
        }, ...state
      }
    default:
      throw new Error(`Action ${action.type} does not exist!`)
  }
}

const UserDataContext = createContext<UserData | null>(null);
const UserDataDispatchContext = createContext<React.Dispatch<Action> | null>(null);

export const useUserData = () => {
  return useContext(UserDataContext)
}

export const useUserDataDispatcher = () => {
  return useContext(UserDataDispatchContext)
}

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [userData, dispatch] = useReducer(userReducer, {} as unknown as UserData)

  return (<UserDataContext.Provider value={userData}>
    <UserDataDispatchContext.Provider value={dispatch}>
      {children}
    </UserDataDispatchContext.Provider>
  </UserDataContext.Provider>)
}