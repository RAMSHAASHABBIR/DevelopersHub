const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
  console.log('🔥 verifyToken middleware called');

  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT Verification Error:', err.message);
    res.status(401).json({ message: 'Invalid Token' });
  }
};


module.exports = verifyToken;
