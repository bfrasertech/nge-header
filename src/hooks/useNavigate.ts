
export const useNavigate = (url: string) => {
  let baseUrl: string = `${window.location.protocol}//${window.location.host}`;

  if (url.indexOf('http') === 0) {
    window.location.href = url;
  } else if (url.indexOf('/') === 0) {
    window.location.href = `${baseUrl}${url}`;
  } else {
    window.location.href = `${baseUrl}/${url}`;
  }
};