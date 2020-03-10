import status from 'http-status';

const getMain = async (req, res, next) => {
  try {
    return res.status(status.OK).json({
      info: [
        { name: 'name1', count: '1' },
        { name: 'name2', count: '2' }
      ]
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getMain
};
