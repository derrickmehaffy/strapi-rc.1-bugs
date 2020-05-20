module.exports = async (ctx, next) => {
  console.log('TEST POLICY - Normal');

  return await next();
};
