/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

AppRegistry.registerComponent(appName, () => App);

function notify() {
    PushNotification.configure({

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });

    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotificationSchedule({
      channelId: "Silent PUSH",
      title: "Drink Water!",
      message: "Drink 8 glass of water daily",
      bigText: 'Drinking 8 glass of water in a day makes you healthier...',
      date: new Date(Date.now() + 7200 * 1000)
    })
  }

  notify();
