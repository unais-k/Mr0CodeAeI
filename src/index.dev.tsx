import { useState } from "react";

import Block from "./index.block";
import {
  AbstractActions,
  MockPluginBridgeProvider
} from "@productgenie/plugin-bridge";
import { Config } from "./block-config";
import { AbstractDatasource } from "@productgenie/datasource";

import meta from "../meta.json";
import BlockConfigurer from "./index.block-configurer";

const mockDatasource = new (class extends AbstractDatasource {
  // todo: impl mock datasource here
})();

const mockActions = new (class extends AbstractActions {
  // todo: impl mock actions here
})();

export const Dev = () => {
  const [config, setConfig] = useState<Config>(meta?.initConfig);
console.log(config);
  return (
    <MockPluginBridgeProvider datasource={mockDatasource} actions={mockActions}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
          <Block config={config} setConfig={setConfig} />
        </div>
        <div style={{ flex: 1, maxHeight: "100vh", overflowY: "auto" }}>
          <BlockConfigurer
            config={config}
            onConfigChange={(newConfig) => {
              setConfig(newConfig as Config);
            }}
          />
        </div>
      </div>
    </MockPluginBridgeProvider>
  );
};
