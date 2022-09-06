// @flow

import React, { useEffect, useCallback, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { useSafeArea } from 'react-native-safe-area-context';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import type { Dispatch as ReduxDispatch } from 'redux';

import I18n from 'src/shared/i18n/configuration';
import { img } from 'assets/img';
import BigButton from 'src/shared/components/BigButton';
import OnboardingQuestion from 'src/components/OnboardingQuestion';
import OnboardingHeader from 'src/components/OnboardingHeader';
import { setSelectedAnswer } from 'src/store/actions';
import { logEvent } from 'src/shared/analytics/FB';
import { AmplitudeLogEvent } from 'src/shared/analytics/Amplitude';
import questionsConfiguration from '../questionsConfiguration';
import styles from './styles';

type Props = {
    dispatch: ReduxDispatch,
    navigation: NavigationScreenProp<NavigationState>,
};

const QuestionsStep = ({ navigation, dispatch }: Props) => {
    useEffect(() => {
        componentDidMount();
    }, []);

    const insets = useSafeArea();
    const [selected, setSelected] = useState(0);

    let number = 0;

    if (navigation.state && navigation.state.params) {
        number = navigation.state.params.number;
    }

    const componentDidMount = useCallback(async () => {
        AmplitudeLogEvent(`screen_onboarding_${number + 1}_qestion_appeared`);
    }, []);

    const onPress = useCallback(() => {
        logEvent(questionsConfiguration[number].answers[selected].event);
        AmplitudeLogEvent(
            questionsConfiguration[number].answers[selected].event,
            {
                answer: `${questionsConfiguration[number].answers[selected].answer}`,
            },
        );

        if (number === 2) {
            dispatch(
                setSelectedAnswer(
                    questionsConfiguration[2].answers[selected].key,
                ),
            );
            navigation.navigate('ProgressStep');
        } else {
            navigation.push('QuestionsStep', { number: number + 1 });
        }
    }, [selected]);

    return (
        <ImageBackground
            source={img.onboarding.firstQuestionScreen}
            style={[
                styles.container,
                { paddingTop: insets.top, paddingBottom: insets.bottom },
            ]}
        >
            <OnboardingHeader number={3 + number} />
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.titleText}>
                        {I18n.t('ONBOARDING.QUESTION.TITLE')}
                    </Text>
                    <Text style={styles.questionTitle}>
                        {questionsConfiguration[number].question}
                    </Text>
                    <OnboardingQuestion
                        setSelected={setSelected}
                        selected={selected}
                        number={0}
                        answer={questionsConfiguration[number].answers[0].value}
                    />
                    <OnboardingQuestion
                        setSelected={setSelected}
                        selected={selected}
                        number={1}
                        answer={questionsConfiguration[number].answers[1].value}
                    />
                    <OnboardingQuestion
                        setSelected={setSelected}
                        selected={selected}
                        number={2}
                        answer={questionsConfiguration[number].answers[2].value}
                    />
                    <OnboardingQuestion
                        setSelected={setSelected}
                        selected={selected}
                        number={3}
                        answer={questionsConfiguration[number].answers[3].value}
                    />
                </View>
                <View>
                    <BigButton
                        style={styles.buttonWrapper}
                        onPress={onPress}
                        buttonText={I18n.t('ONBOARDING.BUTTONS.NEXT')}
                        withArrowIcon
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default connect()(React.memo<Props>(QuestionsStep));
