import time
from algosdk.v2client import algod
from algosdk import encoding, constants, transaction
from .accounts import get_accounts
from src.contracts.escrow import EscrowAccount
from .helpers import compile_contract
from ..crowdfund_contract import FundingProject
ACCOUNT_NAMES = ['platform', 'creator', 'doner']

ALGOD_ADDRESS = "https://testnet-algorand.api.purestake.io/"
ALGOD_TOKEN = ""
HEADERS = {
    "X-API-Key": "ROs0KPlr9G71RxDhah1D2qp0sjiJQnV2NGGFOAUf",
}
print("Headers:", HEADERS)

algod_client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS, headers=HEADERS)
CROWDFUND_CONTRACT = FundingProject()
ESCROW_ACCOUNT = EscrowAccount()

class SimpleDemoApp():
    def __init__(self):
        self.accounts = {name: acc for name, acc in zip(ACCOUNT_NAMES, get_accounts())}
        self.client = algod.AlgodClient(ALGOD_TOKEN, ALGOD_ADDRESS)
        
        # Logging the creation process
        print("Initializing SimpleDemoApp...")
        print(f"Using accounts: {self.accounts}")

        # Compile the contract
        print("Compiling Crowdfund Contract...")
        self.crowdfund_approval = compile_contract(CROWDFUND_CONTRACT.approval_program(), self.client)
        print("Crowdfund Contract compiled successfully.")
        
    def run(self):
        # This is a placeholder for your main logic
        print("Running the SimpleDemoApp...")

if __name__ == '__main__':
    print("Starting the SimpleDemoApp...")
    app = SimpleDemoApp()
    app.run()
    print("Execution completed.")
