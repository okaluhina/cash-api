import status from 'http-status';

const getMain = async (req, res, next) => {
  try {
    return res.status(status.OK).json({
      info: [
        { name: 'name12', count: '12' },
        { name: 'name22', count: '22' }
      ]
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getMain
};
