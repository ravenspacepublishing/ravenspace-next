export function aboutUsFields() {
  return [
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
      type: "string",
      name: "header",
      label: "Header",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "partners",
      label: "Partners",
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
          name: "link",
          label: "Link",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
    {
      type: "string",
      name: "horiz",
      label: "Horizontal Header",
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
  ];
}
export function contact_usFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
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
  ];
}
export function homeFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
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
      name: "hero_slides",
      label: "Hero Slides",
      list: true,
      fields: [
        {
          type: "string",
          name: "header",
          label: "Header",
          required: true,
        },
        {
          type: "string",
          name: "contents",
          label: "Contents",
          ui: {
            component: "textarea",
          },
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
              required: true,
            },
            {
              type: "string",
              name: "link",
              label: "Link",
              required: true,
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
              required: true,
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
              name: "align",
              label: "Alignment",
              options: ["right", "left"],
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "sub_head",
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
              name: "avif",
              label: "AVIF",
            },
            {
              type: "image",
              name: "png",
              label: "PNG",
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
      name: "values",
      label: "Values",
      list: true,
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
              name: "avif",
              label: "AVIF",
            },
            {
              type: "image",
              name: "png",
              label: "PNG",
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
      name: "our_publications",
      label: "Our Publications",
      list: true,
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
  ];
}
export function postFields() {
  return [
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
      required: true,
    },
    {
      type: "datetime",
      name: "pubDate",
      label: "Publication Date",
      required: true,
    },
    {
      type: "object",
      name: "feature_image",
      label: "Feature Image",
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
          name: "type",
          label: "Type",
          options: ["webp", "jpeg", "png"],
        },
      ],
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
  ];
}
export function publicationFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
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
          name: "file",
          label: "File",
        },
        {
          type: "image",
          name: "thumb_avif",
          label: "Thumb AVIF",
        },
        {
          type: "image",
          name: "thumb_jpg",
          label: "Thumb JPG",
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
      type: "object",
      name: "publisher",
      label: "Publisher",
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
    {
      type: "string",
      name: "release_date",
      label: "Release Date",
    },
    {
      type: "string",
      name: "isbn",
      label: "ISBN",
    },
    {
      type: "string",
      name: "pub_url",
      label: "Publication URL",
    },
    {
      type: "string",
      name: "accolades",
      label: "Accolades",
      list: true,
    },
    {
      type: "object",
      name: "testimonials",
      label: "Testimonials",
      list: true,
      fields: [
        {
          type: "string",
          name: "quote",
          label: "Quote",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "author",
          label: "Author",
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
          ],
        },
      ],
    },
  ];
}
export function publish_with_usFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
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
  ];
}
