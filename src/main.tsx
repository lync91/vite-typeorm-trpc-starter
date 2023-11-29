import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BanHang } from "./pages/ban-hang/index.tsx";
import { KhachHang, khachLoader } from "./pages/ban-hang/khach-hang";
const environment = import.meta.env.MODE;


async function appLoader() {
  const me = "await getMe()";
  return me
}

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <App />,
    errorElement: <>Error</>,
    loader: appLoader,
    children: [
      {
        path: "ban-hang",
        element: <BanHang />,
        children: [
          {
            path: "khach-hang",
            element: <KhachHang />,
            loader: khachLoader,
            id: "khach-hang"
          },
          { path: "don-hang", element: <>Đơn hàng</> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
