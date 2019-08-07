const shortid = jest.genMockFromModule('shortid');

shortid.generate = () => {
  return '1';
};

export default shortid;
