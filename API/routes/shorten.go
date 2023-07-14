package routes

import "time"

type request struct {
	URL           string        `json:"url"`
	CustomerShort string        `json:"short"`
	Expiry        time.Duration `json:"expiry"`
}

type response struct {
	URL            string        `json:"url"`
	CustomerShort  string        `json:"short"`
	Expiry         time.Duration `json:"expiry"`
	XRateRemaining int           `json:"rate_limit"`
	YRateRemaining time.Duration `json:"rate_limit_reset"`
}
