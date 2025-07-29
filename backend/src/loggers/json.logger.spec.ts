import { JsonLogger } from "./json.logger";

JsonLogger

describe('tests for JSON logger', () => {

    let logger

    beforeEach(() => {
        logger = new JsonLogger();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should return JSON formated message', () => {
        const formatedMessage = logger.formatMessage('log', 'test message', {testParam: 'test param'});

        expect(formatedMessage).toEqual(`{"level":"log","message":"test message","optionalParams":[{"testParam":"test param"}]}`)
    })

    it('should log message', () => {

        jest.spyOn(console, 'log');

        logger.log('test message', {testParam: 'test param'});

        expect(console.log).toHaveBeenCalledWith(`{"level":"log","message":"test message","optionalParams":[{"testParam":"test param"}]}`)
    })

    it('should log warn level message', () => {

        jest.spyOn(console, 'log');

        logger.warn('test message', {testParam: 'test param'});

        expect(console.log).toHaveBeenCalledWith(`{"level":"warn","message":"test message","optionalParams":[{"testParam":"test param"}]}`)
    })

    it('should log error level message', () => {

        jest.spyOn(console, 'log');

        logger.error('test message', {testParam: 'test param'});

        expect(console.log).toHaveBeenCalledWith(`{"level":"error","message":"test message","optionalParams":[{"testParam":"test param"}]}`)
    })
})