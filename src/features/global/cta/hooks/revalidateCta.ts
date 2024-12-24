import { revalidateTag } from "next/cache";

import type { GlobalAfterChangeHook } from "payload";

export const revalidateCta: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating cta`);

    revalidateTag("global_cta");
  }

  return doc;
};
