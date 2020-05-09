import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class AnnounceLeaveGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, channel: string, channel-group: string, auth: string, callback: string, uuid: string) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (channel) !== 'string') {
      return false;
    }

    if (typeof (channel-group) !== 'string') {
      return false;
    }

    if (typeof (auth) !== 'string') {
      return false;
    }

    if (typeof (callback) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, channel: string, channel-group: string, auth: string, callback: string, uuid: string) {
    // ...
  }

}