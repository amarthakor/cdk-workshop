import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS lambda resource
    const hello = new Function(this, "HelloHandler", {
      runtime: Runtime.NODEJS_22_X, // execution environment
      code: Code.fromAsset('lambda'), // code loaded from lambda dir
      handler: 'hello.handler', // file is 'hello', function is 'handler'
    })
  }
}