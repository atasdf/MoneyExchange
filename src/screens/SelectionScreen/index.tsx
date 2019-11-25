import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectCurrency } from '../../modules/exchange/actions';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams
} from 'react-navigation';
import SelectionItem from '../../components/SelectionItem';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#2D283E',
        flex: 1
    }
});

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
    navigation: Navigation;
}

const SelectionScreen: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const selectExchangeValue = (base: string) => {
        dispatch(selectCurrency(base));
        props.navigation.navigate('HOME_STACK');
    };
    return (
        <View style={styles.root}>
            <SelectionItem onTap={selectExchangeValue} />
        </View>
    );
};

export default SelectionScreen;
