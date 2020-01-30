class HttpClient {
  private makeRequest = (url: string, init?: RequestInit) => fetch(url, init);
}

export default new HttpClient();
