import { Stack, StackProps, RemovalPolicy, CfnOutput } from "aws-cdk-lib";
import { Bucket, BlockPublicAccess } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class WorkshopPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // Creates our S3 bucket for the remote git repo
        const gitBucket = new Bucket(this, "GitBucket", {
            bucketName: `workshop-git-${this.account}-${this.region}`,
            versioned: true,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
            removalPolicy: RemovalPolicy.DESTROY, // this is for workshop cleanup -- use RETAIN in production env's
            autoDeleteObjects: true,
        })

        // Output bucket name for easy reference
        new CfnOutput(this, "GitBucketName", {
            value: gitBucket.bucketName,
            description: 'S3 bucket name for remote git repo',
        })

        // Pipeline code goes here
    }
}

