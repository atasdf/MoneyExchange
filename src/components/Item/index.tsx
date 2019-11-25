import React, { Fragment } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import * as data from '../SelectionItem/rates';
import { converter } from '../../utils/converter';

const styles = StyleSheet.create({
    root: {
        height: 87,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 18,
        paddingLeft: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#564F6F'
    },
    title: {
        fontSize: 31,
        color: '#D1D7E0',
        fontWeight: '700'
    },
    text: {
        fontSize: 16,
        color: '#D1D7E0',
        fontWeight: '500'
    },
    summ: {
        fontSize: 16,
        color: '#D1D7E0',
        fontWeight: '700',
        textAlign: 'right'
    },
    rightContainer: {
        width: '60%'
    },
    leftContainer: {
        width: '40%'
    }
});

interface Props {
    value: string;
}

const Item: React.FC<Props> = props => {
    const array = data.data;
    const list = useSelector((state: any) => {
        return state.exchange.items;
    });
    return (
        <ScrollView>
            {list.map((value: any, index: number) => {
                return (
                    <View style={styles.root} key={index}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.title}>{value.label}</Text>
                            {array.map((test: any, idx: number) => {
                                if (test.label === value.label) {
                                    return (
                                        <Text key={idx} style={styles.text}>
                                            {test.name}
                                        </Text>
                                    );
                                }
                            })}
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.summ}>
                                {(Number(props.value) * value.unit).toFixed(2)}
                            </Text>
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default Item;
