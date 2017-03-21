import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/main', {
  name: 'Main_Feed_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Main_Feed_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Adventure_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Adventure_Page' });
  },
});

FlowRouter.route('/Item', {
  name: 'Adventure_Item_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Adventure_Item_Page' });
  },
});

FlowRouter.route('/profile', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
