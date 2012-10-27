/*
* http://github.com/AlYoungStudios/international-zipcode-utils
* Author: Al Young Studios/Tanner Young
* Version 1.0.0 (Oct 26, 2012)
* License: MIT License
*/
var usZipData = {},
  intlZipValidators = {
    US: function (zipCode,state) {
      var zipCodeValid = true;
      zipCode = Number(zipCode.substring(0,3));
      /*    Based on the "Validate US ZIP Code" by Rob Davis  (http://www.codingforums.com/showthread.php?t=5083)  */
      switch(state){
        case "AL":
          zipCodeValid = (zipCode >= 350 && zipCode <= 369);
          break;
        case "AK":
          zipCodeValid = (zipCode >= 995 && zipCode <= 999);
          break;
        case "AZ":
          zipCodeValid = (zipCode >= 850 && zipCode <= 865);
          break;
        case "AR":
          zipCodeValid = ((zipCode >= 716 && zipCode <= 729) || (zipCode == 755));
          break;
        case "AS":
          zipCodeValid = (zipCode == 967);
          break;
        case "CA":
          zipCodeValid = (zipCode >= 900 && zipCode <= 966);
          break;
        case "CO":
          zipCodeValid = (zipCode >= 800 && zipCode <= 816);
          break;
        case "CT":
          zipCodeValid = (zipCode >= 60 && zipCode <= 69);
          break;
        case "DC":
          zipCodeValid = (zipCode >= 200 && zipCode <= 205);
          break;
        case "DE":
          zipCodeValid = (zipCode >= 197 && zipCode <= 199);
          break;
        case "FL":
          zipCodeValid = ((zipCode >= 320 && zipCode <= 349) && (zipCode!=343 && zipCode!=345 && zipCode!=348));
          break;
        case "GA":
          zipCodeValid = (zipCode >= 300 && zipCode <= 319);
          break;
        case "GU":
          zipCodeValid = (zipCode == 969);
          break;
        case "HI":
          zipCodeValid = (zipCode >= 967 && zipCode <= 968);
          break;
        case "ID":
          zipCodeValid = (zipCode >= 832 && zipCode <= 838);
          break;
        case "IL":
          zipCodeValid = (zipCode >= 600 && zipCode <= 629);
          break;
        case "IN":
          zipCodeValid = (zipCode >= 460 && zipCode <= 479);
          break;
        case "IA":
          zipCodeValid = (zipCode >= 500 && zipCode <= 528);
          break;
        case "KS":
          zipCodeValid = (zipCode >= 660 && zipCode <= 679);
          break;
        case "KY":
          zipCodeValid = (zipCode >= 400 && zipCode <= 427);
          break;
        case "LA":
          zipCodeValid = (zipCode >= 700 && zipCode <= 714);
          break;
        case "ME":
          zipCodeValid = (zipCode >= 39 && zipCode <= 49);
          break;
        case "MH":
          zipCodeValid = (zipCode == 969);
          break;
        case "MD":
          zipCodeValid = (zipCode >= 206 && zipCode <= 219);
          break;
        case "MA":
          zipCodeValid = ((zipCode >= 10 && zipCode <= 27) || (zipCode == 55));
          break;
        case "MI":
          zipCodeValid = (zipCode >= 480 && zipCode <= 499);
          break;
        case "MN":
          zipCodeValid = (zipCode >= 550 && zipCode <= 567);
          break;
        case "MS":
          zipCodeValid = (zipCode >= 386 && zipCode <= 397);
          break;
        case "MO":
          zipCodeValid = (zipCode >= 630 && zipCode <= 658);
          break;
        case "MT":
          zipCodeValid = (zipCode >= 590 && zipCode <= 599);
          break;
        case "NE":
          zipCodeValid = (zipCode >= 680 && zipCode <= 693);
          break;
        case "NV":
          zipCodeValid = (zipCode >= 889 && zipCode <= 898);
          break;
        case "NH":
          zipCodeValid = (zipCode >= 30 && zipCode <= 38);
          break;
        case "NJ":
          zipCodeValid = (zipCode >= 70 && zipCode <= 89);
          break;
        case "NM":
          zipCodeValid = (zipCode >= 870 && zipCode <= 884);
          break;
        case "NY":
          zipCodeValid = ((zipCode >= 90 && zipCode <= 149) || (zipCode == 4) || (zipCode == 63));
          break;
        case "NC":
          zipCodeValid = (zipCode >= 269 && zipCode <= 289);
          break;
        case "ND":
          zipCodeValid = (zipCode >= 580 && zipCode <= 588);
          break;
        case "MP":
          zipCodeValid = (zipCode == 969);
          break;
        case "OH":
          zipCodeValid = (zipCode >= 430 && zipCode <= 458);
          break;
        case "OK":
          zipCodeValid = (zipCode >= 730 && zipCode <= 749);
          break;
        case "OR":
          zipCodeValid = (zipCode >= 970 && zipCode <= 979);
          break;
        case "PA":
          zipCodeValid = (zipCode >= 150 && zipCode <= 196);
          break;
        case "PR":
          zipCodeValid = (zipCode >= 6 && zipCode <= 9);
          break;
        case "RI":
          zipCodeValid = (zipCode >= 28 && zipCode <= 29);
          break;
        case "SC":
          zipCodeValid = (zipCode >= 290 && zipCode <= 299);
          break;
        case "SD":
          zipCodeValid = (zipCode >= 570 && zipCode <= 577);
          break;
        case "TN":
          zipCodeValid = (zipCode >= 370 && zipCode <= 385);
          break;
        case "TX":
          zipCodeValid = ((zipCode >= 750 && zipCode <= 799) || (zipCode == 885));
          break;
        case "UT":
          zipCodeValid = (zipCode >= 840 && zipCode <= 847);
          break;
        case "VT":
          zipCodeValid = (zipCode >= 50 && zipCode <= 59);
          break;
        case "VA":
          zipCodeValid = ((zipCode >= 220 && zipCode <= 246) || (zipCode == 201));
          break;
        case "VI":
          zipCodeValid = (zipCode == 8);
          break;
        case "WA":
          zipCodeValid = (zipCode >= 980 && zipCode <= 994);
          break;
        case "WI":
          zipCodeValid = (zipCode >= 530 && zipCode <= 549);
          break;
        case "WV":
          zipCodeValid = (zipCode >= 247 && zipCode <= 268);
          break;
        case "WY":
          zipCodeValid = (zipCode >= 820 && zipCode <= 831);
          break;
        case "AE":
          zipCodeValid = (zipCode >= 90 && zipCode <= 98);
          break;
        case "AA":
          zipCodeValid = (zipCode == 340);
          break;
        case "AP":
          zipCodeValid = (zipCode >= 962 && zipCode <= 966);
          break;
      }
      return zipCodeValid;
    },
    CA: function(zipCode,province){
      var zipCodeValid = true;
      tempZipCode = zipCode.substring(0,1);
      switch(province){
        case "NL":
          zipCodeValid = (tempZipCode=="A");
          break;
        case "NS":
          zipCodeValid = (tempZipCode=="B");
          break;
        case "PE":
          zipCodeValid = (tempZipCode=="C");
          break;
        case "NB":
          zipCodeValid = (tempZipCode=="E");
          break;
        case "QC":
          zipCodeValid = (tempZipCode=="G" || tempZipCode=="H" || tempZipCode=="J");
          break;
        case "ON":
          zipCodeValid = (tempZipCode=="K" || tempZipCode=="L" || tempZipCode=="M" || tempZipCode=="N");
          break;
        case "MB":
          zipCodeValid = (tempZipCode=="R");
          break;
        case "SK":
          zipCodeValid = (tempZipCode=="S");
          break;
        case "AB":
          zipCodeValid = (tempZipCode=="T");
          break;
        case "BC":
          zipCodeValid = (tempZipCode=="V");
          break;
        case "NU":
        case "NT":
          zipCodeValid = (tempZipCode=="X");
          break;
        case "YT":
          zipCodeValid = (tempZipCode=="Y");
          break;
      }
      //Drop Testing addresses, US-bound mail, and Santa Claus mail
      //Later check against all unassigned postal codes - this list is incomplete, but better than nothing
      if (/^(A[34679][A-Z])|(B[78][A-Z])|(C[2-9][A-Z])|(E0[A-Z])|(H6[A-Z])|(K[35][A-Z])|(M0[A-Z])|(S[158][A-Z])|(X[2-9][A-Z])|(Y[2-9][A-Z])|(Y0[C-Z])|(Y1[B-Z])|(H0H)/.test(zipCode)===true) {
        zipCodeValid = false;
      }
      return zipCodeValid;
    }
  },
  extractDataFromZip = {
    US: function(zipCode,jsonFolder,callback,objectList) {
      if (zipCode.length > 4) {
        var zipLookup = [
          zipCode.substring(0,1),
          zipCode.substring(1,2),
          zipCode.substring(2,3)
        ];
        if (jQuery) {
          jQuery.getJSON(jsonFolder+zipLookup[0]+'/'+zipLookup[1]+'/'+zipLookup[2]+'.json',function(data){
            for (var zip in data) {
              usZipData[zip] = data[zip];
            }
            callback(usZipData);
          });
        }
        //Need to write a fallback for non-jQuery cases
      }
    },
    CA: function(zipCode) {
      if (zipCode==undefined)
        zipCode = "";
      var province = false,
          city = false;
      if (zipCode.length > 0) {
        switch(zipCode.substring(0,1)){
          case "A":
            province = "NL";
            break;
          case "B":
            province = "NS";
            break;
          case "C":
            province = "PE";
            break;
          case "E":
            province = "NB";
            break;
          case "G":
          case "H":
          case "J":
            province = "QC";
            break;
          case "K":
          case "L":
          case "M":
          case "N":
            province = "ON";
            break;
          case "R":
            province = "MB";
            break;
          case "S":
            province = "SK";
            break;
          case "T":
            province = "AB";
            break;
          case "V":
            province = "BC";
            break;
          case "X":
            var tempZip = zipCode.substring(0,3);
            if (tempZip=="X0E" || tempZip=="X0G" || tempZip=="X1A") {
              province = "NT";
            }
            else {
              province = "NU";
            }
            break;
          case "Y":
            province = "YT";
            break;
        }
      }
      return {p:province,c:city};
    }
  },
  //This object is originally based on http://www.pixelenvision.com/1708/zip-postal-code-validation-regex-php-code-for-12-countries/ but heavily customized
  intlZipReg =  {
    AC:{i:7,a:8,r:/^ASCN(\ )?1ZZ$/,p:"ASCN 1ZZ",o:true},
    AD:{i:5,a:5,r:/^AD[1-7]0[0-1]$/,p:"AD100"},
    AF:{i:4,a:4,r:/^([1-3]\d|4[0-3])\d{2}$/,p:"1234"},
    AG:{i:0,a:0,r:/^$/,p:"No postal code"},
    AI:{i:6,a:7,r:/^AI[\-]2640$/,p:"AI-2640",o:true},
    AL:{i:4,a:4,r:/^[1-9]\d{3}$/,p:"1001"},
    AM:{i:4,a:4,r:/^([0-3]\d|4[0-2])\d{2}$/,p:"0010"},
    AO:{i:0,a:0,r:/^$/,p:"No postal code"},
    AR:{i:6,a:8,r:/^([1-9]\d{3})|(([A-H]|[J-N]|[P-Z])[1-9]\d{3}[A-Z]{3})$/,p:"C1420ABC"},
    AT:{i:4,a:4,r:/^[1-9]\d{3}$/,p:"1001"},
    AU:{i:4,a:4,r:/^(0[289]\d{2})|([1345689]\d{3})|(2[0-8]\d{2})|(290\d)|(291[0-4])|(7[0-4]\d{2})|(7[8-9]\d{2})$/,p:"1001"},
    AW:{i:0,a:0,r:/^$/,p:"No postal code"},
    BE:{i:4,a:4,r:/^[1-9]{1}\d{3}$/,p:"8001"},
    CA:{i:6,a:7,r:/^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/,p:"K1A 0B1"},
    CN:{i:4,a:4,r:/^([0-7]\d{5})|(8[0-5]\d{4})|(99907[78])$/,p:"100000"},
    DE:{i:5,a:5,r:/\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b/,p:"10115"},
    DK:{i:4,a:7,r:/^(DK( |-)?)?[1-9]\d{3}$/,p:"DK-9000"},
    DZ:{i:4,a:4,r:/^(0[1-9]|[1-3]\d|4[0-8])\d{2}$/,p:"16000"},
    ES:{i:5,a:5,r:/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/,p:"03000"},
    FR:{i:5,a:5,r:/^(F-)?((2[A|B])|\d{2})\d{3}$/,p:"80000"},
    FI:{i:5,a:5,r:/^\d{4}[01459]$/,p:"99999"},
    GB:{i:5,a:8,r:/^(GIR|[A-Z]\d[A-Z\d]??|[A-Z]{2}\d[A-Z\d]??)[ ]??(\d[A-Z]{2})$/,p:"SW1A 2AA"},
    IN:{i:6,a:6,r:/^[1-9]\d{2}\s?\d{3}$/,p:"456 001"},
    IT:{i:5,a:7,r:/^(V-|I-)?\d{5}$/,p:"20121"},
    KR:{i:6,a:8,r:/^[1-7]\d{2}(\-)?\d{3}$/,p:"100-123"},
    NL:{i:6,a:11,r:/^(NL\-)?[1-9]\d{3}\s?([A-R][A-Z]|S[BCTUVWXYZ]|S[E-R]|T[A-Z])?$/,p:"NL-1000 AP"},
    SE:{i:5,a:8,r:/^(s-|S-)?\d{3}\s?\d{2}$/,p:"101 01"},
    US:{i:5,a:12,r:/^\d{5}([\-]?\d{4}(\d{2})?)?$/,p:"20500"}
  };
intlZipReg.UK = intlZipReg.GB;
intlZipReg.AS = intlZipReg.US;
intlZipReg.PR = intlZipReg.US;
function checkZip(zipCode,state,country) {
  var zipCodeValid = true,
    zipCode = zipCode.toString().toUpperCase()
    zipCodeLength = zipCode.length;
  if (intlZipReg[country]!=undefined) {
    if (zipCodeLength < intlZipReg[country].i || zipCodeLength > intlZipReg[country].a || intlZipReg[country].r.test(zipCode)==false) {
      zipCodeValid = false;
    }
    else if(intlZipValidators[country]!=undefined) {
      zipCodeValid = intlZipValidators[country](zipCode,state);
    }
  }
  return zipCodeValid;
}