const error_midlware = (err, req, res, next) => {

   const error = JSON.parse(err)
    
    const status = error.status || 500;
    const message = error.message || "message from backend side";
  return  res.status(status).json({message});

}

module.exports = error_midlware