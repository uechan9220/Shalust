package db

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

func Init_s3() (*s3.S3, error) {
	creds := credentials.NewStaticCredentials("AKIA_MINIO_ACCESS_KEY", "minio_secret_key", "")
	sess, err := session.NewSession(&aws.Config{
		Credentials:      creds,
		Region:           aws.String("ap-northeast-1"),
		Endpoint:         aws.String("http://minio:9000"),
		S3ForcePathStyle: aws.Bool(true),
	})

	svc := s3.New(sess)
	return svc, err
}
