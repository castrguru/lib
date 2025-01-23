/* Import (test) modules. */
import { expect } from 'chai'

/* Import class. */
import { Utils } from '../../index.js'

/* Import (individual) modules. */
import {
    isHex,
    isJson,
    shuffle,
    sleep,
} from '../../index.js'

/* Import test(-ing) vectors. */
import {
    SLEEP_DURATION,
    TIMEOUT,
} from '../test_vectors.js'

/* Initialize globals. */
let result

describe( 'Utils (Unit) Test Suite', () => {
    before( () => {
        console.info( `  ↳ targeting all (non-mutating) JavaScript methods provided by the 'Utils' class.` )
    } )

    describe( 'Utils -> isHex', () => {
        it( 'should test a string is valid HEX', () => {
            /* Set hexidecimal value. */
            const hexVal = '1337beef'
            const hexTest = isHex(hexVal)

            expect(hexTest).to.be.true
        } )
    } )

    describe( 'Utils -> isJson', () => {
        it( 'should test a string is valid JSON', () => {
            /* Set hexidecimal value. */
            const jsonVal = '{"hi":"there!"}'
            const jsonTest = isJson(jsonVal)

            expect(jsonTest).to.be.true
        } )
    } )

    describe( 'Utils -> shuffle', () => {
        it( 'should shuffle an array of values', () => {
            /* Create an array. */
            const wagmi = [ 'we', 'all', 'gonna', 'make', 'it' ]
            const wagmiStr = wagmi.join()
            // console.log('WAGMI', wagmiStr)

            result = shuffle(wagmi)
            const resultStr = result.join()
            // console.log('SHUFFLE RESULT', resultStr)

            expect(resultStr).to.not.equal(wagmiStr)
        } )
    } )

    describe( 'Utils -> sleep', () => {
return
        it( 'should sleep for 5 seconds', async () => {
            /* Pause for 5 seconds. */
            result = await Utils.sleep(SLEEP_DURATION)
            expect(result).to.equal(undefined)
        } ).timeout(TIMEOUT)

        it( 'should sleep (again) for 5 seconds', async () => {
            /* Pause (again) for 5 seconds. */
            result = await sleep(SLEEP_DURATION)
            expect(result).to.equal(undefined)
        } ).timeout(TIMEOUT)
    } )

    describe( 'errors', () => {
        // TBD
    } )

} )
