import { StyleSheet } from 'react-native'
import {
    colors,
    fonts
} from '../../variables';
import {
    fs,
    wp
} from '../../helpers';

const styles = StyleSheet.create({
    box:                    {
        flexDirection: 'row',
        alignItems:    'flex-start'
    },
    text:                   {
        color:      colors.white,
        fontFamily: fonts.sfProSemibold,
        fontSize:   fs(16.908),
    },
    percentSymbol:          {
        color:      colors.white,
        fontFamily: fonts.sfProRegular,
        fontSize:   fs(7.246),
        lineHeight: fs(16.908),
    },
    percentSymbolContainer: {
        marginLeft: wp('3.382%')
    }
})

export default styles
