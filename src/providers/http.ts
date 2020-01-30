class HttpClient {
  private makeRequest = (url: string, init?: RequestInit) =>
    fetch(url, init).then(response => response.json());
}

abstract class ClientWrapper {
  // Single instance of HTTP Client
  private static http = new HttpClient();

  // Root url to make requests
  abstract rootUrl: string;
}

export default ClientWrapper;
