/* * */
/* GET TODAY AS STRING */
/* Output the current date and time in the format YYYYMMDDHHMM. */
/* For example, if the current date is July 3, 2023, at 9:30 AM, the output will be 202307030930. */

class IDGENERATOR {
  random() {
    //

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const miliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

    const randomString = [...Array(5)].map(() => (~~(Math.random() * 36)).toString(36)).join('');

    return `${year}${month}${day}${hours}${minutes}${miliseconds}-${randomString}`;

    //
  }
}

/* * */

module.exports = new IDGENERATOR();
