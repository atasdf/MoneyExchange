import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import * as data from './rates';

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
        width: '30%'
    },
    leftContainer: {
        width: '70%'
    }
});

interface Props {
    onTap: (base: string) => void;
}

const SelectionItem: React.FC<Props> = props => {
    const array = data.data;
    return (
        <ScrollView>
            {array.map((item: any, index: number) => {
                return (
                    <TouchableOpacity
                        style={styles.root}
                        onPress={() => props.onTap(item.label)}
                        key={index}
                    >
                        <View style={styles.leftContainer}>
                            <Text style={styles.title}>{item.label}</Text>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <Text style={styles.summ}>Tap to select</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default SelectionItem;
