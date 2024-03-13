import contentSchema, { contentDocument } from "./contentSchema";

export const addContent = (
  contentObj: Record<string, any>
): Promise<contentDocument> => {
  const newContent = new contentSchema(contentObj);
  return newContent.save();
};
