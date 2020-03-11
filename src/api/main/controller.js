import status from 'http-status';

const getMain = async (req, res, next) => {
  try {
    return res.status(status.OK).json({
      info: [
        { name: 'name13', count: '13' },
        { name: 'name23', count: '23' }
      ]
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getMain
};
