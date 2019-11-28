
const configureBranchIO = (store) => {
  if (typeof window !== 'undefined') {
    const branch = require('branch-sdk'); // eslint-disable-line
    const { user: { userDetails } } = store.getState();

    const handleNavigation = (data) => {
      const params = data.data_parsed;

      console.log('---branch.io params--', params); //eslint-disable-line
    };

    branch.init(process.env.BRANCH_IO_KEY, (err, params) => {
      if (params && !err && !userDetails) {
        handleNavigation(params);
      }
    });
  }
};

export default configureBranchIO;
