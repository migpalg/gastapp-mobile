/**
 * Wraps all HTTP methods, GET, POST, etc.
 * This manages tokens on cookies
 */
class BaseHttp {
  private makeRequest = (url: string, init?: RequestInit) =>
    fetch(url, init).then(response => response.json());
}

/**
 * Wraps a single instance of HTTP Client
 */
abstract class ClientWrapper {
  // Single instance of HTTP Client
  private static http = new BaseHttp();

  // Root url to make requests
  abstract rootUrl: string;
}

export default ClientWrapper;
