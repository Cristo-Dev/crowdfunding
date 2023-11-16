import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { activeNavMenu, animation, aTagClick, dataPoggress } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Wallet from "../components/utils/wallet";
import { indexerClient } from "../utils/constants";
import { PeraWalletConnect } from "@perawallet/connect";
import { Container, Nav } from "react-bootstrap";

const Layout = ({
  children,
  transparentTop,
  transparentHeader,
  topSecondaryBg,
  footerSolidBg,
}) => {
  const router = useRouter();

  // const [balance, setBalance] = useState(0);
  // const [address, setAddress] = useState("");

  // // Add this function to get the stored address and fetch balance if needed
  // // const checkLoginStatus = () => {
  // //   const storedAddress = sessionStorage.getItem("address");
  // //   if (storedAddress) {
  // //     setAddress(storedAddress);
  // //     fetchBalance(storedAddress);
  // //   }
  // // };
  // const peraWallet = new PeraWalletConnect({
  //   chainId: "416002", // Use "416002" for TestNet
  // });
  // useEffect(() => {
  //   // This will check for the login state when the component is mounted
  //   const storedAddress = sessionStorage.getItem("address");
  //   if (storedAddress) {
  //     setAddress(storedAddress);
  //     fetchBalance(storedAddress);
  //   }
  //   // Reconnect to the session if possible
  //   peraWallet
  //     .reconnectSession()
  //     .then((accounts) => {
  //       if (accounts.length) {
  //         const _account = accounts[0];
  //         setAddress(_account);
  //         fetchBalance(_account);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   if (sessionStorage.getItem("address"))
  //     setAddress(sessionStorage.getItem("address"));
  //   fetchBalance(sessionStorage.getItem("address"));
  // }, [peraWallet]);



  useEffect(() => {
    activeNavMenu(router.pathname);
    animation();
    aTagClick();
    dataPoggress();
  });

  

  // const handleConnectWalletClick = () => {
  //   peraWallet
  //     .connect()
  //     .then((newAccounts) => {
  //       // Setup the disconnect event listener
  //       peraWallet.connector?.on("disconnect", disconnect);

  //       const _account = newAccounts[0];
  //       sessionStorage.setItem("address", _account);
  //       setAddress(_account);
  //       fetchBalance(_account);
  //     })
  //     .catch((error) => {
  //       if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
  //         console.log("Could not connect to Pera Wallet");
  //         console.error(error);
  //       }
  //     });
  // };

  // const disconnect = () => {
  //   peraWallet.disconnect();
  //   setAddress("");
  //   sessionStorage.setItem("address", "");
  //   setBalance(null);
  // };

  // const fetchBalance = async (accountAddress) => {
  //   indexerClient
  //     .lookupAccountByID(accountAddress)
  //     .do()
  //     .then((response) => {
  //       const _balance = response.account.amount;
  //       setBalance(_balance);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   if (sessionStorage.getItem("address"))
  //     setAddress(sessionStorage.getItem("address"));
  //   fetchBalance(window.sessionStorage.getItem("address"));
  // }, []);

  

  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
        <title>Funden - Crowdfunding & Charity React Template</title>
        <link
          rel="shortcut icon"
          href="assets/img/favicon.ico"
          type="img/png"
        />
      </Head>
      {/*  */}
      <Header
        transparentTop={transparentTop}
        transparentHeader={transparentHeader}
        topSecondaryBg={topSecondaryBg}
        // handleConnectWalletClick={handleConnectWalletClick}
      />
      <MobileHeader
        transparentTop={transparentTop}
        transparentHeader={transparentHeader}
        topSecondaryBg={topSecondaryBg}
      />
      {children}
      <Footer footerSolidBg={footerSolidBg} />
    </Fragment>
  );
};

export default Layout;
