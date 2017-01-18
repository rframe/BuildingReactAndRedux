/**
 * Created by rframe on 1/17/2017.
 */
//TODO: research reselect @ https://github.com/reactjs/reselect
export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });
}
