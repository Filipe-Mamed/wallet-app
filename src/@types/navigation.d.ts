interface ScreenRoutesParamList {
  Profile: undefined;
  AddCard: undefined;
  CardDetails: undefined;
  AllTransactions: undefined;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // Rotas que precisam de autentificação
      Login: undefined;
      Register: undefined;
      RecoverPassword: undefined;

      // Tabs
      Main: undefined;

      // Telas
      Screen: {
        screen: keyof ScreenRoutesParamList;
        params?: ScreenRoutesParamList[keyof ScreenRoutesParamList];
      };
    }
  }
}
