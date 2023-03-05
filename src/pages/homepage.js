

import { useWeb3 } from "@3rdweb/hooks";
import { useEffect, useState } from "react";
import DeployerSuperToken from "../helpers/deploy_token";


const styles = {
    main: "flex-col space-around justify-center"
}

export default function HomePage() {

    const deploySuperToken = new DeployerSuperToken;
    const { address, connectWallet } = useWeb3();
    const [account, setAccount] = useState("");

    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const [count, setCount] = useState("");
    const [receiver, setReceiver] = useState("");

    const web3login = async () => {
        console.log("Sign in");
        connectWallet("injected");
    };

    const deployToken = async (e) => {
        e.preventDefault();

        const res = await deploySuperToken.deployContract(name, token, receiver, count);
        console.log(res);

        alert("done ig")
    }

    const mainnets = [
        { name: 'Ethereum', id: 1 },
        { name: 'Binance Smart Chain', id: 2 },
        { name: 'Polygon', id: 3 },
        // Add more mainnets as needed
    ];

    useEffect(() => {
        // window.ethereum.enable().then((myAccount) => setAccount(myAccount[0]));
    })


    return (
        <main className={styles.main}>
            <div className="bg-warmred">
            <header>
                <nav class="px-4 lg:px-6 py-2.5 ">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://flowbite.com" class="flex items-center">

                        </a>
                        <div class="flex items-center lg:order-2">
                            <button onClick={web3login} class="bg-bb text-white font-bold py-2 px-4 rounded">
                                Connect Metamask
                            </button>
                            <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"></a>
                            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        </div>
                    </div>
                </nav>
            </header>

            <div className="flex mt-4 items-center justify-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
<h1 className=" text-5xl text-bb font-gag ">SUPERTOKEN DEPLOYER</h1>

            </div>

            <form class="grid h-screen place-items-center">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Name
                        </label>
                        <input id="text-field-1" name="text-field-1" onChange={(e) => setName(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Symbol
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="text-field-2" name="text-field-2" onChange={(e) => setToken(e.target.value)} type="text" placeholder="" />
                    </div>
                </div>
                <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name" >Initial supply</label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="text-field-3" name="text-field-3" onChange={(e) => setCount(e.target.value)} />
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Recipient Address</label>
                    <input class="appearance-none block w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="text-field-3" onChange={(e) => setReceiver(e.target.value)} placeholder="0x87965468755ADF"/>
                </div>
                <button onClick={deployToken}className="bg-bb text-white font-bold py-2 px-4 rounded">
                                Deploy SuperToken
                            </button>
                <div className="bg-white-600">

                </div>
                
            </form>
            </div>
        </main>
    );
}



