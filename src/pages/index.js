import { useWeb3 } from "@3rdweb/hooks";
import { useEffect } from "react";
import Router from "next/router";
import HomePage from "./homepage";

export default function Home() {
  const { address, connectWallet } = useWeb3();

  const web3login = async () => {
    console.log("Sign in");
    connectWallet("injected");
  };

  useEffect(() => {
    if (address) {
      console.log("Address present", address);
      alert("Connected to " + address);
      // userDetails.fetchUserData(address).then((response) => {
      //   const userData = response.data.data;
      //   if (userData.length > 0) {
      //     console.log("Address exists and valid");
      //     Router.push("/dashboard");
      //   } else {
      //     console.log("Address exists but invalid");
      //     alert("Unregistered user. Please register first");
      //   }
      // }
      // );

    }
  }, [address]);

  return (
    <div>

      <HomePage />
    </div>
  );
}
