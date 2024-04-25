import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {Article} from './news';

type RootStackParamList = {
  Home: undefined;
  Info: {
    id: Article['id'];
  };
};

type ViewNavigationProps<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>;
type RouteNavigationProps<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;

export type {RootStackParamList, ViewNavigationProps, RouteNavigationProps};
