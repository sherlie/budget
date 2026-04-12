import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { StoreContext } from "./stores/storeContext.ts";
import { createRootStore } from "./stores/RootStore.ts";

const rootStore = createRootStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreContext value={rootStore}>
      <App />
    </StoreContext>
  </StrictMode>,
);
