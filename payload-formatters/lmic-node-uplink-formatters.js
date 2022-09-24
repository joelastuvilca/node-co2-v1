/*******************************************************************************
 *
 *  File:         lmic-node-uplink-formatters.js
 * 
 *  Function:     LMIC-node uplink payload formatter JavaScript function(s).
 * 
 *  Author:       Leonel Lopes Parente
 * 
 *  Description:  These function(s) are for use with The Things Network V3. 
 *                 
 ******************************************************************************/


 function decodeUplink(input) {
    var data = {};
    var warnings = [];
    var array_char = [];
    var info = [];
    if (input.fPort == 10) {
        //data.counter = (input.bytes[0] << 8) + input.bytes[1];
          info = input.bytes;

          for(var i=0; i<30;i++)
          {
            if(input.bytes[i] !==0 )
            {

                array_char[i] = String.fromCharCode(input.bytes[i]);
            }
          }
          data.length = info.length;
          data.message = array_char.join("");

    }
    else {
        warnings.push("Unsupported fPort");
    }
    return {
        data: data,
        warnings: warnings
    };
}

