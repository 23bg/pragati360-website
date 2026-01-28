import { getRequestConfig } from "next-intl/server";
import { messages } from "./messages";
import { defaultLocale } from "./config";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale =
    locale && locale in messages ? locale : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: messages[resolvedLocale as keyof typeof messages],
  };
});
