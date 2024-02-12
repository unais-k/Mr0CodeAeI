import {
  Configurer,
  ConfigurerOptionalPaths
} from "@productgenie/plugin-config-utils";

export const optionals: ConfigurerOptionalPaths = [["settings"]];

export const configurer: Configurer = {
  name: "Text",
  screens: [
    // {
    //   name: "Properties",
    //   content: [
    //     {
    //       type: "text",
    //       name: ["settings", "name"],
    //       label:"he",
    //       optional: true,
    //       hidden: true
    //     },
    //     {
    //       type: "text",
    //       name: ["settings", "tag"],
    //       optional: true,
    //       hidden: true
    //     },
    //     {
    //       type: "text",
    //       name: ["text"],
    //       label: "Text"
    //     },
    //     {
    //       type: "icon-picker",
    //       name: ["icon"],
    //       label: "Icon"
    //     }
    //   ]
    // },
    {
      name: "Create Toast",
      content: [
        {
          type: "text",
          name: ["title"],
          label:"Title of Toast"
        },
        {
          type: "text",
          name: ["info"],
          label:"Info of Toast"
        },
        {
          type: "icon-picker",
          name: ["icon"],
          label: "Icon",
        },
        {
          type: "color-picker",
          name: ["color"],
          label:"Choose the background color"
        },
        {
          type: "color-picker",
          name: ["titleColor"],
          label:"Choose the title color"
        },
      ]
    }
  ]
  
};
