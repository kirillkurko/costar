import { StyleSheet } from 'react-native';
import { fs, wp } from 'src/helpers';
import { fonts } from 'src/variables';

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.sfProMedium,
        fontSize: fs(3.382),
        color: 'white',
        marginBottom: 25,
        paddingLeft: 10,
    },
    container: {
        width: '100%',
        borderColor: 'transparent',
        borderBottomColor: '#c3c3c347',
        borderWidth: 1,
        marginBottom: 20,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 35,
    },
    subtitle: {
        color: '#B3A4EF',
        fontWeight: '600',
        marginBottom: 3,
    },
    numbers: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    number: {
        color: '#C0B0EE',
        fontFamily: fonts.sfProRegular,
        fontSize: wp('12%'),
        fontWeight: '800',
        marginRight: 3,
    },
    percent: {
        color: '#CDBCB4',
        fontFamily: fonts.sfProRegular,
        fontSize: fs(4.831),
        marginTop: 5,
        marginRight: 4,
    },
    contentLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '49%',
        paddingRight: 20,
        borderColor: 'transparent',
        borderRightColor: '#c3c3c347',
        borderWidth: 1,
    },
    contentRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '49%',
        paddingLeft: 20,
    },
    level: {
        backgroundColor: '#4B329C',
        width: 6,
        height: 70,
        borderRadius: 2.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    levelIndicator: {
        backgroundColor: '#8F77ED',
        borderRadius: 2.5,
        width: 6,
    },
});

export default styles;
