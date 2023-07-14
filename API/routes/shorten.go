package routes

import (
	"time"

	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/v2"
)

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

func ShortenURL(c *fiber.Ctx) error {

	body := new(request)

	if err := c.BodyParser(body); err != nil || body == nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "cannot parse JSON"})
	}

	// Implement Rate limit

	// Check if URL is valid and reachable, return an appropriate status code in case of failure

	if !govalidator.IsURL(body.URL) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid URL"})
	}

	// Check for domain error

	if !helpers.RemoveDomainError(body.URL) {
		return c.Status(fiber.StatusServiceUnavailable).JSON(fiber.Map{"error": "Domain is protected"})
	}

	// Enforce https, SSL

	body.URL = helpers.EnforceHTTP(body.URL)
}
