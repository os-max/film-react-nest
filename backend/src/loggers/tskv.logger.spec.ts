import { JsonLogger } from "./json.logger";
import { TSKVLogger } from "./tskv.logger";

JsonLogger

describe('tests for JSON logger', () => {

    let logger

    beforeEach(() => {
        logger = new TSKVLogger();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should return JSON formated message', () => {
        const formatedMessage = logger.formatMessage('log', 'test message', 'test param');

        expect(formatedMessage).toEqual(`level=log\tmessage=test message\toptionalParams=test param\n`)
    })

    it('should log message', () => {

        jest.spyOn(console, 'log');

        logger.log('test message', 'test param');

        expect(console.log).toHaveBeenCalledWith(`level=log\tmessage=test message\toptionalParams=test param\n`)
    })

    it('should log warn level message', () => {

        jest.spyOn(console, 'log');

        logger.warn('test message', 'test param');

        expect(console.log).toHaveBeenCalledWith(`level=warn\tmessage=test message\toptionalParams=test param\n`)
    })

    it('should log error level message', () => {

        jest.spyOn(console, 'log');

        logger.error('test message', 'test param');

        expect(console.log).toHaveBeenCalledWith(`level=error\tmessage=test message\toptionalParams=test param\n`)
    })
})