import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 110,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#2D283E',
        color: '#D1D7E0',
        fontSize: 68,
        fontWeight: '700',
        paddingLeft: 20,
        paddingRight: 20,
        margin: 0
    }
});

interface Props {
    value: string;
    onPress: (data: string) => void;
}

const DefaultInput: React.FC<Props> = props => {
    return (
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={value => props.onPress(value)}
            value={props.value}
        />
    );
};

export default DefaultInput;
