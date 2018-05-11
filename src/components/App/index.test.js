import React from 'react';
import App from './index';
import Controls from '../Controls';
import Slots from '../Slots';
import Prize from '../Prize';
import { shallow } from 'enzyme';

describe('Controls', () => {
	it('Should create App with Controls', () => {
		const app = shallow(<App />);
		expect(app.find(Controls).length).toBe(1);
	});
})

describe('Controls', () => {
	it('Should create App with Slots', () => {
		const app = shallow(<App />);
		expect(app.find(Slots).length).toBe(1);
	});
})

describe('Prize', () => {
	it('Should create App with Prize', () => {
		const app = shallow(<App />);
	
		app.setState({
			isPrizeVisible: true
		});
		expect(app.find(Prize).length).toBe(1);
	});
	
	it('Should create App without Prize', () => {
		const app = shallow(<App />);
	
		app.setState({
			isPrizeVisible: false
		});
		expect(app.find(Prize).length).toBe(0);
	});
})

describe('componentWillUnmount', () => {
	it('Should run clearInterval before unmount', () => {
		const app = shallow(<App />);
		const spyClearInterval = jest.spyOn(window, 'clearInterval');
		
		app.instance().componentWillUnmount();
		expect(spyClearInterval).toBeCalled();
	});

	it('Should run clearTimeout before unmount', () => {
		const app = shallow(<App />);
		const spyClearTimeout = jest.spyOn(window, 'clearTimeout');
		
		app.instance().componentWillUnmount();
		expect(spyClearTimeout).toBeCalled();
	});
});
	
describe('StartClickHandler', () => {
	it('Should not run initTimer on startClickHandler if active process exist', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'initTimer');
		
		app.setState({
			intervalId: 123
		});
		app.instance().startClickHandler();
		expect(spy).not.toBeCalled();
	});
	
	it('Should run initTimer on startClickHandler if no active process', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'initTimer');
		
		app.setState({
			intervalId: null
		});
		app.instance().startClickHandler();
		expect(spy).toBeCalled();
	});
});

describe('Stop', () => {
	it('Should update state on stop', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'setState');

		app.instance().stop();
		expect(spy).toBeCalledWith({
			isPrizeVisible: true,
            intervalId: null
		});
	});

	it('Should run clearInterval on stop', () => {
		const app = shallow(<App />);
		const spyClearInterval = jest.spyOn(window, 'clearInterval');
		
		app.instance().componentWillUnmount();
		expect(spyClearInterval).toBeCalled();
	});
});

describe('ComponentDidMount', () => {
	it('Should update state on ComponentDidMount', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'setState');

		app.instance().componentDidMount();
		expect(spy).toBeCalled();
	});

	it('Should run initTimer on ComponentDidMount', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'initTimer');

		app.instance().componentDidMount();
		expect(spy).toBeCalled();
	});

	it('Should run setTimeout on ComponentDidMount', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(window, 'setTimeout');

		app.instance().componentDidMount();
		expect(spy).toBeCalled();
	});
});

describe('StopClickHandler', () => {
	it('Should run stop on stopClickHandler', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'stop');

		app.instance().stopClickHandler();
		expect(spy).toBeCalled();
	});
});

describe('InitTimer', () => {
	it('Should run clearTimeout on initTimer', () => {
		const app = shallow(<App />);
		const spyClearTimeout = jest.spyOn(window, 'clearTimeout');
		
		app.instance().initTimer();
		expect(spyClearTimeout).toBeCalled();
	});

	it('Should run setTimeout on initTimer', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'stop');

		jest.useFakeTimers();
		app.instance().initTimer();
		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
	});

	it('Should run setInterval on initTimer', () => {
		const app = shallow(<App />);

		jest.useFakeTimers();
		app.instance().initTimer();
		expect(setInterval).toHaveBeenCalled();
		expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 50);
	});

	it('Should run setState on initTimer', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'setState');

		app.instance().initTimer();
		expect(spy).toBeCalled();
	});
});

describe('SetNewCard', () => {
	it('Should run setState on setNewCard', () => {
		const app = shallow(<App />);
		const spy = jest.spyOn(App.prototype, 'setState');

		app.instance().setNewCard();
		expect(spy).toBeCalled();
	});
});