import { defineConfig } from "tinacms";
import { aboutUsFields } from "./templates";
import { postFields } from "./templates";
import { publicationFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home",
        format: "mdx",
        path: "content/home",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "index") {
              return "/";
            }
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            component: "textarea",
          },
          {
            type: "object",
            name: "image",
            label: "Image",
            fields: [
              {
                type: "image",
                name: "src",
                label: "Source",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt-text",
                component: "textarea",
              },
              {
                type: "string",
                name: "type",
                label: "Type",
                component: "select",
                options: ["image/jpeg", "image/png", "image/webp"],
              },
              {
                type: "number",
                name: "width",
                label: "Width",
              },
              {
                type: "number",
                name: "height",
                label: "Height",
              },
            ],
          },
          {
            type: "object",
            name: "slides",
            label: "Hero Slides",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.header };
              },
            },
            fields: [
              {
                type: "string",
                name: "header",
                label: "Header",
              },
              {
                type: "string",
                name: "contents",
                label: "Contents",
                component: "textarea",
              },
              {
                type: "object",
                name: "button",
                label: "Button",
                fields: [
                  {
                    type: "boolean",
                    name: "include",
                    label: "Include",
                  },
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link",
                  },
                ],
              },
              {
                type: "object",
                name: "image",
                label: "Image",
                fields: [
                  {
                    type: "image",
                    name: "file",
                    label: "File",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt-text",
                    component: "textarea",
                  },
                  {
                    type: "number",
                    name: "width",
                    label: "Width",
                  },
                  {
                    type: "number",
                    name: "height",
                    label: "Height",
                  },
                  {
                    type: "string",
                    name: "align",
                    label: "Align",
                    component: "select",
                    options: ["left", "right"],
                  },
                ],
              },
            ],
          },
          {
            type: "string",
            name: "subHead",
            label: "Horizontal Sub-Header",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.header };
              },
            },
            fields: [
              {
                type: "string",
                name: "header",
                label: "Header",
                required: true,
              },
              {
                type: "object",
                name: "icon",
                label: "Icon",
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Source",
                  },
                  {
                    type: "number",
                    name: "width",
                    label: "Width",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "height",
                    label: "Height",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt-text",
                    ui: {
                      component: "textarea",
                    },
                    required: true,
                  },
                ],
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "valuesProvided",
            label: "Values",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.header };
              },
            },
            fields: [
              {
                type: "string",
                name: "header",
                label: "Header",
                required: true,
              },
              {
                type: "object",
                name: "icon",
                label: "Icon",
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Source",
                  },
                  {
                    type: "number",
                    name: "width",
                    label: "Width",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "height",
                    label: "Height",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt-text",
                    ui: {
                      component: "textarea",
                    },
                    required: true,
                  },
                ],
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "ourPublications",
            label: "Our Publications",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "authors",
                label: "Authors",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
              },
              {
                type: "object",
                name: "image",
                label: "Image",
                fields: [
                  {
                    type: "object",
                    name: "file",
                    label: "File",
                    fields: [
                      {
                        type: "image",
                        name: "avif",
                        label: "AVIF",
                      },
                      {
                        type: "image",
                        name: "jpg",
                        label: "JPG",
                      },
                    ],
                  },
                  {
                    type: "number",
                    name: "width",
                    label: "Width",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "height",
                    label: "Height",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt-text",
                    ui: {
                      component: "textarea",
                    },
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        format: "mdx",
        label: "Publish With Us",
        name: "publishWithUs",
        path: "content/publish-with-us",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "index") {
              return "/publish-with-us";
            }
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
            required: true,
          },
          {
            type: "object",
            name: "image",
            label: "Image",
            fields: [
              {
                type: "image",
                name: "src",
                label: "Source",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt-text",
                component: "textarea",
              },
              {
                type: "string",
                name: "type",
                label: "Type",
                component: "select",
                options: ["image/jpeg", "image/png", "image/webp"],
              },
              {
                type: "number",
                name: "width",
                label: "Width",
              },
              {
                type: "number",
                name: "height",
                label: "Height",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "mdx",
        label: "About Us",
        name: "aboutUs",
        path: "content/about-us",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "index") {
              return "/about-us";
            }
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          ...aboutUsFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            templates: [
              {
                name: "Card",
                label: "Card",
                fields: [
                  {
                    name: "heading",
                    label: "Heading",
                    type: "string",
                  },
                  {
                    name: "children",
                    label: "Text",
                    type: "rich-text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        format: "mdx",
        label: "Contact Us",
        name: "contactUs",
        path: "content/contact-us",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "index") {
              return "/contact-us";
            }
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "contacts",
            label: "Contacts",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "string",
                name: "position",
                label: "Position",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
            ],
          },
          {
            type: "string",
            name: "address",
            label: "Address",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "phone",
            label: "Phone",
          },
          {
            type: "string",
            name: "mail",
            label: "Email",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "mdx",
        label: "Privacy Statement",
        name: "privacy",
        path: "content/privacy-statement",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "index") {
              return "/privacy-statement";
            }
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "mdx",
        label: "News Posts",
        name: "posts",
        path: "content/news-posts",
        ui: {
          router: ({ document }) => {
            return `/news/${document._sys.filename}`;
          },
        },
        match: {
          include: "*",
        },
        fields: [
          ...postFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            templates: [
              {
                name: "Quote",
                label: "Quote",
                fields: [
                  {
                    name: "children",
                    label: "CTA",
                    type: "rich-text",
                  },
                  {
                    name: "author",
                    label: "Author",
                    type: "string",
                  },
                ],
              },
              {
                name: "InlineImage",
                label: "Inline Image",
                fields: [
                  {
                    name: "src",
                    label: "File",
                    type: "image",
                  },
                  {
                    name: "alt",
                    label: "Alt-text",
                    type: "string",
                    component: "textarea",
                  },
                  {
                    name: "float",
                    label: "Float",
                    type: "string",
                    component: "select",
                    options: ["right", "left"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        format: "mdx",
        label: "Publications",
        name: "publications",
        path: "content/publications",
        ui: {
          router: ({ document }) => {
            return `/publications/${document._sys.filename}`;
          },
        },
        match: {
          include: "*",
        },
        fields: [
          ...publicationFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "json",
        label: "Site Settings",
        name: "site_settings",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "site.config",
        },
        fields: [
          {
            name: "url",
            label: "URL",
            type: "string",
          },
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "noIndex",
            label: "Disable Crawlers",
            type: "boolean",
          },
          {
            name: "googleAnalytics",
            label: "Google Analytics",
            type: "string",
          },
          {
            name: "theme",
            label: "Theme",
            type: "object",
            fields: [
              {
                name: "themeColor",
                label: "Theme Colour",
                type: "string",
                ui: {
                  component: "color",
                },
              },
              {
                name: "icon",
                label: "Icons",
                type: "object",
                fields: [
                  {
                    name: "small",
                    label: "Small",
                    type: "image",
                  },
                  {
                    name: "large",
                    label: "Large",
                    type: "image",
                  },
                  {
                    name: "apple",
                    label: "Apple",
                    type: "image",
                  },
                ],
              },
              {
                name: "image",
                label: "Default Social Media Image",
                type: "object",
                fields: [
                  {
                    name: "src",
                    label: "Image Source",
                    type: "image",
                  },
                  {
                    name: "alt",
                    label: "Alt-text",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "type",
                    label: "MIME Type",
                    type: "string",
                    ui: {
                      component: "select",
                      options: [
                        "image/webp",
                        "image/jpeg",
                        "image/png",
                        "image/avif",
                      ],
                    },
                  },
                  {
                    name: "width",
                    label: "Width",
                    type: "number",
                  },
                  {
                    name: "height",
                    label: "Heigth",
                    type: "number",
                  },
                ],
              },
              {
                name: "logo",
                label: "Site Logo",
                type: "object",
                fields: [
                  {
                    name: "src",
                    label: "Image Source",
                    type: "image",
                  },
                  {
                    name: "alt",
                    label: "Alt-text",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    name: "width",
                    label: "Width",
                    type: "number",
                  },
                  {
                    name: "height",
                    label: "Height",
                    type: "number",
                  },
                ],
              },
              {
                name: "footer",
                label: "Footer",
                type: "object",
                fields: [
                  {
                    name: "logo",
                    label: "Footer Logo",
                    type: "object",
                    fields: [
                      {
                        name: "src",
                        label: "Image Source",
                        type: "image",
                      },
                      {
                        name: "alt",
                        label: "Alt-text",
                        type: "string",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        name: "width",
                        label: "Width",
                        type: "number",
                      },
                      {
                        name: "height",
                        label: "Height",
                        type: "number",
                      },
                    ],
                  },
                  {
                    name: "supporter",
                    label: "Supporter Info",
                    type: "object",
                    fields: [
                      {
                        name: "name",
                        label: "Name",
                        type: "string",
                      },
                      {
                        name: "link",
                        label: "Link",
                        type: "string",
                      },
                      {
                        name: "note",
                        label: "Note",
                        type: "string",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        name: "logo",
                        label: "Supporter Logo",
                        type: "object",
                        fields: [
                          {
                            name: "avif",
                            label: "AVIF Image Source",
                            type: "image",
                          },
                          {
                            name: "png",
                            label: "PNG Image Source",
                            type: "image",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "copyright",
                    label: "Copyright Notice",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "navigation",
            label: "Navigation",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                name: "title",
                label: "Page Title",
                type: "string",
              },
              {
                name: "href",
                label: "Page Link",
                type: "string",
              },
              {
                name: "color",
                label: "Mobile Display Colour",
                type: "string",
                ui: {
                  component: "color",
                },
              },
              {
                name: "hidden",
                label: "Hide Link",
                type: "boolean",
              },
            ],
          },
        ],
      },
    ],
  },
});
