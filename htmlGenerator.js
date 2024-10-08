function htmlGen(info) {
  let html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <style type="text/css" rel="stylesheet" media="all">
    @media only screen and (max-width: 600px) {
      .email-body_inner,
    .email-footer {
        width: 100% !important;
      }
    }
    @media only screen and (max-width: 500px) {
      .button {
        width: 100% !important;
      }
    }
    </style>
    </head>
    <body dir="ltr" style="height: 100%; margin: 0; line-height: 1.4; background-color: #F2F4F6; color: #74787E; -webkit-text-size-adjust: none; fo
    nt-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%;">
      <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
     -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; margin: 0; padding: 0; background-color: #F2F4F6;" bgcolor="#F2F4F6">    
        <tr>
          <td align="center" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border
    -box;">
            <table class="email-content" width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-
    serif; -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; margin: 0; padding: 0;">
              <!-- Logo -->
              <tr>
                <td class="email-masthead" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-
    sizing: border-box; padding: 25px 0; text-align: center;" align="center">
                  <a class="email-masthead_name" href="https://yourmotivationwebsite.com/" target="_blank" style="font-family: Arial, 'Helvetica Ne
    ue', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box; font-size: 16px; font-weight: bold; color: #2F3133; text-de
    coration: none; text-shadow: 0 1px 0 white;">
    
    
                        <img src="https://yourmotivationwebsite.com/logo.png" class="email-logo" alt style="font-family: Arial, 'Helvetica Neue', H
    elvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box; max-height: 50px;">
    
    
                    </a>
                </td>
              </tr>
              <!-- Email Body -->
              <tr>
                <td class="email-body" width="100%" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-
    box; box-sizing: border-box; width: 100%; margin: 0; padding: 0; border-top: 1px solid #EDEFF2; border-bottom: 1px solid #EDEFF2; background-co
    lor: #FFF;" bgcolor="#FFF">
                  <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" style="font-family: Arial, 'Helvetica 
    Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box; width: 570px; margin: 0 auto; padding: 0;">
                    <!-- Body content -->
                    <tr>
                      <td class="content-cell" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; 
    box-sizing: border-box; padding: 35px;">
    
                          <h1 style="margin-top: 0; color: #2F3133; font-size: 19px; font-weight: bold; font-family: Arial, 'Helvetica Neue', Helve
    tica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box;">${info.intro}</h1>
    
    
                                                  <p style="margin-top: 0; color: #74787E; font-size: 16px; line-height: 1.5em; font-family: Arial,
     'Helvetica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box;">${info.second_line}</p>  
                        <!-- Dictionary -->
    
    
                        <!-- Table -->
                        <!-- Action -->
                        <!-- Support for Gmail Go-To Actions -->
    
                          <p style="margin-top: 0; color: #74787E; font-size: 16px; line-height: 1.5em; font-family: Arial, 'Helvetica Neue', Helve
    tica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box;">
                           ${info.outro}
                          </p>
    
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
    
              <tr>
                <td style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box;">  
                  <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" style="font-family: Arial, 'Helvetica Neue
    ', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box; width: 570px; margin: 0 auto; padding: 0; text-align: center;
    ">
                    <tr>
                      <td class="content-cell" style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; 
    box-sizing: border-box; padding: 35px;">
                        <p class="sub center" style="margin-top: 0; line-height: 1.5em; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif
    ; -webkit-box-sizing: border-box; box-sizing: border-box; color: #AEAEAE; font-size: 12px; text-align: center;">
                          &copy; 2023 <a href="" target="_blank" style="color: #3869D4; font-family: Arial, 'Helv
    etica Neue', Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box;">Nischal Shakya</a>. All rights reserved.        
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>`;
  return html;
}

module.exports = htmlGen;
