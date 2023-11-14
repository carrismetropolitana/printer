/* * */

module.exports.subject = () => 'O seu PDF está pronto!';

/* * */

module.exports.body = ({ name, filename, download_url }) => {
  return `Hello ${name}, your ${filename} is ready! <a href="${download_url}">Click here to download</a>`;
};
