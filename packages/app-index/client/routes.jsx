import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from './app.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<App.TestForm />)
    });
  }
});
