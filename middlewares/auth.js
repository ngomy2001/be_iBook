const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.access_token || req.headers.token;

    if (token) return res.status();
  } catch (error) {
    console.log('🚀 ~ file: auth.js ~ line 7 ~ isLoggedIn ~ error', error);
  }
};
