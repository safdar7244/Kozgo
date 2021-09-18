import React from 'react'

function LogInPage() {
 return (
  <div>
   <section className="inner-page">
        <div className="login-main">
            <div className="container">
                <div className="form-box clearfix">
                    <h1>Login</h1>
                    <div className="clearfix"></div>
                    <form id="frmLogin" name="frmLogin" novalidate>
                    
                    <div className="clearfix"></div>
                    <div className="form-group form-label form-css-label">
                        <input type="text" name="email" id="email" autocomplete="off" placeholder="email" required />
                       
                    </div>
                    <div className="form-group form-label form-css-label">
                        <input type="password" name="password" id="password" autocomplete="off" required className="form-control" />

                    </div>           
                    <div className="clearfix"></div>
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <button type="submit" className="btn large-btn">Login</button>
                        </div>
                        </div>
                        <div className="col-sm-6">
                            <a href="https://www.kozgo.com/forgot-password" className="forgot-link">Forgot Password</a>
                        </div>
                        <div className="col-sm-12"><h4>Don’t have an account? <a href="https://www.kozgo.com/sign-up" className="signup-link"> Sign up Now</a></h4></div>
                    </div>   
                    
                    <div className="clearfix"></div>
                    
                    <span className="or-line">OR</span>
                    <div className="clearfix"></div>
                    <div className="form-group">
                <div className="row">
                    <div className="col-sm-6">
                        <a href="javascript:void(0)" className="btn fb-btn" id="fb_login"><i className="fa fa-facebook"></i>Login With Facebook</a>
                    </div>
                    <div className="col-sm-6">
                        <a href="javascript:void(0)" className="btn fb-btn google-btn" id="google_login"><i className="fa fa-google-plus"></i>Login With Google</a>
                    </div>
                </div>
                </div>                     
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
   
  </div>
 )
}


export default LogInPage
