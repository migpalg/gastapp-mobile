class HttpClient {
  public makeRequest = (url: string, init?: RequestInit) => fetch(url, init);
}

export default new HttpClient();
