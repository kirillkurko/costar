import React, { PureComponent } from 'react';
import { View } from 'react-native';
import CompatibilityItem from './CompatibilityItem';

import styles from './styles';

class Compatibility extends PureComponent {
    static navigationOptions = {
        header: null,
        headerTintColor: 'white',
    };

    render() {
        const { data } = this.props;
        return (
            <>
                <View style={styles.container}>
                    <CompatibilityItem
                        key="purposefulness"
                        title="Purposefulness"
                        you={data[0].purposefulness}
                        partner={data[1].purposefulness}
                    />

                    <CompatibilityItem
                        key="family"
                        title="Family"
                        you={data[0].family}
                        partner={data[1].family}
                    />

                    <CompatibilityItem
                        key="stability"
                        title="Stability"
                        you={data[0].stability}
                        partner={data[1].stability}
                    />

                    <CompatibilityItem
                        key="self-esteem"
                        title="Self-esteem"
                        you={data[0]['self-esteem']}
                        partner={data[1]['self-esteem']}
                    />

                    <CompatibilityItem
                        key="efficiency"
                        title="Efficiency"
                        you={data[0].efficiency}
                        partner={data[1].efficiency}
                    />

                    <CompatibilityItem
                        key="talent"
                        title="Talent"
                        you={data[0].talent}
                        partner={data[1].talent}
                    />

                    <CompatibilityItem
                        key="spirituality"
                        title="Spirituality"
                        you={data[0].spirituality}
                        partner={data[1].spirituality}
                    />

                    <CompatibilityItem
                        key="temperament"
                        title="Temperament"
                        you={data[0].temperament}
                        partner={data[1].temperament}
                    />
                </View>
            </>
        );
    }
}

export default Compatibility;
