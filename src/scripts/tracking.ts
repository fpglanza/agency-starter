type TrackingWindow = Window & {
  gtag?: (command: "event", eventName: string, parameters: TrackingParameters) => void;
  __racingTrackingDebug?: boolean;
  __trackingInitialized?: boolean;
};

type TrackingParameters = Record<string, string | number | (() => void)>;

const trackingWindow = window as TrackingWindow;
const GA4_MEASUREMENT_ID = "G-N5XYL25R5K";
const NAVIGATION_FALLBACK_MS = 600;

if (!trackingWindow.__trackingInitialized) {
  trackingWindow.__trackingInitialized = true;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const element = target.closest<HTMLElement>(
        "[data-track], a[href^='tel:'], a[href*='wa.me/']"
      );

      if (!element) return;

      const anchor = element instanceof HTMLAnchorElement ? element : element.closest("a[href]");
      const href = anchor?.href || "";
      const eventName =
        element.dataset.track ||
        (href.startsWith("tel:") ? "phone_click" : "") ||
        (href.includes("wa.me/") ? "whatsapp_click" : "");

      if (!eventName) return;

      const parameters = {
        send_to: GA4_MEASUREMENT_ID,
        event_category: "engagement",
        location: element.dataset.location || "",
        section: element.dataset.section || "",
        office: element.dataset.office || element.dataset.location || "",
        text: element.textContent?.trim() || "",
        href,
        page_path: window.location.pathname
      };

      const isModifiedClick =
        event instanceof MouseEvent &&
        (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey);
      const isSpecialHref =
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.includes("wa.me/") ||
        href.includes("whatsapp");
      const shouldDelayNavigation =
        Boolean(anchor?.dataset.track && href) &&
        !isSpecialHref &&
        !isModifiedClick &&
        !anchor?.hasAttribute("download") &&
        (anchor?.target || "_self").toLowerCase() !== "_blank";

      if (typeof trackingWindow.gtag !== "function") return;

      if (shouldDelayNavigation && anchor && event.cancelable) {
        event.preventDefault();

        let didNavigate = false;
        const navigate = () => {
          if (didNavigate) return;
          didNavigate = true;
          window.location.href = href;
        };

        parameters.event_callback = navigate;
        parameters.event_timeout = NAVIGATION_FALLBACK_MS;
        window.setTimeout(navigate, NAVIGATION_FALLBACK_MS);
      }

      trackingWindow.gtag("event", eventName, parameters);
    },
    { capture: true }
  );
}
