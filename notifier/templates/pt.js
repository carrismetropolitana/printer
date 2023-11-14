/* * */

module.exports.subject = () => 'O seu PDF está pronto!';

/* * */

module.exports.body = ({ _id, owner_name, filename, download_url }) => {
  return `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
            <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!--<![endif]-->
            <title></title>
        
            <style type="text/css">
            @media only screen and (min-width: 520px) {
                .u-row {
                width: 500px !important;
                }
                .u-row .u-col {
                vertical-align: top;
                }
                .u-row .u-col-33p33 {
                width: 166.65px !important;
                }
                .u-row .u-col-100 {
                width: 500px !important;
                }
            }
            
            @media (max-width: 520px) {
                .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
                }
                .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
                }
                .u-row {
                width: 100% !important;
                }
                .u-col {
                width: 100% !important;
                }
                .u-col>div {
                margin: 0 auto;
                }
                .no-stack .u-col {
                min-width: 0 !important;
                display: table-cell !important;
                }
                .no-stack .u-col-33p33 {
                width: 33.33% !important;
                }
            }
            
            body {
                margin: 0;
                padding: 0;
            }
            
            table,
            tr,
            td {
                vertical-align: top;
                border-collapse: collapse;
            }
            
            p {
                margin: 0;
            }
            
            .ie-container table,
            .mso-container table {
                table-layout: fixed;
            }
            
            * {
                line-height: inherit;
            }
            
            a[x-apple-data-detectors='true'] {
                color: inherit !important;
                text-decoration: none !important;
            }
            
            table,
            td {
                color: #000000;
            }
            
            #u_body a {
                color: #a0285a;
                text-decoration: underline;
            }
            
            @media (max-width: 480px) {
                #u_column_11 .v-col-padding {
                padding: 20px 15px !important;
                }
                #u_column_13 .v-col-padding {
                padding: 15px 10px !important;
                }
                #u_content_button_1 .v-padding {
                padding: 15px 10px !important;
                }
                #u_column_7 .v-col-padding {
                padding: 15px 10px !important;
                }
                #u_content_text_5 .v-container-padding-padding {
                padding: 10px 35px !important;
                }
                #u_content_text_6 .v-container-padding-padding {
                padding: 0px !important;
                }
                #u_column_8 .v-col-padding {
                padding: 0px !important;
                }
                #u_column_14 .v-col-padding {
                padding: 20px 15px !important;
                }
            }
            </style>
        
        
        
            <!--[if !mso]><!-->
            <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" type="text/css">
            <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" type="text/css">
            <!--<![endif]-->
        
        </head>
        
        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
            <!--[if IE]><div class="ie-container"><![endif]-->
            <!--[if mso]><div class="mso-container"><![endif]-->
            <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
            <tbody>
                <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
        
        
        
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
                        <!--[if (mso)|(IE)]><td align="center" width="500" class="v-col-padding" style="width: 500px;padding: 10px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div id="u_column_11" class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                            <div style="height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 10px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 100%; text-align: left; word-wrap: break-word;">
                                        <p style="line-height: 100%; text-align: center;"><span style="line-height: 12px; font-size: 12px; color: #f9f9f9;">O seu livro de horário está pronto!</span></p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                    </div>
                    </div>
        
        
        
        
        
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
                        <!--[if (mso)|(IE)]><td align="center" width="500" class="v-col-padding" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                            <div style="background-color: #ffffff;height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
        
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                            <a href="https://www.carrismetropolitana.pt" target="_blank">
                                                <img align="center" border="0" src="https://storage.carrismetropolitana.pt/static/assets/email/cm-email-header.png" alt="Logótipo da SPG" title="Logótipo da SPG" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 500px;"
                                                width="500" />
                                            </a>
                                            </td>
                                        </tr>
                                        </table>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                    </div>
                    </div>
        
        
        
        
        
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
                        <!--[if (mso)|(IE)]><td align="center" width="500" class="v-col-padding" style="background-color: #ffffff;width: 500px;padding: 5px 20px;border-top: 1px solid #e6e6e6;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 1px solid #e6e6e6;" valign="top"><![endif]-->
                        <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                            <div style="background-color: #ffffff;height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 5px 20px;border-top: 1px solid #e6e6e6;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 1px solid #e6e6e6;">
                                <!--<![endif]-->
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                        <p style="line-height: 140%; font-size: 14px;"><span style="font-family: Lato, sans-serif; font-size: 18px; line-height: 25.2px;"><span style="line-height: 25.2px; font-size: 18px;"><strong>O SEU LIVRO DE HORÁRIOS ESTÁ PRONTO</strong></span></span>
                                        </p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                    </div>
                    </div>
        
        
        
        
        
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
                        <!--[if (mso)|(IE)]><td align="center" width="500" class="v-col-padding" style="background-color: #ffffff;width: 500px;padding: 15px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div id="u_column_13" class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                            <div style="background-color: #ffffff;height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 15px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong>Olá${owner_name.length ? ` ${owner_name}` : ''}!</strong></span></p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                        <p style="line-height: 140%; font-size: 14px;"><span style="font-size: 18px; line-height: 25.2px;">O seu livro de horários personalizado já está pronto. Pode fazer o download clicando no botão em baixo. O livro ficará disponível para download nos próximos 7 dias.</span></p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <table id="u_content_button_1" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 25px;font-family:'Lato',sans-serif;" align="left">
        
                                        <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                        <div align="left">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${download_url}" style="height:52px; v-text-anchor:middle; width:440px;" arcsize="19%"  stroke="f" fillcolor="#ffdd01"><w:anchorlock/><center style="color:#000000;"><![endif]-->
                                        <a href="${download_url}" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #000000; background-color: #ffdd01; border-radius: 10px;-webkit-border-radius: 10px; -moz-border-radius: 10px; width:100%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
                                            <span class="v-padding" style="display:block;padding:15px 20px;line-height:120%;"><span style="font-size: 18px; line-height: 21.6px;"><strong><span style="line-height: 21.6px; font-size: 18px;">DOWNLOAD PDF</span></strong>
                                            </span>
                                            </span>
                                        </a>
                                        <!--[if mso]></center></v:roundrect><![endif]-->
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 0%; text-align: left; word-wrap: break-word;">
                                        <p style="font-size: 14px; line-height: 0%; text-align: center;"><span style="font-family: Lato, sans-serif; font-size: 10px; line-height: 0px; color: #969696;">${filename}</span></p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 15px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 0%; text-align: left; word-wrap: break-word;">
                                        <p style="font-size: 14px; line-height: 0%; text-align: center;"><span style="font-family: Lato, sans-serif; font-size: 10px; line-height: 0px; color: #969696;">${_id}</span></p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                    </div>
                    </div>
        
        
        
        
        
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
                        <!--[if (mso)|(IE)]><td align="center" width="500" class="v-col-padding" style="width: 500px;padding: 15px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div id="u_column_7" class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                            <div style="height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 15px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
        
                                <table id="u_content_text_5" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                        <p style="line-height: 140%; font-size: 14px;"><span style="font-family: Lato, sans-serif; font-size: 18px; line-height: 25.2px; color: #000000;"><span style="line-height: 25.2px; font-size: 18px;"><strong>ACOMPANHE-NOS NAS REDES SOCIAIS</strong></span></span>
                                        </p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <table id="u_content_text_6" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 50px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                        <p style="line-height: 140%; font-size: 14px;"><span style="font-size: 14px; line-height: 19.6px;">Fique a par das últimas notícias, alertas de serviço e outras novidades sobre a operação da Carris Metropolitana.</span></p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                    </div>
                    </div>
        
        
        
        
        
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row no-stack" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
                        <!--[if (mso)|(IE)]><td align="center" width="166" class="v-col-padding" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div id="u_column_8" class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
                            <div style="height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
        
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                            <a href="https://www.facebook.com/carrismetropolitana" target="_blank">
                                                <img align="center" border="0" src="https://storage.carrismetropolitana.pt/static/assets/email/cm-email-footer-facebook.png" alt="Facebook da SPG" title="Facebook da SPG" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 166.67px;"
                                                width="166.67" />
                                            </a>
                                            </td>
                                        </tr>
                                        </table>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]><td align="center" width="166" class="v-col-padding" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
                            <div style="height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
        
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                            <a href="https://www.instagram.com/carrismetropolitana/" target="_blank">
                                                <img align="center" border="0" src="https://storage.carrismetropolitana.pt/static/assets/email/cm-email-footer-instagram.png" alt="Instagram da SPG" title="Instagram da SPG" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 166.67px;"
                                                width="166.67" />
                                            </a>
                                            </td>
                                        </tr>
                                        </table>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]><td align="center" width="166" class="v-col-padding" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="u-col u-col-33p33" style="max-width: 320px;min-width: 166.67px;display: table-cell;vertical-align: top;">
                            <div style="height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
        
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                            <a href="https://www.whatsapp.com/channel/0029Va9z9d2JP2184daqbX0K" target="_blank">
                                                <img align="center" border="0" src="https://storage.carrismetropolitana.pt/static/assets/email/cm-email-footer-whatsapp.png" alt="LinkedIn da SPG" title="LinkedIn da SPG" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 166.67px;"
                                                width="166.67" />
                                            </a>
                                            </td>
                                        </tr>
                                        </table>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                    </div>
                    </div>
        
        
        
        
        
                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
        
                        <!--[if (mso)|(IE)]><td align="center" width="500" class="v-col-padding" style="width: 500px;padding: 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                        <div id="u_column_14" class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                            <div style="height: 100%;width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 20px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                <!--<![endif]-->
        
                                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody>
                                    <tr>
                                    <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
        
                                        <div style="font-size: 14px; line-height: 100%; text-align: left; word-wrap: break-word;">
                                        <p style="font-size: 14px; line-height: 100%;"><span style="font-size: 10px; line-height: 10px; color: #95a5a6;">Esta mensagem foi enviada automaticamente. Entre em contacto connosco se precisar de mais informações ou se acha que recebeu esta mensagem por engano. Visite o nosso site em <span style="font-size: 10px; line-height: 10px; color: #000000;"><span style="font-size: 10px; line-height: 10px;"><span style="font-size: 10px; line-height: 10px;"><a style="color: #000000; text-decoration: underline;" target="_blank" href="https://www.carrismetropolitana.pt" rel="noopener">https://www.carrismetropolitana.pt</a></span></span>
                                            </span>
                                            </span>
                                        </p>
                                        </div>
        
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
        
                                <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><![endif]-->
                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                        </div>
                    </div>
                    </div>
        
        
        
                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
                </tr>
            </tbody>
            </table>
            <!--[if mso]></div><![endif]-->
            <!--[if IE]></div><![endif]-->
        </body>
        
        </html>
    `;
};
