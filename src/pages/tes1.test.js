import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Tes1 from './tes1';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/** 
 * Factory funtion to create a ShallowWraper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @return {ShallowWrapper}
*/
const setup = (props) => {
    return shallow(<Tes1 {...props }/>)
}

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

test('renders container without error', () => {
    const wrapper = setup()  
    const appComponent = findByTestAttr(wrapper, 'container')
expect(appComponent.length).toBe(1)
});

test('renders button login', () => {
    const wrapper = setup() 
    const button = findByTestAttr(wrapper, 'btn-login')
expect(button.length).toBe(1)
})

test('renders button register', () => {
    const wrapper = setup() 
    const button = findByTestAttr(wrapper, 'btn-register')
expect(button.length).toBe(1)
})