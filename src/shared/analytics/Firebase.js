import firebase from 'react-native-firebase';

const navigateToSubscriptionScreen = (
    navigation,
    refresh,
    eventItem,
    isOnboarding = false,
) => {
    firebase.config().setDefaults({
        subscribeScreen: 'Subcribe2',
    });

    firebase
        .config()
        .fetch()
        .then(() => {
            return firebase.config().activateFetched();
        })
        .then(activated => {
            if (!activated) console.log('Fetched data not activated');
            return firebase.config().getValue('subscribeScreen');
        })
        .then(subscribeScreenFirebase => {
            const subscribeScreen = subscribeScreenFirebase.val();

            if (subscribeScreen) {
                if (isOnboarding) {
                    navigation.navigate(subscribeScreen, {
                        screen: 'Onboarding',
                    });
                } else {
                    navigation.navigate(subscribeScreen, {
                        onGoBack: () => refresh(),
                        atScreen: navigation.state.routeName,
                        atElement: eventItem,
                    });
                }
            }
        })
        .catch(console.error);
};

const getToSubscribeButton2 = async () => {
    try {
        firebase.config().fetch();
        const activated = firebase.config().activateFetched();

        if (!activated) {
            console.log('Fetched data not activated');
        }

        const value = await firebase.config().getValue('subscribeButton');
        const values = await firebase.config().getValues();

        const subscribeButton = value.val();
        if(subscribeButton) {
            return subscribeButton;
        }

        return subscribeButton;
    } catch {
        console.error();
    }
};

const getToSubscribeButton = () => {
    firebase.config().setDefaults({
        subscribeButton: 'circle',
    });

    firebase
        .config()
        .fetch()
        .then(() => {
            return firebase.config().activateFetched();
        })
        .then(activated => {
            if (!activated) console.log('Fetched data not activated');
            return firebase.config().getValue('subscribeButton');
        })
        .then(subscribeButtonFirebase => {
            const subscribeButton = subscribeButtonFirebase.val();

            return subscribeButton;
        })
        .catch(console.error);
};

export {
    navigateToSubscriptionScreen,
    getToSubscribeButton,
    getToSubscribeButton2,
};
