// backend/utils/responseFormatter.js

exports.formatResponse = (message, data = null) => ({
  success: true,
  message,
  data,
});
