import { render } from '@testing-library/react';
import App from './App';
import React from "react";
import { createMemoryHistory } from 'history'
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Router } from 'react-router';
import Landing from '../src/components/Landing/Landing.jsx'
configure({ adapter: new Adapter() });


test('Checking History', () => {
  
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
})


describe("<Landing />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Landing />);
    });
    it("Renderiza un <div>", () => {
      expect(wrapper.find("div")).toHaveLength(2);
    });
        
    it('Renderiza un Link  con la propiedad "to" igual a "to="/home""', () => {
      expect(wrapper.find('Link[to="/home"]')).toHaveLength(1);
    });
  });
});

describe('Tests para el counter de la aplicación', () => {
	it('Deberia renderizarse sin Error', () => {
		const wrapper = shallow(<App />)
		expect(wrapper).toHaveLength(1);
	})
})
