import { expect, test } from "@playwright/test";
import { galleryPhotos } from "../src/content/gallery";

let browserErrors: string[];
let localFailures: string[];

test.beforeEach(async ({ page }) => {
  browserErrors = [];
  localFailures = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));
  page.on("response", (response) => {
    if (
      response.url().startsWith("http://127.0.0.1:3100/") &&
      response.status() >= 400
    ) {
      localFailures.push(`${response.status()} ${response.url()}`);
    }
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /DESIGN\s*SCHOOL\./,
  );
});

test.afterEach(() => {
  expect(
    browserErrors,
    "No hydration errors or uncaught browser exceptions",
  ).toEqual([]);
  expect(
    localFailures,
    "No missing local assets or failed app requests",
  ).toEqual([]);
});

test("page sections, navigation anchors, and responsive layout", async ({
  page,
  isMobile,
}) => {
  await expect(page).toHaveTitle("Design School — Bengaluru");
  await expect(page.locator("section[id]")).toHaveCount(6);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);

  await page.getByRole("link", { name: "Explore the sessions" }).click();
  await expect(page).toHaveURL(/#events$/);
  await expect(
    page.getByRole("heading", { name: "DESIGN SCHOOL EVENTS" }),
  ).toBeInViewport();

  if (!isMobile) {
    const navigation = page.getByRole("navigation", {
      name: "Main navigation",
      exact: true,
    });
    await navigation.getByRole("link", { name: "Our mission" }).click();
    await expect(page).toHaveURL(/#mission$/);
    await navigation.getByRole("link", { name: "Past events" }).click();
    await expect(page).toHaveURL(/#testimonials$/);
  }

  const footer = page.getByRole("contentinfo");
  await footer.getByRole("link", { name: "The good moments" }).click();
  await expect(page).toHaveURL(/#gallery$/);
  await footer.getByRole("link", { name: "Back to top" }).click();
  await expect(page).toHaveURL(/#hero$/);
});

test("mobile menu closes on Escape and navigation", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "The menu is shown below the mobile breakpoint.");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Our mission" })
    .click();
  await expect(page).toHaveURL(/#mission$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toHaveCount(0);
});

test("past events retain the initial card and navigate to the correct destinations", async ({
  page,
}) => {
  const carousel = page.getByRole("region", {
    name: "Past events",
    exact: true,
  });
  const active = carousel.locator('a[aria-current="true"]');
  await expect(active).toHaveAttribute("href", "https://luma.com/uvzsogs5");
  await carousel.getByRole("button", { name: "Previous event" }).click();
  await expect(active).toHaveAttribute("href", "https://luma.com/q1ydndih");
  await carousel.getByRole("button", { name: "Next event" }).click();
  await carousel.getByRole("button", { name: "Next event" }).click();
  await expect(active).toHaveAttribute("href", "https://luma.com/5318tyh0");
  await active.focus();
  await expect(active).toBeFocused();
  const destination = page.waitForURL("https://luma.com/5318tyh0");
  await page.route("https://luma.com/5318tyh0", (route) =>
    route.fulfill({ contentType: "text/html", body: "Event destination" }),
  );
  await active.press("Enter");
  await destination;
});

test("gallery wraps, supports keyboard navigation, and loads local photos", async ({
  page,
}) => {
  const gallery = page.getByRole("region", { name: "Gallery showcase" });
  const status = gallery.locator('[aria-live="polite"]');
  await expect(status).toContainText("1 / 8");
  await gallery.getByRole("button", { name: "Previous gallery image" }).click();
  await expect(status).toContainText("8 / 8");
  await gallery.getByRole("button", { name: "Next gallery image" }).click();
  await expect(status).toContainText("1 / 8");
  await gallery.focus();
  await page.keyboard.press("ArrowLeft");
  await expect(status).toContainText("8 / 8");
  await page.keyboard.press("ArrowRight");
  await expect(status).toContainText("1 / 8");
  for (const photo of galleryPhotos) {
    const image = gallery.getByRole("img", { name: photo.alt, exact: true });
    await expect(image).toBeVisible();
    await expect
      .poll(() =>
        image.evaluate(
          (element: HTMLImageElement) =>
            element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
    await gallery.getByRole("button", { name: "Next gallery image" }).click();
  }
  await expect(status).toContainText("1 / 8");
});

test("newsletter validates email and displays its notice without sending data", async ({
  page,
}) => {
  const input = page.getByRole("textbox", { name: "Your email address" });
  const submit = page.getByRole("button", {
    name: "Subscribe to the newsletter",
  });
  const status = page.locator("#newsletter-status");
  const submissions: string[] = [];
  page.on("request", (request) => {
    if (request.method() === "POST") submissions.push(request.url());
  });
  await submit.click();
  expect(
    await input.evaluate(
      (element: HTMLInputElement) => element.validity.valueMissing,
    ),
  ).toBe(true);
  await input.fill("invalid-email");
  await submit.click();
  expect(
    await input.evaluate(
      (element: HTMLInputElement) => element.validity.typeMismatch,
    ),
  ).toBe(true);
  await input.fill("designer@example.com");
  await submit.click();
  await expect(status).toContainText("Newsletter signups open soon");
  await input.fill("another@example.com");
  await expect(status).not.toContainText("Newsletter signups open soon");
  expect(submissions).toEqual([]);
});

test("reduced motion leaves animated content readable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload({ waitUntil: "domcontentloaded" });
  const mission = page.locator("#mission");
  await mission.scrollIntoViewIfNeeded();
  const animatedWord = mission
    .locator('p > span[aria-hidden="true"] > span')
    .nth(1);
  await expect(animatedWord).toHaveCSS("opacity", "1");
  await expect(animatedWord).toHaveCSS("transition-duration", "0s");
  const gallery = page.getByRole("region", { name: "Gallery showcase" });
  await gallery.scrollIntoViewIfNeeded();
  await expect(gallery.locator('div[aria-hidden="false"]')).toHaveCSS(
    "transition-property",
    "none",
  );
});

test("removed chat endpoint is unavailable", async ({ request }) => {
  const response = await request.post("/api/chat", {
    data: { message: "Hello" },
  });
  expect(response.status()).toBe(404);
});
