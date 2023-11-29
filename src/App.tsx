import { ConfigProvider } from "antd";
import "./App.css";
import Layout from "@/layout";
function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#ffeded",
          }
        },
        token: {
          // Seed Token
          colorBgBlur: "50px",
          colorPrimary: "#0075b9",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#fff",
        },
      }}
    >
      <Layout />
    </ConfigProvider>
  );
}

export default App;
