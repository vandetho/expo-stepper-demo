import { Button, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Step3Screen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Step 1</Text>
            <View style={styles.buttonContainer}>
                <View style={{flex: 1}}>
                    <Button title="Back" onPress={() => router.back()}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});