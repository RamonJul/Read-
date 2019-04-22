module.exports = {
    isAuthenticated:(req, res, next) => {
    
      return req.isAuthenticated()?next():res.status(401).redirect('/')
     
      },
    
      AuthenticatedBoolean:(req)=>{
        return !! req.isAuthenticated()
      }
    
    }