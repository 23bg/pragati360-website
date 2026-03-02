import { getRequestConfig } from "next-intl/server";
import { messages } from "./messages";
import { routing } from "./config";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale =
    locale && locale in messages ? locale : routing.defaultLocale;

  return {
    locale: resolvedLocale,
    messages: messages[resolvedLocale as keyof typeof messages],
  };
});
