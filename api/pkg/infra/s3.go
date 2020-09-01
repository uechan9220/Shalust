package infra

import (
	"fmt"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

type S3 struct {
	client       *s3.S3
	session      *session.Session
	UploadOutput *s3manager.UploadOutput
}

func Init_s3() (S3, error) {
	if os.Getenv("MINIO_SECRET_KEY") != "" {
		creds := credentials.NewStaticCredentials("AKIA_MINIO_ACCESS_KEY", "minio_secret_key", "")
		sess, err := session.NewSession(&aws.Config{
			Credentials:      creds,
			Region:           aws.String("ap-northeast-1"),
			Endpoint:         aws.String("http://minio:9000"),
			S3ForcePathStyle: aws.Bool(true),
		})

		svc := s3.New(sess)

		return S3{client: svc, session: sess}, err
	}
	sess, err := session.NewSession(&aws.Config{
		S3ForcePathStyle: aws.Bool(true),
	})
	svc := s3.New(sess)
	return S3{client: svc, session: sess}, err
}

func (s3 *S3) Upload_s3(filepath string, filename string) (S3, error) {
	file, err := os.Open(filepath)
	if err != nil {
		return S3{}, err
	}
	defer file.Close()

	uploader := s3manager.NewUploader(s3.session)
	uploadOutput, err := uploader.Upload(&s3manager.UploadInput{
		Bucket: aws.String(os.Getenv("S3_BUCKET_NAME")),
		Key:    aws.String(filename),
		Body:   file,
	})

	if os.Getenv("MINIO_URL") != "" {
		s3_url := os.Getenv("MINIO_URL")
		s3_bucket := os.Getenv("S3_BUCKET_NAME")
		uploadOutput.Location = fmt.Sprintf("%s/%s/%s", s3_url, s3_bucket, filename)
		return S3{UploadOutput: uploadOutput}, err
	}

	return S3{UploadOutput: uploadOutput}, err
}
