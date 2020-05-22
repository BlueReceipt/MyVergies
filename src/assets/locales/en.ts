const en = {
  main: {
    menu: {
      wallets: 'Wallets',
      add: 'Add new wallet',
      explorer: 'Explorer',
      contacts: 'Contacts'
    }
  },
  unlock: {
    unlockYourWallet: 'Unlock your wallet',
    password: 'Password',
    forgotPassword: 'I forgot my unlock password'
  },
  wallet: {
    send: 'Send',
    receive: 'Receive'
  },
  transaction: {
    transaction: 'Transaction',
    sent: 'Sent',
    sending: 'Sending',
    received: 'Received',
    receiving: 'Receiving',
    moved: 'Moved',
    pending: 'Pending',
    amount: 'Amount',
    date: 'Date',
    details: 'Details',
    address: 'Address',
    confirmations: 'Confirmations',
    txid: 'TXID'
  },
  send: {
    formDescription: 'Carefully fill in the required form fields.',
    confirmDescription: 'Confirm sending the given amout of XVG to the selected recipient',
    sendingDescription: 'Sending in progress... this doesn\'t take long',
    send: 'Verzend',
    fillForm: 'Fill form',
    confirm: 'Confirm',
    sending: 'Sending',
    sent: 'Sent',
    recipient: 'Recipient',
    recipientDetails: 'Insert a valid XVG address or stealth address',
    amount: 'Amount',
    amountDetails: 'Fillin the amount you want to send, transaction fee will be calculated automatically',
    internalMemo: 'Internal memo',
    internalMemoDetails: 'An optional internal memo',
    sendMax: 'Send max',
    reset: 'Reset',
    confirmTransaction: 'Confirm transaction',
    cancel: 'Cancel',
    transactionFee: 'Transaction fee',
    total: 'Total',
    transactionWarning: 'Double check that the wallet address is correct. Verge Currency cannot be held accountable for loss of XVG sent to wrong wallets.',
    signing: 'Signing',
    publishing: 'Publishing',
    broadcasting: 'Broadcasting',
    transactionSent: 'Transaction sent',
    transactionSentSubtitle: 'That\'s some epic stuff you great person',
    done: 'Done'
  },
  createWallet: {
    addYourFirstWallet: 'Add your first wallet',
    itsReallyEasy: 'It\'s really easy!',
    aWalletName: 'A wallet name?',
    aWalletNameDescription: 'This app allows you to create multiple wallets in one easy to use app!<br>So because of that let\'s give this wallet a name.',
    walletName: 'Wallet name',
    enterYourWalletName: 'Enter your wallet name',
    walletColor: 'Wallet color',
    advanced: 'Advanced',
    singleAddress: 'Use a single address',
    serviceURL: 'Service URL',
    writeDownPaperKey: 'Write down paper key',
    preferences: 'Preferences',
    paperKey: 'Paper key',
    aPaperKey: 'A paper key?',
    aPaperKeyDescription: 'A paper key is 1 of the 2 parts to define your wallet and open your wallet in another app.<br>If you loose it you can never recover it and you\'ll loose access to your XVG.<br>So make absolutely sure to keep it very safe.',
    confirmPaperKey: 'Confirm paper key',
    invalidPaperkeySelected: 'The selected in paper key isn\'t correct and doesn\'t match the original one. Please try again!',
    passPhrase: 'Pass phrase',
    passPhraseDescription: 'Encrypting your paper key is an important safety measure. Make sure when restoring a wallet to use your previous passphrase.',
    setupPassphraseReq1: 'Min. 8 characters',
    setupPassphraseReq2: 'Uppercase and lowercase',
    setupPassphraseReq3: 'Special character (!.,-#€%&+#)',
    setupPassphrasePassPlaceholder: 'Enter your passphrase',
    confirmPassphrase: 'Confirm your newly create passphrase',
    passphraseInvalid: 'The filled in passphrase isn\'t correct and doesn\'t match the original one. Please try again!',
    confirm: 'Confirm',
    back: 'Back',
    proceed: 'Proceed',
    createWallet: 'Create wallet',
    creatingWallet: 'Your wallet is being created...',
    walletCreated: 'Your wallet has been successfully created!',
    goToWallet: 'Go to wallet'
  },
  walletSettings: {
    walletSettings: 'Wallet settings',
    dangerZone: 'Danger zone',
    delete: 'Delete',
    deleteWallet: 'Delete wallet',
    deleteWalletDesc: 'This will delete your wallet from this application. Your wallet can still be restored by using your paper key and pass phrase. Please make absolutely sure you\'ve written down your paper key and know your pass phrase. Remember that your paper key + pass phrase is the only way to restore your current wallet.',
    deleteWalletConfirm: 'Are you sure you want to the delete your wallet <b>{name}</b>?',
    walletDeleted: 'Wallet <b>{name}</b> was deleted!'
  },
  settings: {
    settings: 'Settings',
    security: 'Security',
    language: 'Language',
    currency: 'Currency',
    currencyDetails: 'All fiat prices will be displayed in this currency',
    password: 'Password',
    changePassword: 'Change password',
    lockAfter: 'Lock after',
    lockAfterDetails: 'Lock application after the given amount of time',
    connection: 'Connection',
    torConnection: 'TOR connection',
    manageTorConnection: 'Manage TOR connection'
  }
}
export default en
