import React from 'React'
import Playlists from './playlists.jsx';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter()});


const setup = () =>{
    return shallow(<Playlists/>);
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-testid="${val}"]`);
}
/*
Rendering tests
*/

describe('playlists Component', ()=>{
    describe('testing library playlists renders Correctly', ()=>{
        let component;
        beforeEach (()=>{
            component = setup();
        })
        it('renders playlists component', ()=>{
            const wrapper = findByTestAttr(component, "playlists");
            expect(wrapper.length).toBe(1);
        });
        it('renders title component', ()=>{
            const wrapper = findByTestAttr(component, "title");
            expect(wrapper.length).toBe(1);
            expect(wrapper.text()).toBe(' Followed Playlists ')
        });
        it('renders 1 card component', ()=>{
            component.setState({recieved:true , playlists:[1]})
            const wrapper = findByTestAttr(component, "cards");
            expect(wrapper.length).toBe(1);
        });
        it('renders 2 cards component', ()=>{
            component.setState({recieved:true , playlists:[1, 1]})
            const wrapper = findByTestAttr(component, "cards");
            expect(wrapper.length).toBe(2);
        });
        it('renders no cards component when recieved is false', ()=>{
            component.setState({playlists:[1, 1]})
            const wrapper = findByTestAttr(component, "cards");
            expect(wrapper.length).toBe(0);
        });
        it('does not render loading component when recieved is true', ()=>{
            component.setState({recieved:true});
            const wrapper = findByTestAttr(component, "loading"); 
            expect(wrapper.length).toBe(0);
        });
        it('renders loading component when recieved is false', ()=>{
            component.setState({recieved:false});
            const wrapper = findByTestAttr(component, "loading"); 
            expect(wrapper.length).toBe(1);
        });
        
    });
    
});