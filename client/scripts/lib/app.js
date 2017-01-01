// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import {
    Meteor
} from 'meteor/meteor';

// Modules
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import InputDirective from '../directives/input.directive';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';

// App
Angular.module(App, [
    'angular-meteor',
    'angularMoment',
    'ionic'
]);

new Loader(App)
    .load(ChatCtrl)
    .load(ChatsCtrl)
    .load(CalendarFilter)
    .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
} else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}