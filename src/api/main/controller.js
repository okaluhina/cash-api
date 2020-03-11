import status from 'http-status';

const getMain = async (req, res, next) => {
  try {
    return res.status(status.OK).json({
      info: [
        { name: 'name15', count: '15' },
        { name: 'name25', count: '25' }
      ]
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getMain
};
