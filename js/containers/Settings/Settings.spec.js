import expect from 'expect.js'

import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { Provider } from 'react-redux'
import configureStore from '../../store/configureStore'
import Settings from './Settings'

import jsdom from 'jsdom'

import { Toggle } from 'material-ui'


function setup(initialState) {
  const store = configureStore(initialState)

  const dom = (
    <Provider store={store}>
      <Settings/>
    </Provider>)
  const app = TestUtils.renderIntoDocument(dom)
  return app
}

var element
describe('Settings Component', ()=>{
  jsdom()

  it('render correctly', ()=>{
    element = setup()
    TestUtils.findRenderedComponentWithType(element, Toggle)
  })

  describe('Notification Settings', ()=>{

    describe('when notifications is enabled', ()=>{

      it('render Toggle for enabling notifications',()=>{
        element = setup({ Settings: { notificationsEnabled: true, providers: [] } })
        let toggle = TestUtils.findRenderedComponentWithType(element, Toggle)
        expect(toggle.props.toggled).to.eql(true)
      })

    })

    describe('when notifications are disabled',()=>{

      it('render Toggle with false value',()=>{
        element = setup({ Settings: { notificationsEnabled: false, providers: [] } })
        let toggle = TestUtils.findRenderedComponentWithType(element, Toggle)
        expect(toggle.props.toggled).to.eql(false)
      })

    })

  })

})
