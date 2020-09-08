package usecase

import "time"

const location = "Asia/Tokyo"

func init() {
	loc, err := time.LoadLocation(location)
	if err != nil {
		loc = time.FixedZone(location, 9*60*60)
	}
	time.Local = loc
}

func GetDeteInTokyo() string {
	return time.Now().Format("2006-01-02 15:04")
}
