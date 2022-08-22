// @flow

import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

import I18n from 'src/shared/i18n/configuration';
import { Card } from 'src/components/common';
import FeedbackPost from 'src/components/Psychomatrix/FeedbackPost';
import { img } from 'assets/img';
import styles from './styles';

type DataType = {
    result: number,
    description: string,
    strengthsDescription: string,
    weaknessesDescription: string,
    importantDescription: string,
    professionsArray: Array<string>,
};

type Props = {
    isActivePurchase: boolean,
    refresh(): Promise<void>,
    data: DataType,
    isFetching: boolean,
};

class Skills extends PureComponent<Props> {
    static navigationOptions = {
        header: null,
        headerTintColor: 'white',
    };

    renderItem = (title, icon, description, professions) => {
        const { isActivePurchase, refresh, isFetching } = this.props;
        return (
            <Card
                eventSource="personality_skills"
                title={title}
                titleIcon={icon}
                description={description}
                isActivePurchase={isActivePurchase}
                refresh={refresh}
                professions={professions}
                isFetching={isFetching}
            />
        );
    };

    render() {
        const { data } = this.props;
        return data ? (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {I18n.t('SKILLS.SKILLS_TITLE')}
                </Text>
                <View style={styles.resultContainer}>
                    <Text style={styles.result}>{data.result}</Text>
                </View>
                {this.renderItem(
                    I18n.t('SKILLS.DESCRIPTION'),
                    img.skills.skillsDescriptionIcon,
                    data.description,
                    data.professionsArray,
                )}
                {this.renderItem(
                    I18n.t('SKILLS.STRENGTH'),
                    img.skills.skillsStrengthIcon,
                    data.strengthsDescription,
                )}
                {this.renderItem(
                    I18n.t('SKILLS.WEAKNESS'),
                    img.skills.skillsWeaknessIcon,
                    data.weaknessesDescription,
                )}
                {this.renderItem(
                    I18n.t('SKILLS.IMPORTANT'),
                    img.skills.skillsImportantIcon,
                    data.importantDescription,
                )}
                {I18n.t('PREFERENCES.REQUEST_LANGUAGE') === 'en' && (
                    <FeedbackPost />
                )}
            </View>
        ) : null;
    }
}

export default Skills;
