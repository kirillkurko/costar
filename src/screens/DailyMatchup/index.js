// @flow

import React, {PureComponent} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';

import {connect} from 'react-redux';
import {ScrollIntoView, wrapScrollView} from 'react-native-scroll-into-view';
import SwitchSelector from 'react-native-switch-selector';

import {Header, Prognosis} from 'src/components';
import resources from 'src/shared/i18n/configuration';
import {getJoinedDate} from 'src/helpers';
import purchasesInteractions from 'src/shared/purchases/interactions';
import {img} from 'assets/img';

import {
  getFAQ,
  getFeedbackLinks,
  getPrognosisToday,
  getPrognosisTomorrow,
  getPrognosisYesterday,
} from 'src/store/actions';
import FixedButton from 'src/components/common/FixedButton';
import styles from './styles';
import SubscriptionBigButton from 'src/components/common/SubscriptionBigButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

type State = {
  userBirthDateParts: Array<string>,
  isActivePurchase: boolean,
  shouldShowFixedButton: boolean,
  section: string,
  purchaseButtonVisible: boolean,
};

type Props = {
  isFetching: boolean,
  prognosisTomorrow: Object,
  prognosisYesterday: Object,
  prognosisToday: Object,
};

const options = [
  {
    label: resources.t('DAILY_NUMEROLOGY.YESTERDAY'),
    value: 'yesterday',
  },
  {
    label: resources.t('DAILY_NUMEROLOGY.TODAY'),
    value: 'today',
  },
  {
    label: resources.t('DAILY_NUMEROLOGY.TOMORROW'),
    value: 'tomorrow',
  },
];

const CustomScrollView = wrapScrollView(ScrollView);

class DailyMatchup extends PureComponent<Props, State> {
  state = {
    userBirthDateParts: [],
    isActivePurchase: false,
    shouldShowFixedButton: false,
    section: 'today',
    purchaseButtonVisible: false,
    buttonBottom: 20,
    scrollY: 0,
  };

  scrollView: ScrollView;

  matrixRef = React.createRef<any>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  navigation = useNavigation();

  scrollIntoViewOptions = {
    align: 'top',
    insets: {
      top: 0,
    },
  };

  onDidFocus = async () => {
    const {dispatch} = this.props;

    let userBirthDate = await AsyncStorage.getItem('userBirthDateDaily');
    if (!userBirthDate) {
      userBirthDate = await AsyncStorage.getItem('userBirthDate');
      await AsyncStorage.setItem('userBirthDateDaily', userBirthDate);
    }
    const userBirthDateParts = userBirthDate.split(':');
    this.setState({
      userBirthDateParts,
    });

    AsyncStorage.getItem('purchaseButtonVisibility').then(value => {
      this.setState({
        purchaseButtonVisible: JSON.parse(value) !== false,
      });
    });

    await this.getPurchaseStatus();

    const date = getJoinedDate(userBirthDateParts);
    if (date) {
      dispatch(getPrognosisToday(date));
      dispatch(getPrognosisTomorrow(date));
      dispatch(getPrognosisYesterday(date));
    }
  };

  async componentDidMount() {
    const {dispatch} = this.props;

    dispatch(getFeedbackLinks());
    this.navigation.addListener('focus', this.onDidFocus);
  }

  componentWillUnmount() {
    this.navigation.removeListener('focus', this.onDidFocus);
  }

  onDateChange = async userBirthDate => {
    const {dispatch} = this.props;
    await AsyncStorage.setItem('userBirthDateDaily', userBirthDate);
    const userBirthDateParts = userBirthDate.split(':');
    this.setState({userBirthDateParts});
    const date = getJoinedDate(userBirthDateParts);
    if (date) {
      dispatch(getPrognosisToday(date));
      dispatch(getPrognosisTomorrow(date));
      dispatch(getPrognosisYesterday(date));
    }
    this.matrixRef.current.scrollIntoView();
  };

  getPurchaseStatus = async () => {
    try {
      await purchasesInteractions.getPurchaseStatus();

      const status = await AsyncStorage.getItem('isActivePurchase').then(
        value => JSON.parse(value),
      );
      this.setState({isActivePurchase: status});
    } catch (error) {
      console.log(error);
    }
  };

  onQuestionPress = () => {
    const {navigation, dispatch} = this.props;
    dispatch(getFAQ());
    navigation.navigate('Feedback');
  };

  onSwitch = value => {
    this.setState({section: value});
  };

  onScroll = ({nativeEvent}) => {
    if (nativeEvent.contentOffset.y >= 400) {
      this.setState({shouldShowFixedButton: true});
    } else {
      this.setState({shouldShowFixedButton: false});
    }
    const buttonY = this.state.buttonBottom;
    const prevY = this.state.scrollY;
    const y = buttonY + nativeEvent.contentOffset.y - prevY;
    if (y <= 20 && y >= -80) {
      this.setState({
        buttonBottom: y,
        scrollY: nativeEvent.contentOffset.y,
      });
    } else {
      this.setState({scrollY: nativeEvent.contentOffset.y});
    }
  };

  render() {
    const {
      userBirthDateParts,
      isActivePurchase,
      shouldShowFixedButton,
      section,
      purchaseButtonVisible,
      buttonBottom,
    } = this.state;
    const {prognosisToday, prognosisTomorrow, prognosisYesterday, isFetching} =
      this.props;

    let data = prognosisToday;

    if (section === 'tomorrow') {
      data = prognosisTomorrow;
    }

    if (section === 'yesterday') {
      data = prognosisYesterday;
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={img.gradient} style={styles.background}>
          <View style={styles.viewContainer}>
            {!purchaseButtonVisible && (
              <FixedButton
                shouldShowFixedButton={shouldShowFixedButton}
                onPress={() => this.matrixRef.current.scrollIntoView()}
              />
            )}
            {/* {!isActivePurchase && purchaseButtonVisible && (
                            <SubscriptionCircleButton
                                refresh={this.getPurchaseStatus}
                            />
                        )} */}
            {!isActivePurchase && purchaseButtonVisible && (
              <SubscriptionBigButton
                buttonBottom={buttonBottom}
                refresh={this.getPurchaseStatus}
              />
            )}
            <CustomScrollView
              ref={ref => {
                this.scrollView = ref;
              }}
              onScroll={this.onScroll}>
              <View style={styles.contentContainer}>
                <Header
                  title={resources.t('DAILY_NUMEROLOGY.SCREEN_TITLE')}
                  onQuestionPress={this.onQuestionPress}
                  userBirthDateParts={userBirthDateParts}
                  onDateChange={this.onDateChange}
                  typeDatePicker="single"
                />
                <ScrollIntoView
                  ref={this.matrixRef}
                  onMount={false}
                  scrollIntoViewOptions={this.scrollIntoViewOptions}>
                  <SwitchSelector
                    options={options}
                    style={styles.switchButtonsContainer}
                    height={32}
                    backgroundColor="transparent"
                    initial={1}
                    textStyle={styles.switchText}
                    selectedTextStyle={styles.switchSelectedText}
                    buttonColor="transparent"
                    onPress={this.onSwitch}
                    textContainerStyle={styles.switchTextContainerStyle}
                    selectedTextContainerStyle={
                      styles.selectedTextContainerStyle
                    }
                  />
                  <Prognosis
                    data={data}
                    isFetching={isFetching}
                    isActivePurchase={isActivePurchase}
                    refresh={this.getPurchaseStatus}
                  />
                </ScrollIntoView>
              </View>
            </CustomScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  singleCompatibility: state.singleCompatibility,
  prognosisToday: state.prognosisToday,
  prognosisTomorrow: state.prognosisTomorrow,
  prognosisYesterday: state.prognosisYesterday,
  isFetching: state.fetching,
  state,
});

export default connect(mapStateToProps, null)(DailyMatchup);
