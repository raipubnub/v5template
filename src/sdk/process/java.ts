import SdkGenerator from '../index';
import { RenderTemplate } from '../index';
import { SdkApiDefinition } from '../../definition/format/SdkApiDefinition';
import { apiConvert } from '../convert/javascript/api';
import { endpointConvert } from '../convert/javascript/endpoint';
import { SdkEndpoint } from '../../definition/format/SdkEndpoint';

export function process(generator: SdkGenerator, apis: SdkApiDefinition[], renderTemplate: RenderTemplate) {
  // generator.log(generator.selectedLanguage + ' selected java');
  // generator.log(generator.outputDir);
  // generator.log(generator.templateDir);

  let sdkApi = apiConvert(apis);

  renderTemplate.ejs('api', sdkApi, 'Api', 'java');

  sdkApi.endpoints.forEach((sdkEndpoint: SdkEndpoint) => {
    renderTemplate.ejs('endpoint', endpointConvert(sdkEndpoint), sdkEndpoint.title, 'java', 'endpoint');
  });
}
