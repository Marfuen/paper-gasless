import "@/styles/globals.css";
import {
  coinbaseWallet,
  metamaskWallet,
  paperWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        paperWallet({
          clientId: process.env.NEXT_PUBLIC_PAPER_CLIENT_ID as string,
        }),
      ]}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
        authUrl: "/api/auth",
      }}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_OPENZEPELLIN_URL as string,
          },
          relayerForwarderAddress: "0xc82BbE41f2cF04e3a8efA18F7032BDD7f6d98a81",
        },
      }}
      activeChain="mumbai"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
