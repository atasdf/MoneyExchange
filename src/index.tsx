import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './modules/configureStore';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigator from './navigations/navigation';

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});

const Root: React.FC = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.root}>
                <Navigator />
            </SafeAreaView>
        </Provider>
    );
};

export default Root;
