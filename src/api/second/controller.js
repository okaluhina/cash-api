import status from 'http-status';

let stringDB  = 'String from api'


const get = async (req, res, next) => {
  try {
    return res.status(status.OK).json({
      second: stringDB
    });
  } catch (error) {
    next(error);
  }
};


const post = async (req, res, next) => {
  try {
    const newStr = req.body.second;
    stringDB = newStr;

    return res.status(status.OK).json({
      second: stringDB
    });
  } catch (error) {
    next(error);
  }
};


export default {
  get,
  post
};
