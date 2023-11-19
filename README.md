Visit the demo here: [https://algo-refugee-economy.vercel.app/](https://algo-refugee-economy.vercel.app/)

Now i need to start docker
generate wallet
start the server with `./sandbox up`
then deploy contracts

https://developer.algorand.org/docs/sdks/python/

https://dispenser.testnet.aws.algodev.network/

Docs:
- Compile contracts from root with `python3 -m contracts.utils.compile_contracts`. This generates the teal files from the python files.
- Generate a new account using `bash new_account_gen.sh` inside your sandbox repo folder.
Check transaction at `http://localhost:8980/v2/transactions?pretty`
- Run the sandbox: In sandbox repo:`./sandbox up dev`
- Prepare the `accounts.py` which lists your accounts:
    - Find your `KMD_TOKEN` to fill into `accounts.py`. Here is how:
    Access the container's shell:
    `docker exec -it algorand-sandbox-algod /bin/bash`
    Search for the kmd.token file:
    `find / -name kmd.token 2>/dev/null`
    If the file is found, you can then use the cat command to display its contents:
    `cat /path/to/kmd.token`
- Deploy the contracts in your local sandbox:
Find `ALGOD_TOKEN` with `docker exec -it algorand-sandbox-algod /bin/bash` and `cat /opt/testnetwork/Node/kmd-v0.5/kmd.token`.
In the `demo.py` fill in your `ALGOD_TOKEN`, then go to `/` and run it with `python3 -m src.contracts.utils.demo`.
    - Check transaction at `http://localhost:8980/v2/transactions?pretty`
- Deploy the contracts on testnet:
Run `demo.js` at `/` with `node src/contracts/utils/demo.js`

Our deployment address: https://testnet.algoexplorer.io/address/BW2QA3UH7ZWEPPNWN4M4BANX7YQB6OIILHUVQVRP2TVG2HQ6M3P7DIN33M

To Do:
- Put SDGs on the website. Make it about refugees? Refugees make businesses. An example with Solar energy
- Update design https://themeforest.net/item/funden-crowdfunding-charity-react-template/34904624
- Add features that are missing
    - Add deadline
    - more ?!

Notes:
- https://docs.perawallet.app/references/pera-connect
- https://www.algorand.foundation/impact-sustainability

---

# AlgoStarter

Algostarter is a crowdfunding platform built on the Algorand blockchain. It solves several issues associated with traditional crowdfunding platforms by providing accessibility, efficiency, transparency, security, innovation, and community.

Website: https://algo-starter.vercel.app

## Features

Algostarter includes the following features:

- Create projects with descriptions and funding goals
- Browse available projects and fund them with Algo tokens
- Receive real-time updates on the status of your funded projects
- Use the Algorand blockchain for fast and secure transactions
- Verify and audit all transactions using the Algorand blockchain

## How to Use

To use Algostarter, follow these steps:

1. Create an Algorand account.
2. Fund your account with Algo tokens.
3. Browse available projects on Algostarter.
4. Fund projects that interest you or create your own project and raise funds.

## Installation

To use Algostarter, follow these steps:

1. Clone this repository: `git clone https://github.com/techsavage18/algostarter.git`
2. Install the required dependencies: `npm install`
3. Start the application: `npm start`

## Contributing

To contribute to Algostarter, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

## Credits

Algostarter was created by the team at Algostarter. Special thanks to the Algorand community for their support and contributions.

## License

Algostarter is released under the MIT License. See `LICENSE` for more information.


