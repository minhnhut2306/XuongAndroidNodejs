import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,

    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 105,
    },
    textCart: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181725',
    },
    Line: {
        width: '100%', // Adjust width as needed
        height: 2,     // Adjust height as needed
        backgroundColor: '#E2E2E2',
    },
    imageItem: {

    },
    item: {
        marginTop: 30,
        marginHorizontal: 25,


    },
    nameItem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#181725',
        position: 'absolute',
        left: 138,

    },
    amoutItem: {
        fontSize: 18,
        fontWeight: '400',
        color: '#7C7C7C',
        position: 'absolute',
        left: 138,
        top: 25,
        lineHeight: 20,

    },
    deleteItem: {
        position: 'absolute',
        right: 0,
        width: 14,
        height: 14,
        resizeMode: 'contain',
    }
})