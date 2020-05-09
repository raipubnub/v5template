import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class AllChannelsOfAChannelGroupGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, group: string, auth: string, uuid: string, add: string, remove: string) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (group) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    if (typeof (add) !== 'string') {
      return false;
    }

    if (typeof (remove) !== 'string') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, group: string, auth: string, uuid: string, add: string, remove: string) {
    // ...
  }

}