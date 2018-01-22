import {
  createSuccess,
  editSuccess,
  remove,
} from './actions';

describe('modal actions', () => {

  it('should create correctly', () => {

    expect(createSuccess()).toMatchSnapshot();

  });

  it('should edit correctly', () => {

    expect(editSuccess()).toMatchSnapshot();

  });

  it('should remove correctly', () => {

    expect(remove()).toMatchSnapshot();

  });

});
