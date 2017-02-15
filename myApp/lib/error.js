  try {
    handler(req, res);
  } catch(err) {
    var errorMsg
      = '\n'
      + 'Error ' + new Date().toISOString() + ' ' + req.url
      + '\n'
      + err.stack || err.message || 'unknow error'
      + '\n'
      ;

    console.error(errorMsg);
    Settings.showError
      ? res.end('<pre>' + errorMsg + '</pre>')
      : res.end();
  }