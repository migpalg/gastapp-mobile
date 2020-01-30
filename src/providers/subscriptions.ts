import {Provider} from './declarations';

export interface Subscription {
  id: string;
  name: string;
  frecuency: 'daily' | 'weekly' | 'monthly' | 'annual';
}

class SubscriptionsProvider extends Provider {
  rootUrl = '/subscription';
}

export default new SubscriptionsProvider();
