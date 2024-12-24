import { revalidateTag } from "next/cache";

import type { GlobalAfterChangeHook } from "payload";

export const revalidateNavbar: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating navbar`);

    revalidateTag("global_navbar");
  }

  return doc;
};
