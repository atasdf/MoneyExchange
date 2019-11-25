import React, { useEffect, useState } from 'react';
import { View, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetchData } from '../../modules/exchange/actions';
import {
    NavigationScreenProp,
    NavigationState,
    NavigationParams
} from 'react-navigation';
import DefaultInput from '../../components/Input';
import Selector from '../../components/Selector';
import Item from '../../components/Item';

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

const HomeScreen: React.FC<Props> = props => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('100');
    const [refreshing, setRefreshing] = React.useState(false);
    const currency = useSelector((state: any) => {
        return state.exchange.currency;
    });
    const onRefresh = () => {
        setRefreshing(true);
        dispatch(itemsFetchData(currency));
        setRefreshing(false);
    };
    useEffect(() => {
        dispatch(itemsFetchData(currency));
    }, [currency]);
    const selectExchangeValue = () => {
        props.navigation.navigate('SELECTION_STACK');
    };
    return (
        <View style={styles.root}>
            <DefaultInput value={value} onPress={setValue} />
            <Selector onTap={selectExchangeValue} unit={currency} />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Item value={value} />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
