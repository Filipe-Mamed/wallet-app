interface ScreenRoutesParamList{
  Profile: undefined
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // Rotas que precisam de autentificação
      Login: undefined;
      Register: undefined;
      RecoverPassword: undefined;

      // Telas
      Screen:{
        screen: keyof ScreenRoutesParamList
        params?: ScreenRoutesParamList[keyof ScreenRoutesParamList];
      }
    }
  }
}
