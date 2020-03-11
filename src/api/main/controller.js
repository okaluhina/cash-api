import status from 'http-status';

const getMain = async (req, res, next) => {
  try {
    return res.status(status.OK).json({
      info: [
        { name: 'name14', count: '14' },
        { name: 'name24', count: '24' }
      ]
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getMain
};
