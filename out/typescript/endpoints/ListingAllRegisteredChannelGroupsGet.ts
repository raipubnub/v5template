import { PubNubLogger } from "../log/PubNubLogger";
import { PubNubNetworking } from "../net/PubNubNetworking";
import { PubNubParser } from "../parse/PubNubParser";

class ListingAllRegisteredChannelGroupsGet {
  private httpMethod: string = 'get';

  constructor(private httpLib: PubNubNetworking, private serializationLib: PubNubParser) {
    this.httpLib = httpLib;
    this.serializationLib = serializationLib;
  }

  
  validate(sub_key: string, uuid: string) {

    if (typeof (sub_key) !== 'string') {
      return false;
    }

    if (typeof (uuid) !== 'string') {
      return false;
    }

    return true;
  }

  execute(sub_key: string, uuid: string) {
    // ...
  }

}