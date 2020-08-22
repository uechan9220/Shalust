package db

import (
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

type S3 struct {
	client  *s3.S3
	session *session.Session
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
	return S3{client: svc}, err
}

func (s3 *S3) Upload_s3(filename string) error {
	bucket := "mybucket"
	file, err := os.Open(filename)

	defer file.Close()

	uploader := s3manager.NewUploader(s3.session)
	_, err = uploader.Upload(&s3manager.UploadInput{
		Bucket: aws.String(os.Getenv("S3_BUCKET")),
		Key:    aws.String(filename),
		Body:   file,
	})
}
