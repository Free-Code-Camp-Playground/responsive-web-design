/* 
Valid formats:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Invalid formats:
1 (555 555 5555
(5555555555)
1 (555)-555-5555
*/

function telephoneCheck(phone){
  //console.log(`Phone: ${phone}`);
  const ref2= /(^1?)([\s-]*)(\(\d{3}\)|\d{3})([\s-]*)(\d{3})([\s-]?)(\d{4}$)/
  return reg.test(phone)


