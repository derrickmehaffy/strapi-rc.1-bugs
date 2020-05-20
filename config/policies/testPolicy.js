module.exports = async (ctx, next) => {
  console.log('TEST POLICY - camelCase');

  return await next();
};
