import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as data from '../SelectionItem/rates';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#564F6F',
        height: 87,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 18,
        paddingLeft: 18
    },
    title: {
        fontSize: 31,
        color: '#2D283E',
        fontWeight: '700'
    },
    text: {
        fontSize: 16,
        color: '#2D283E',
        fontWeight: '500'
    },
    tapText: {
        fontSize: 16,
        color: '#2D283E',
        fontWeight: '700',
        textAlign: 'right'
    },
    rightContainer: {
        width: '30%'
    },
    leftContainer: {
        width: '70%'
    }
});

interface Props {
    onTap: () => void;
    unit: number;
}

const Selector: React.FC<Props> = props => {
    const array = data.data;
    return (
        <TouchableOpacity style={styles.root} onPress={props.onTap}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>{props.unit}</Text>
                <Text style={styles.text}>
                    {array.map((test: any, idx: number) => {
                        if (test.label === props.unit) {
                            return (
                                <Text key={idx} style={styles.text}>
                                    {test.name}
                                </Text>
                            );
                        }
                    })}
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.tapText}>Tap to select</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Selector;
