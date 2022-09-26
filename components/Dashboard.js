import { StyleSheet, Text, View } from "react-native";

const Dashboard = () => {
    alert('ok');
    return (
        <View style={styles.container}>
            <View style={styles.rect}>
                <Text>Dashboard</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rect: {
        flex: 1,
        backgroundColor: 'black'
    }
});

export default Dashboard;