import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

import { authenticated } from "@/features/access/authenticated";
import { authenticatedOrPublished } from "@/features/access/authenticatedOrPublished";
import { Banner } from "@/features/blocks/Banner/config";
import { CallToAction } from "@/features/blocks/CallToAction/config";
import { MediaBlock } from "@/features/blocks/MediaBlock/config";
import { slugField } from "@/features/fields/slug";

import { populateAuthors } from "./hooks/populate-authors";
import {
  revalidateDelete,
  revalidateProduct,
} from "./hooks/revalidate-product";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["title", "sku", "categories", "updatedAt"],
    useAsTitle: "title",
  },
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "sku",
      type: "text",
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "images",
              type: "array",
              fields: [
                {
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                },
              ],
            },

            {
              name: "overview",
              type: "richText",
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({
                      enabledHeadingSizes: ["h1", "h2", "h3", "h4"],
                    }),
                    BlocksFeature({
                      blocks: [Banner, MediaBlock, CallToAction],
                    }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ];
                },
              }),
              label: "Overview",
              required: true,
            },
            {
              type: "collapsible",
              label: "Main Specification",
              fields: [
                {
                  name: "screenSizes",
                  type: "text",
                  label: "Screen TV Sizes",
                },
                {
                  name: "maxLoad",
                  type: "text",
                  label: "Maximum Load",
                },
                {
                  name: "distanceToWall",
                  type: "text",
                  label: "Distance to the wall",
                },
                {
                  name: "maxVesa",
                  type: "text",
                  label: "Max. Vesa (mm)",
                },
              ],
            },
            {
              type: "collapsible",
              label: "feature",
              fields: [
                {
                  name: "features",
                  type: "array",
                  admin: {
                    components: {
                      RowLabel:
                        "@/collections/products/array-row-label#ArrayRowLabel",
                    },
                  },
                  fields: [
                    {
                      name: "title",
                      label: "Feature",
                      type: "text",
                    },
                  ],
                },
              ],
            },
            {
              type: "collapsible",
              label: "Specifications",
              fields: [
                {
                  name: "specifications",
                  type: "array",
                  admin: {
                    components: {
                      RowLabel:
                        "@/collections/products/array-row-label#ArrayRowLabel",
                    },
                  },
                  fields: [
                    {
                      name: "title",
                      type: "text",
                    },
                    {
                      name: "value",
                      type: "text",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              name: "resources",
              type: "array",
              admin: {
                position: "sidebar",
              },
              fields: [
                {
                  name: "document",
                  type: "upload",
                  relationTo: "documents",
                },
              ],
            },
          ],
          label: "Resources",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),

            MetaDescriptionField({}),
            {
              type: "text",
              name: "keyword",
              label: "Keyword",
            },

            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },

    {
      name: "subcategories",
      type: "relationship",
      admin: {
        position: "sidebar",
      },

      relationTo: "sub-categories",
    },
    {
      name: "relatedProducts",
      type: "relationship",
      admin: {
        position: "sidebar",
      },
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        };
      },
      hasMany: true,
      relationTo: "products",
    },

    {
      name: "featured",
      label: "Mark as featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Display this product on the homepage",
      },
    },

    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },

    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: "populatedAuthors",
      type: "array",
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: "id",
          type: "text",
        },
        {
          name: "name",
          type: "text",
        },
      ],
    },

    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateProduct],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
};
