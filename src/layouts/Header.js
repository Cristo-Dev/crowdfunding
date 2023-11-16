import Link from "next/dist/client/link";
import { stickyNav } from "../utils";
import { Home, News, Pages, Project } from "./menus";

import React, { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Wallet from "../components/utils/wallet";
import { indexerClient } from "../utils/constants";
import { PeraWalletConnect } from "@perawallet/connect";
import { Container, Nav } from "react-bootstrap";

const Header = ({ transparentTop, transparentHeader, topSecondaryBg }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  // Add this function to get the stored address and fetch balance if needed
  // const checkLoginStatus = () => {
  //   const storedAddress = sessionStorage.getItem("address");
  //   if (storedAddress) {
  //     setAddress(storedAddress);
  //     fetchBalance(storedAddress);
  //   }
  // };
  const peraWallet = new PeraWalletConnect({
    chainId: "416002", // Use "416002" for TestNet
  });
  useEffect(() => {
    // This will check for the login state when the component is mounted
    const storedAddress = sessionStorage.getItem("address");
    if (storedAddress) {
      setAddress(storedAddress);
      fetchBalance(storedAddress);
    }
    // Reconnect to the session if possible
    peraWallet
      .reconnectSession()
      .then((accounts) => {
        if (accounts.length) {
          const _account = accounts[0];
          setAddress(_account);
          fetchBalance(_account);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    if (sessionStorage.getItem("address"))
      setAddress(sessionStorage.getItem("address"));
    fetchBalance(sessionStorage.getItem("address"));
  }, [peraWallet]);


  

  const handleConnectWalletClick = () => {
    peraWallet
      .connect()
      .then((newAccounts) => {
        // Setup the disconnect event listener
        peraWallet.connector?.on("disconnect", disconnect);

        const _account = newAccounts[0];
        sessionStorage.setItem("address", _account);
        setAddress(_account);
        fetchBalance(_account);
      })
      .catch((error) => {
        if (error?.data?.type !== "CONNECT_MODAL_CLOSED") {
          console.log("Could not connect to Pera Wallet");
          console.error(error);
        }
      });
  };

  const disconnect = () => {
    peraWallet.disconnect();
    setAddress("");
    sessionStorage.setItem("address", "");
    setBalance(null);
  };

  const fetchBalance = async (accountAddress) => {
    indexerClient
      .lookupAccountByID(accountAddress)
      .do()
      .then((response) => {
        const _balance = response.account.amount;
        setBalance(_balance);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("address"))
      setAddress(sessionStorage.getItem("address"));
    fetchBalance(window.sessionStorage.getItem("address"));
  }, []);


  return (
    <header
      className={`site-header sticky-header d-none d-lg-block ${
        transparentTop ? "topbar-transparent" : ""
      } ${transparentHeader ? "transparent-header" : ""} header-sticky___`}
    >
      <div
        className={`header-topbar d-none d-sm-block ${
          topSecondaryBg ? "topbar-secondary-bg" : ""
        }`}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <ul className="contact-info">
                <li>
                  <a href="#">
                    <i className="far fa-envelope" /> support@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-map-marker-alt" /> 250 Main Street, 2nd
                    Floor, USA
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto d-none d-md-block">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link href="/">
                <a>
                  <img src="assets/img/logo.png" alt="Funden" />
                </a>
              </Link>
            </div>
            <div className="nav-menu menu____">
              <ul>
                <li>
                  <a href="#">
                    Home
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Home}</ul>
                </li>
                <li>
                  <a href="#">
                    Project
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Project}</ul>
                </li>
                <li>
                  <Link href="/events">
                    <a>Events</a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    News
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{News}</ul>
                </li>
                <li>
                  <a href="#">
                    Pages
                    <span className="dd-trigger">
                      <i className="far fa-angle-down" />
                    </span>
                  </a>
                  <ul className="submenu">{Pages}</ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              {/* <Link href="/events">
                <a className="main-btn nav-btn d-none d-sm-inline-block">
                  Donate Now <i className="far fa-arrow-right" />
                </a>
              </Link> */}
              <Button variant="primary" onClick={handleConnectWalletClick}>
                Connect Wallet
              </Button>
              {address ? (
                <Nav className="justify-content-end pt-3 pb-0">
                  <Nav.Item>
                    <Wallet address={address} amount={balance} disconnect={disconnect} symbol={"ALGO"} />
                  </Nav.Item>
                </Nav>
              ) : (
                <Button variant="primary" onClick={handleConnectWalletClick}>
                  Connect Wallet
                </Button>
              )}
              <a href="#" className="nav-toggler">
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
