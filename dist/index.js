/*******************************************************************************
 *
 * Castr Library + SDK Main Entry Module
 *
 * This file offers access to the entire suite of Castr packages.
 *
 * Please visit https://castr.guru for more details.
 */

/* Initialize event emitter. */
import { EventEmitter } from 'events'

/* Import Castr classes */
// NOTE: This allows us to export a (default) module.
import { Address as _Address } from '@castrguru/address'
import { App as _App } from '@castrguru/app'
// import { Charts as _Charts } from '../packages/Charts/index.js'
import { Crypto as _Crypto } from '@castrguru/crypto'
// import { Db as _Db } from '../packages/Db/index.js'
// import { Defi as _Defi } from '../packages/Defi/index.js'
import { Hdnode as _Hdnode } from '@castrguru/hdnode'
import { Id as _Id } from '@castrguru/id'
// import { Ledger as _Ledger } from '../packages/Ledger/index.js'
import { Market as _Market } from '@castrguru/market'
import { Message as _Message } from '@castrguru/message'
// import { Next as _Next } from '../packages/Next/index.js'
// import { Nuxt as _Nuxt } from '../packages/Nuxt/index.js'
// import { Persona as _Persona } from '../packages/Persona/index.js'
import { Privacy as _Privacy } from '@castrguru/privacy'
import { Provider as _Provider } from '@castrguru/provider'
import { Request as _Request } from '@castrguru/request'
import { Utils as _Utils } from '@castrguru/utils'
import { Wallet as _Wallet } from '@castrguru/wallet'

/* Export (individual) Castr classes */
export const Address = _Address
export const App = _App
// export const Charts = _Charts
export const Crypto = _Crypto
// export const Db = _Db
// export const Defi = _Defi
export const Hdnode = _Hdnode
export const Id = _Id
export const Market = _Market
// export const Message = _Message
// export const Meta = _Meta
// export const Next = _Next
// export const Nostr = _Nostrb
// export const Persona = _Persona
export const Privacy = _Privacy
export const Provider = _Provider
export const Purse = _Purse
export const Request = _Request
export const Rostrum = _Rostrum
export const Rpc = _Rpc
export const Script = _Script
// export const Slim = _Slim
export const Token = _Token
export const Transaction = _Transaction
// export const Trezor = _Trezor
export const Utils = _Utils
export const Wallet = _Wallet
// export const Wasm = _Wasm
export const Zk = _Zk

//------------------------------------------------------------------------------

/* Export Address methods */
export { decodeAddress } from '@castrguru/address'
export { decodeBase58AddressFormat } from '@castrguru/address'
export { encodeAddress } from '@castrguru/address'
export { encodeBase58AddressFormat } from '@castrguru/address'
export { getSender } from '@castrguru/address'
export { listUnspent } from '@castrguru/address'
export { watchAddress } from '@castrguru/address'

/* Export Analytics methods */
// export { methodName } from '../packages/Analytics/index.js'

/* Export App methods */
export { copyToClipboard } from '@castrguru/app'

/* Export Charts methods */
// export { methodName } from '../packages/Charts/index.js'

/* Export Database methods */
// export { methodName } from '../packages/Db/index.js'

/* Export Utility methods */
export { isJson } from '@castrguru/utils'
export { shuffle } from '@castrguru/utils'
export { sleep } from '@castrguru/utils'

/* Export Wallet methods */
export { build } from '@castrguru/wallet'
export { getDerivationPath } from '@castrguru/wallet'
export { parseDerivationPath } from '@castrguru/wallet'
export { send } from '@castrguru/wallet'
export { WalletStatus } from '@castrguru/wallet'

//------------------------------------------------------------------------------

/**
 * Nexa Main (default) Module Class
 *
 * Main class/module for the Castr Library + Software Development Kit (SDK).
 *
 * NOTE: This is a (default) module, so it DOES NOT require curly braces
 *       when importing into your application.
 */
export default class Castr extends EventEmitter {
    constructor(_params) {
        /* Initialize Castr class. */
        console.info('Initializing Castr Library + SDK...')
        // console.log(JSON.stringify(_params, null, 2))
        super()

        /* Initialize wallet. */
        this.wallet = null

        // TBD
    }

    /* (Instance) test. */
    test() {
        return 'Hi Builder! This is a simple (Instance) test...'
    }

    /* (Static) test. */
    static test() {
        return 'Hi Builder! This is a simple (Static) test...'
    }

    /* (Emitter) test. */
    testEmitter() {
        this.emit('test', 'Hello Dev! This is a simple (Emitter) test...')
    }

    /**
     * Status
     *
     * Returns a readiness status for the Library.
     */
    static get status() {
        /* Initialize statuses. */
        const statuses = [{
            id: -1,
            message: 'error'
        }, {
            id: 0,
            message: 'unknown'
        }, {
            id: 1,
            message: 'ok'
        }]

        /* Set current status. */
        const currentStatus = statuses[2]

        /* Return current status. */
        return currentStatus
    }

    /**
     * Report
     *
     * Returns a JSON-formatted usage report for the Library.
     */
    static get report() {
        /* Initialize statuses. */
        const statuses = [{
            id: -1,
            message: 'error'
        }, {
            id: 0,
            message: 'unknown'
        }, {
            id: 1,
            message: 'ok'
        }]

        /* Set current status. */
        const currentStatus = statuses[2]

        /* Return current status. */
        return currentStatus
    }

    /* Address */
    // NOTE: This class is read-only and ONLY supports static methods.
    static get Address() {
        return _Address
    }

    /* Application */
    // static get App() {
    //     return _App
    // }

    /* Crypto */
    static get Crypto() {
        return _Crypto
    }

    /* Nexa ID Protocol */
    static get Id() {
        return _Id
    }

    /* Market */
    static get Market() {
        return _Market
    }

    /* Message */
    static get Message() {
        return _Message
    }

    /* Meta */
    // static get Meta() {
    //     return _Meta
    // }

    /* Persona */
    // static get Persona() {
    //     return _Persona
    // }

    /* Privacy */
    static get Privacy() {
        return _Privacy
    }

    /* Provider */
    static get Provider() {
        return _Provider
    }

    /* Purse */
    static get Purse() {
        return _Purse
    }

    /* Request */
    static get Request() {
        return _Request
    }

    /* Rostrum */
    static get Rostrum() {
        return _Rostrum
    }

    /* RPC */
    static get RPC() {
        return _Rpc
    }

    /* Script */
    static get Script() {
        return _Script
    }

    /* Transaction */
    static get Transaction() {
        return _Transaction
    }

    /* Utilities */
    static get Utils() {
        return _Utils
    }

    /* Wallet */
    static get Wallet() {
        return _Wallet
    }

    /* Wasm */
    // static get Wasm() {
    //     return _Wasm
    // }

    /* Zero Knowledge */
    static get Zk() {
        return _Zk
    }
}
