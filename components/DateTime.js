import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

const WeatherIthem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherIthem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = () => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>1:14pm</Text>
                </View>
                <View>
                    <Text style={styles.subheading}>Wednesday, August 8</Text>
                </View>
                <View style={styles.weatherItemContainer}>
                    <WeatherIthem title="Humidity" value="79" unit="%"/>
                    <WeatherIthem title="Wind" value="7" unit="mph"/>
                    <WeatherIthem title="Sunrise" value="06:21" unit="am"/>
                    <WeatherIthem title="Sunset" value="07:29" unit="pm"/>
                </View>
            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.timezone}>Eastern Time Zone</Text>
                <Text style={styles.latlong}>40.6782N 73.9442W</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 15
    },
    heading: {
        fontSize: 45,
        color: 'white',
        fontWeight: '100',
    },
    subheading: {
        fontSize: 25,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
        textAlign:'right',
        marginTop: 20
    },
    timezone: {
        fontSize: '20',
        color: 'white'
    },
    latlong: {
        fontSize: 14,
        color: 'white',
        fontWeight: '700'
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    weatherItem: {
        flexDirection: 'right',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        color: '#eee',
        fontSize: 14,
        fontWeight: '100'
    }
})

export default DateTime