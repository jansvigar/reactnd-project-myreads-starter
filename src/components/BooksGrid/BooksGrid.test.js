import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BooksGrid from './BooksGrid';

const props = {
  books: [{id:'id', shelf:'testShelf'}]
}

describe('<BooksGrid />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<BooksGrid {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
