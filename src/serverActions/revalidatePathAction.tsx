"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const revalidatePathAction = async (path: string) => {
  revalidatePath(path);
};

export const revalidateTagAction = async (tag: string) => {
  revalidateTag(tag);
};
