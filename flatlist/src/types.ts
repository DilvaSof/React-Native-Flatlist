import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export type AppStack = {
    Home: undefined;
    Detail: {name: string, color: string, id: string };
    Info: undefined;
}

export type UseNavigationAppStack = NativeStackNavigationProp<AppStack,'Home'>
