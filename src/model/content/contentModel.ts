import contentSchema, { contentDocument } from "./contentSchema";

export const addContent = (
  contentObj: Record<string, any>
): Promise<contentDocument> => {
  const newContent = new contentSchema(contentObj);
  return newContent.save();
};

export const getAllContent = () => {
  return contentSchema.find();
};

export const getContentById = (_id: string) => {
  return contentSchema.findById({ _id }).lean();
};

export const deleteContent = (_id: string) => {
  return contentSchema.findByIdAndDelete(_id);
};
