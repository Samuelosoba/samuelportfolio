import React from "react";
import AppRoute from "./AppRoute";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="bg-black">
      <Toaster richColors position="top-right" />
      <AppRoute />
    </div>
  );
}
