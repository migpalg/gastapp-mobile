import Http from './http';

export default abstract class Provider {
  protected rootUrl: string = '';
  protected http = new Http(this.rootUrl);
}
